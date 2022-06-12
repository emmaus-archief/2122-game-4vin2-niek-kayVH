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
var spelerY = 615; // y-positie van speler

var img; // plaatje speler
var img2; // plaatje vijand
var img3; // plaatje achtergrond
var img4; // plaatje uitleg
var img5; // plaatje gameover
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */
var vijandX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // x-positie van vijand
var vijandY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // y-positie van vijand
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
  if (spelerY > 615) {
    spelerY = 615;
  }

  function setup() {
    image(img, 0, 0);
    image(img2, 0, 0);
  }


  // vijand

  // kogel
};
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing kogel tegen vijand

  // update punten en health

  // vijanden spawnen opnieuw
  for (var i = 0; i < vijandX.length; i++) {

    vijandX[i] = vijandX[i] - 5;
    if (vijandX[i] < 0) {
      vijandX[i] = random(1280, 5000);
    }
  }

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  image(img3, 0, 0, 1280, 720);
  

  // vijand
  fill('white');
  for (var i = 0; i < vijandX.length; i++) {
    image(img2, vijandX[i], vijandY[i], 125, 125);
  }




  // kogel

  // speler
  image(img, spelerX, spelerY, 125, 125);
  // punten en health
}
/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  for (var a = 0; a < vijandY.length; a++)
    if (spelerX - vijandX[a] < 100 &&
      spelerX - vijandX[a] > -100 &&
      spelerY - vijandY[a] < 100 &&
      spelerY - vijandY[a] > -100) {
      return true;
    }
  // check of HP 0 is , of tijd op is, of ...
  return false;
};
/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */
function preload() {
  img = loadImage('Afbeeldingen/kevin.webp');
  img2 = loadImage('Afbeeldingen/eyeball.webp');
  img3 = loadImage('Afbeeldingen/Afbeelding.webp');
  img4 = loadImage('Afbeeldingen/Uitleg.webp');
  img5 = loadImage('Afbeeldingen/Gameover.jpg');
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
  // randomize
  for (var i = 0; i < vijandX.length; i++) {

    vijandY[i] = random(25, 750);
  }
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
    background(img5, 0, 0, 1280, 720);
    textSize(50);
    fill('white');
    text('Game Over, Klik SPATIE voor nieuw spel', 190, 350);
    textSize(30);
    text('Klik E om terug te gaan naar het menu', 375, 400);
    for (var i = 0; i < vijandX.length; i++) {
      if (vijandX[i] <= 1200) {
        vijandX[i] = 0
      }
    }
    if (keyIsDown(32)) {
      spelerX = 375;
      spelerY = 615;
      spelStatus = SPELEN;
    }
    if (keyIsDown(69)) {
      spelStatus = UITLEG;
    }
  }
  if (spelStatus === UITLEG) {
    console.log('uitleg')
    background(img4, 0, 0, 1280, 72);
    textSize(50);
    fill('white');
    text('Welkom bij The Flying Dutchman!', 150, 150);
    textSize(30);
    text('Er komen straks vijanden jouw kant op', 150, 225);
    text('Door de toets W ga je omhoog om deze te ontwijken', 150, 275);
    text('Probeer zo lang mogelijk te overleven', 150, 325);
    text('Veel speel plezier!', 150, 375);
    text('Druk op ENTER om het spel te starten', 150, 550);
    if (keyIsDown(13)) {
      spelerX = 375;
      spelerY = 615;
      spelStatus = SPELEN;
    }
  }
}
