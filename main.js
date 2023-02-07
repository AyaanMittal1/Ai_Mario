function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_die = loadSound("mariodie.wav");
	game_over = loadSound("gameover.wav");
	coin_collect = loadSound("coin.wav");
	mario_kill = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
  	video.size(800,350);
	video.parent("game_console");
	posenet=ml5.poseNet(video,modal_loaded);
	posenet.on("pose",got_results);
  

}

function draw() {
	game()
}
function got_results(results){
	if(results.length >= 1){
	  noseX =results[0].pose.nose.x;
	  noseY =results[0].pose.nose.y;
	}
}
  function modal_loaded(){
	console.log("posenet has loaded");
  }
  






