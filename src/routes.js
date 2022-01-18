const { Router } = require('express');
const msAuthLibrary = require('@azure/msal-node');
const msAuthConfig = require('./config/msAuthConfig')

const routes = new Router();

const confidencialClienteApplication = new msAuthLibrary.ConfidentialClientApplication(msAuthConfig);

routes.get('/', (req, res) => {
    const authCodeUrlParameters = {
        scopes: ["user.read"],
        redirectUri: "http://localhost:3000/login",
    };

    // get url to sign user in and consent to scopes needed for application
    confidencialClienteApplication.getAuthCodeUrl(authCodeUrlParameters).then((response) => {
        res.redirect(response);
    }).catch((error) => console.log(JSON.stringify(error)));
});

routes.get('/login', (req, res) => {
    const tokenRequest = {
        code: req.query.code,
        scopes: ["user.read"],
        redirectUri: "http://localhost:3000/login",
    };

    confidencialClienteApplication.acquireTokenByCode(tokenRequest).then((response) => {
        console.log("\nResponse: \n:", response);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.status(500).send(error);
    });

    console.log(res)
});

module.exports = routes;
