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
