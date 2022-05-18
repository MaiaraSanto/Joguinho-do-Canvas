
// Criando parâmetros para a função
function Sprite (x, y, largura, altura ) {
  this.x = x;
  this.y = y;
  this.largura = largura;
  this.altura = altura;

 // Parâmetros para fundo do jogo
  this.desenha = function(xCanvas, yCanvas) {
      ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    
  }

}


// Parâmetro para o boneco
var bg = new Sprite(0, 0, 600, 600),
 spriteBoneco = new Sprite(618, 16, 87, 87 ); 

// Parâmetro para as figuras do Canvas 
 perdeu = new Sprite(603, 478, 397, 358),
 jogar = new Sprite(603, 127, 397, 347),
 novo = new Sprite(68, 721, 287, 93),
 spriteRecord = new Sprite(28, 879, 441, 95),spriteChao = new Sprite(0, 604, 600, 54);

 // Parâmetros para os obstáculos
redObstacle = new Sprite(662, 867, 50, 120),
pinkObstacle = new Sprite(719, 867, 50, 120),
blueObstacle = new Sprite(779, 867, 50, 120),
greenObstacle = new Sprite(839, 867, 50, 120),
yellowObstacle = new Sprite(898, 867, 50, 120);