var piping = require('piping');

if(piping( { ignore: /(\/\.|~$|\.log|package\.json|public\/|views\/)/ } )){
  var server = require("./server");
  server.run();
}