/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library
   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */
/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 3;
var spelStatus = UITLEG;
var spelerX = 375; // x-positie van speler
var spelerY = 670; // y-positie van speler

var img; // plaatje speler
var img2; // plaatje vijand
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */
var vijandX = [3000, 2800, 2600, 2400, 2200, 1000, 8000, 600, 400] // x-positie van vijand
var vijandY = [400, 700, 100, 550, 400, 200, 300, 600, 800] // y-positie van vijand
/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
if (keyIsDown(87)) {
  spelerY = spelerY - 6;
}
else {
  spelerY = spelerY + 5;
}
if (spelerY < 0) {
   spelerY = 0;
 }
if (spelerY > 670) {
   spelerY = 670;
 }

 function setup() {
  image(img, 0, 0);
}


  // vijand
  function setup() {
    image(img2, 0, 0);
  }
  // kogel
};
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
if (spelerX - vijandX <50 &&
    spelerX - vijandX > -50 &&
    spelerY - vijandY <50 &&
    spelerY - vijandY > -50) {
    console.log("botsing");
    }

  

  // botsing kogel tegen vijand

  // update punten en health
 

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
 fill('blue'); 
 rect(0,0,1280,720);
  
 // vijand
 fill ('white');
 for(var i = 0;i < vijandX.length; i++){
   if(vijandX[i] > 0){
  vijandX[i] = vijandX[i] - 3;
  image(img2, vijandX[i], vijandY[i], 60, 60);
   }
  }
  
    
  
  // kogel
 
  // speler
  image(img, spelerX, spelerY, 60, 60);
  // punten en health
};
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  for(var a = 0; a<vijandY.length; a++)
  if (spelerX - vijandX[a] <50 &&
    spelerX - vijandX[a] > -50 &&
    spelerY - vijandY[a] <50 &&
    spelerY - vijandY[a] > -50) {
      return true;
    }
  // check of HP 0 is , of tijd op is, of ...
  return false;
};
/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload() {
  img = loadImage('kevin.webp');
  img2 = loadImage('eyeball.webp')
}
/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}
/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
    console.log('spelen');
  }
  if (spelStatus === GAMEOVER) {
    console.log('game over');
    textSize(50);
    fill('white');
    text('Game Over, Press Space To Start', 150, 150);
    if (keyIsDown(32)) {
      spelStatus = UITLEG;
    }
  }
  if (spelStatus === UITLEG) {
    console.log('uitleg')
    background('blue');
    textSize(50);
    fill('white');
    text('Uitleg: Enter To Restart', 150, 150);
    if (keyIsDown(13)) {
      vijandX = [3000, 2800, 2600, 2400, 2200, 1000, 8000, 600, 400];
      spelerX = 375;
      spelerY = 670;
    spelStatus = SPELEN;
     }
  }
}
