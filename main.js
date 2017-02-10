var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var Mickey = require('./mickey.js');
var player = new Mickey(200, 200);


function gameLoop() {
    ctx.clearRect(0, 0, c.width, c.height);
    player.draw(ctx);
    window.requestAnimationFrame(gameLoop);
}
gameLoop();
