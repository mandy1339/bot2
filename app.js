var restify = require('restify');
var builder = require('botbuilder');

var connector = new builder.ChatConnector().listen();

// start server
var server = restify.createServer();
server.listen(8000, function() {
  console.log('listening on 8000 ', 'url = ', server.url);;
});

// create chat connector
var connector = new builder.ChatConnector();

// listen to messages (have connector listen to API endpoint)
server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {
  var customMessage = new builder.Message(session)
    .text(`**you said ${session.message.text}**.`)
    .textFormat("markdown")
    .textLocale("en-us");
  session.send(customMessage); // Sends a markdown formated message
  //session.send("you said: %s", session.message.text);
});


