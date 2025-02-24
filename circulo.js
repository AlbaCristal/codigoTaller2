function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
}

Circulo.prototype.actualizar = function() { 
    if (this.x < this.juego.ctx.canvas.width) {
        this.x += 2;
    }
    else {
        this.x = 0;
    }
};

Circulo.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.fillStyle = "blue";
    ctx.arc(this.x, this.y, 50, 0, Math.PI*2, false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
};