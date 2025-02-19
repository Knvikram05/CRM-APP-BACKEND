const { response } = require("express");

let Client = require(`node-rest-client`).Client
 //this client can do what postman can do 
let client = new Client();

module.exports = (ticketId, subject, content, emailIds, requester) => {
    let reqBody = {
        "subject": subject,
        "ticketId": ticketId,
        "content": content,
        "receipientEmails": emailIds,
        "requester": requester 
    }

    const args = {
        data: reqBody,
        headers: {"Content-Type": "application/json"}
    }

    client.post("http://127.0.0.1:3030/notifiServ/api/notifications/",
    args,
    (data, response) => {
        console.log("Request sent")
        console.log(data)
    })
}