# Code challenge

### Features:
:heavy_check_mark: login functionality
- server and client user validation
- auto logout (when token expired)

:heavy_check_mark: responsive design
- looks good on different devices </br>

## What I am using: 

Back-end: 
- node.js
- express.js
- mongoDB
- bcrypt
- JWT
- cookie-session

Front-end:
- react
- react-router-dom ver.6.8
- axios
- sass
- react-icons

## Demo:
- Deployed project is [here]()

### Usage:

Credentials to test login functionality:

1.User exists in db and have access to resourse <br/>
Email: john.doe@example.com
Password: john.doe@example.com

2.User exists in db and do NOT access to resourse <br/>
Email: jane.doe@example.com
Password: jane.doe@example.com

3. User that doesn't exist in db can't login in app

### Running application:
Make sure you have own credentials in server/.env for:
- MONGO_URI
- PORT
- JWT_SECRET_KEY (random string)
- NODE_ENV = 'development' 

1. Clone the repo or download it
2. Open your terminal on client folder and run command "npm install"
3. Open your terminal on server folder and run command "npm install"
4. Having terminal terminal open on server run command "npm run app" (or run command "npm start" in both terminal)
