import React, {Component} from 'react'
import {
    Pagination as ReactPagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap'

const getPageRange = (page, lastPage) => {
    const offset = 3

    const pagesBefore = Math.max(0, page - offset);
    const pagesAfter = Math.min(page + offset, lastPage);

    return Array(pagesAfter - pagesBefore + 1)
        .fill()
        .map((value, key) => (pagesBefore + key))
}

export class Pagination extends Component {
    getLastPage = () => {
        const { total, limit } = this.props

        return Math.ceil(total / limit) - 1
    }

    changePage = (page) => {
        const { changePage } = this.props

        changePage(page)
    }

    toFirstPage = () => {
        this.changePage(0)
    }

    toLastPage = () => {
        this.changePage(this.getLastPage())
    }

    toNextPage = () => {
        const { page } = this.props

        this.changePage(page + 1)
    }

    toPreviousPage = () => {
        const { page } = this.props

        this.changePage(page - 1)
    }

    render () {
        const {
            total,
            page,
            limit,
        } = this.props

        const lastPage = this.getLastPage()
        const isFirstPage = page <= 0
        const isLastPage = page >= lastPage

        const showFromItem = (page * limit) + 1
        let showToItem = (page * limit) + limit
        if (showToItem > total) {
            showToItem = total
        }

        return (
            <div className="d-flex align-items-center justify-content-between">
                {total > 0 && (
                    <span>{`Showing ${showFromItem}-${showToItem} of ${total}`}</span>
                )}
                <ReactPagination aria-label="Page navigation">
                    <PaginationItem disabled={isFirstPage}>
                        <PaginationLink
                            onClick={this.toFirstPage}
                        >
                            First
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled={isFirstPage}>
                        <PaginationLink
                            onClick={this.toPreviousPage}
                            previous
                        />
                    </PaginationItem>
                    {getPageRange(page, lastPage).map((pageNumber) => (
                        <PaginationItem
                            key={pageNumber}
                            active={pageNumber === page}
                        >
                            <PaginationLink
                                onClick={() => this.changePage(pageNumber)}
                            >
                                {pageNumber + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem disabled={isLastPage}>
                        <PaginationLink
                            onClick={this.toNextPage}
                            next
                        />
                    </PaginationItem>
                    <PaginationItem disabled={isLastPage}>
                        <PaginationLink
                            onClick={this.toLastPage}
                        >
                            Last
                        </PaginationLink>
                    </PaginationItem>
                </ReactPagination>
            </div>
        )
    }
}
