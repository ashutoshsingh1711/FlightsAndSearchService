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

## DB Design

    - Airplane Table
    - Flight Table
    - Airport Table
    - City Table

- A flight belongs to an airplane but one airplane can be used in muliple flights.
- A City has many airports but one airport belongs to one city
- One airport can have many flights, but a flight belongs to one airport.

# IMPORTANT SEQUELIZE COMMANDS-

npx sequelize init
npx sequelize db:create

npx sequelize model:generate --name City --attributes name:String
npx sequelize db:migrate

npx sequelize db:migrate:undo

Whatever changes we do in model file that is at javascript level not at database table level, for reflecting the changes in db level we need to add changes in migration file.
