(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./mickey.js":2}],2:[function(require,module,exports){
function Mickey (x,y){
    this.mickeyX = x;
    this.mickeyY = y;
    var self =this;
    document.addEventListener("keydown", function(e) {
        console.log(e.keyCode);
        if (e.keyCode === 37) self.mickeyX -= 5;
        if (e.keyCode === 39) self.mickeyX += 5;
        if (e.keyCode === 38) self.mickeyY -= 5;
        if (e.keyCode === 40) self.mickeyY += 5;
    });

}

Mickey.prototype.draw = function(ctx){
    var x = this.mickeyX;
    var y = this.mickeyY;
    ctx.beginPath();
    ctx.ellipse(x,y,50,50,0,0,2 * Math.PI);
    ctx.fill();
    ctx.ellipse(x-56,y-56,30,30,0,0,2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(x+57,y-56,30,30,0,0,2 * Math.PI);
    ctx.fill();
    ctx.closePath();


}
module.exports = Mickey;

},{}]},{},[1]);
