const app = require('./app');
require('dotenv').config();

const SERVER_PORT = 3000;

app.listen(SERVER_PORT, () => {
  console.log(`Msal Node Auth Code Sample app listening on port ${SERVER_PORT}!`)
})

