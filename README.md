

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
http://localhost:13373/adminer.php this will take you to adminer. The login credentials for adminer are
1. `server`: db
2. `username`: root
3. `password`: qwertyui
4. `database`: api

 Once logged in, simply navigate to the api table and
import members.sql file, which can be located in the `api` folder of the project.

