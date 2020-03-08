# Intellipharm-challange

This challenge took about 6 hours total, not including environment setup and the link
but including code tidy up, repo setup and manual testing to make sure docker and everything
worked correctly.

I strongly believe I have been able to complete all tasks stated except for the 5th UI task,
which was to drill into the chart for further detail.

I had not attempted charts before and this proved to be a unique challenge, which I thought would be 
fairly simply turned out to be rather complex. I do believe I would of been able to achieve this task
however it would of taken considerably more time, possible a day or so without assistance or guidance 
to fully comprehend the abilities and means to complete it.

I based this project of a number of others that I have done similar, and some areas might of proven
to be overkill, however it is the setup and environment i felt most comfortable in delivering the tasks.

# Prerequisites

1. `node installed` - If node is not installed please download from here https://nodejs.org/en/download/
2. `Docker Compose installed` - If docker is not installed please follow the instructions here https://docs.docker.com/compose/install/

# Running Project

1. Upon downloading the project the first step in the root of the project is to run `docker-compose up -d` this
should spin up the required docker containers to allow the api and database to function

2. Next you should `cd into the code` folder and run `npm install` this will install all the node packages
used in this project to facilitate its function

3. Once the packages have been installed simply run `npm start` in the code folder and it will spin up
the node server where the site can be accessed.

# Notes

I will link here that the api can be accessed through http://localhost:1337/api/members.php as long
as the docker container is spun up and working correctly. 

Also in cases where i have redeployed the project to other repos docker maintained the sql database,
If it hasn't then the easiest method to restore the database for this challenge is to go to
http://localhost:13373/adminer.php this will take you to adminer where you can use the login credentials
in the `docker-compose.yml` file under the db section. Once logged in, simply navigate to the api table and
import members.sql file, which can be located in the `api` folder of the project.

