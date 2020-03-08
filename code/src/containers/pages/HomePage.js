import React, { Component } from 'react';
import axios from 'axios';
import {
    Table,
    Input,
    Button,
    Container
} from 'reactstrap'
import { Pagination } from "../../components/shared/Pagination";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { graphData } from "../../utils/helpers";

// I would typically store this in the .env file but thought for the purpose of the challenge would be better here
const API_PATH = 'http://localhost:1337/api/contacts.php';

export class homePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            rowCount: 25,
            firstname: '',
            surname: '',
            email: '',
            gender: '',
            joined_date: '',
            paginatedData: [],
            fullData: [],
            fullDataLength: 0,
        }
        const { offset, rowCount } = this.state
        axios.get(`${API_PATH}?offset=${offset}&rowCount=${this.state.rowCount}`).then(response => {
            this.setState({
                paginatedData: response.data
            })
        })

        axios.get(`${API_PATH}?offset=0&rowCount=1000`).then(response => {
            this.setState({
                fullData: response.data,
                fullDataLength: response.data.length,
            })
        })
    }

    onChange = (event) => {
        const { name, value } = event.currentTarget

        this.setState({
            [name]: value,
        })
    }

    search = async () => {
        const {
            offset,
            rowCount,
            firstname,
            surname,
            email,
            gender,
            joined_date
        } = this.state
         await axios.get(
             `${API_PATH}?offset=${offset}&rowCount=${rowCount}&firstname=${firstname}&surname=${surname}&email=${email}&gender=${gender}&joined_date=${joined_date}`)
             .then(response => {
            this.setState({
                paginatedData: response.data,
                // To doing this for the hacky way i am doing total data calc
            })
        })

        // This is to make sure to gain the full length of the new data set that is being searched
        await  axios.get(
            `${API_PATH}?offset=${offset}&rowCount=1000&firstname=${firstname}&surname=${surname}&email=${email}&gender=${gender}&joined_date=${joined_date}`)
            .then(response => {
            this.setState({
                fullDataLength: response.data.length
            })
        })
    }

    onChangePage = async (index) => {
        await axios.get(
            `${API_PATH}?offset=${index}&rowCount=${this.state.rowCount}&firstname=${this.state.firstname}&surname=${this.state.surname}&email=${this.state.email}&gender=${this.state.gender}&joined_date=${this.state.joined_date}`)
            .then(response => {
                this.setState({
                    paginatedData: response.data
                })
            })

        this.setState({
            offset: index,
        })
    }

    render() {
        const {
            offset,
            rowCount,
            fullData,
            fullDataLength,
        } = this.state
        return (
            <Container>
                <BarChart
                    width={1000}
                    height={600}
                    data={graphData(fullData)}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="signedUp" fill="#8884d8" />
                </BarChart>
                <Table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Joined Date</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Input
                                    bsSize="sm"
                                    type="text"
                                    name="firstname"
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <Input
                                    bsSize="sm"
                                    type="text"
                                    name="surname"
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <Input
                                    bsSize="sm"
                                    type="text"
                                    name="email"
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <Input
                                    bsSize="sm"
                                    type="text"
                                    name="gender"
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <Input
                                    bsSize="sm"
                                    type="text"
                                    name="joined_date"
                                    onChange={this.onChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Button onClick={this.search}>Search</Button>
                <Pagination
                    page={offset}
                    limit={rowCount}
                    total={fullDataLength}
                    changePage={this.onChangePage}
                />
                <Table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Joined Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.paginatedData !== [] && (
                            this.state.paginatedData.map((dataSingle) => (
                                <tr>
                                    <td>{dataSingle.firstname}</td>
                                    <td>{dataSingle.surname}</td>
                                    <td>{dataSingle.email}</td>
                                    <td>{dataSingle.gender}</td>
                                    <td>{dataSingle.joined_date}</td>
                                </tr>
                            ))
                        )
                    }
                    </tbody>
                </Table>
            </Container>
        );
    }
}


