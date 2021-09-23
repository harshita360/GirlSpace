const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const register = require("./router/user.route");
const updates = require("./router/list.route");
const comments = require("./router/comment.route");
const expressWs = require("express-ws");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const app = express();

app.use(bodyParser.json());

const wsInstance = expressWs(app);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use("/first", register);
app.use("/updates", updates);
app.use("/comments", comments);

const oauth2Client = new OAuth2(
     "785462276293-tkebq28457vm9oo6me57e84teh14im5c.apps.googleusercontent.com", // ClientID
     "QF3Ya___UI8rz_9PtCxPbeaf", // Client Secret
     "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
     refresh_token: "1//0472b-_L83EiJCgYIARAAGAQSNwF-L9Irh4izP07KMeo99T6nAq1B57Q5967nBH4OgwL4Z6UTWR5HDxhvQJCEZ4v2mdeJqrmADVw"
});
const accessToken = oauth2Client.getAccessToken()

const smtpTransport = nodemailer.createTransport({
     service: "gmail",
     auth: {
          type: "OAuth2",
          user: "shree.harshita2000@gmail.com",
          clientId: "785462276293-tkebq28457vm9oo6me57e84teh14im5c.apps.googleusercontent.com",
          clientSecret: "QF3Ya___UI8rz_9PtCxPbeaf",
          refreshToken: "1//0472b-_L83EiJCgYIARAAGAQSNwF-L9Irh4izP07KMeo99T6nAq1B57Q5967nBH4OgwL4Z6UTWR5HDxhvQJCEZ4v2mdeJqrmADVw",
          accessToken: accessToken
     },

     tls: {
     rejectUnauthorized: false
}
});

const mailOptions = {
     from: "shree.harshita2000@gmail.com",
     to: "harshita360@gmail.com",
     subject: "Node.js Email with Secure OAuth",
     generateTextFromHTML: true,
     html: "<b>test</b>"
};
// smtpTransport.sendMail(mailOptions, (error, response) => {
//      error ? console.log(error) : console.log(response);
//      smtpTransport.close();
// });





app.get("/", () => {
  console.log("hello");
});



module.exports = app;
