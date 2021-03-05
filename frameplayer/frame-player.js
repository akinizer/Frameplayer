//session check
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("ontent-Type", "text/plain");
  res.end("Hello World");
});

const localhost = "http://" + hostname + ":" + port + "/";

server.listen(port, hostname, () => {
	console.log("Server running at " + localhost);	
	
});


var id_html;
//frame player
class FramePlayer {
	
	
	constructor(new_html) {
		id_html=new_html;
	}

	play(){
		
	
	}
	pause(){
	  
	}
	
	executeActivity(activityName,idOfHtmlElement){
		if(activityName=="downloadcomplete"){
			var player = new FramePlayer(idOfHtmlElement);
			player.on("downloadcomplete", function(ms) {
				console.log("download completed in " + ms);
			});
		}
		else if(activityName=="play"){
			var player = new FramePlayer(idOfHtmlElement);
			player.on("play", function(ms) {
				console.log("video is playing now");
			});
		}
		else if(activityName=="pause"){
			var player = new FramePlayer(idOfHtmlElement);
			player.on("pause", function(ms) {
				console.log("video is paused");
			});			
		}
		else if(activityName=="end"){
			var player = new FramePlayer(idOfHtmlElement);
				player.on("end", function() {
			console.log("video is completed");
			});
		}
		
	}
  
	
}	

var player = new FramePlayer();
	player.play();
	player.pause();



