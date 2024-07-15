# Welcome to Flight Service

# Project Setup

    -clone the project
    -Execute `npm install`
    -create .env file in root directory and add the following environment variable
        - `PORT=3000`
    -inside the `src/config` folder create a new file `config.json` and then add the following piece of json.
        {
            "development": {
                "username": <USERNAME>,
                "password": <PASSWORD>,
                "database": <DATABASE_NAME>,
                "host": "127.0.0.1",
                "dialect": "mysql"
            },
        }
    -Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

# IMPORTANT SEQUELIZE COMMANDS-

npx sequelize init
npx sequelize db:create
