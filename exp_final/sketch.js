
//
let galinha = [], galinha_=[], galinha_inv = [];
let randomgalinha = getRandomIndex(galinha);



function preload(){
  for(let i=0; i<10; i++){
    galinha_[i] = loadImage("img/galinha_"+ [i]+".png");
    galinha_inv[i] = loadImage("img/gal_"+ [i]+".png");


  }
  
}



//para texto em geral
let cr; //variável geral para cores css
let cores1 = ['var(--red)', 'var(--orange)', 'var(--dark-orange)', 'var(--brown)', 'var(--light-brown)', 'var(--light-yellow)', 'var(--yellow)', 'var(--dark-yellow)', 'var(--very-light-yellow)', 'var(--black)'];
let cores2 = ['var(--b-red)', 'var(--b-orange)', 'var(--b-dark-orange)', 'var(--b-brown)', 'var(--b-light-brown)', 'var(--b-light-yellow)', 'var(--b-yellow)', 'var(--b-dark-yellow)', 'var(--b-very-light-yellow)', 'var(--b-white)'];

//para o sketch
let crs; //variável geral para cores sketch
let cores1s = ['#F03A17', '#F7630C', '#CA5010', '#8E562E', '#BB9167', '#FCE100', '#FFB900', '#D48C00', '#FFD679', '#000000'];
let cores2s = ['#0FC5E8', '#089CF3', '#35AFEF', '#71A9D1', '#446E98', '#031EFF', '#0046FF', '#2B73FF', '#002986', '#FFFFFF'];

//para as fontes-> colocar mais fontes
let fonts = ["Lato", "Bauhaus 93", "Special Elite", "Spectacle", "Rubik Beastly", "Aldrich", "Avenir Next LT Pro Demi", "Bembo Std", "Bodoni MT"];

//let s = 'Lorem ipsum dolor'
let s = 'My name is <br> <span id="nome" class = "tone-1" style="color:var(--brown);font-weight:bold; cursor:pointer">Ema</span>';
let names = ['Ema', 'Mena', 'Marina', 'Potato', 'Egg', 'Chicken', '🐔', '🐣', '🌞', '🥔', '🍠'];
//let info = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et aliquet justo. Donec a felis finibus, gravida justo vitae, scelerisque sem. Mauris et erat magna. Aliquam erat volutpat. Sed placerat ut dolor a faucibus. Donec diam enim, tincidunt quis tellus sed, fringilla congue odio. Curabitur sit amet aliquam dolor.</p>';
//let info = 'caca';
let info = "<p>Hi, my name is Ema. I'm a designer student from University of Coimbra.</p> <p>My areas of interest are Web design, UI/UX Design and some Graphic design. </p> <p>I sometimes like to draw chickens and happy potatoes.</p> <p> <a href = https://www.behance.net/>Behance</a> <br> <a href= https://pt.linkedin.com/>Linkedin</a> <br><a href = https://www.instagram.com/>Instagram</a></p>"

//para o mode
document.querySelector('.buttonMode').addEventListener('click', changeMode)
let on = true;
cr = cores1;
crs = cores1s;
galinha = galinha_;
let randomIndex

function changeMode() {
  on = !on;
  if(on){
    document.querySelector('.buttonMode').innerHTML = "Mode <br> on";
    //document.querySelector('#nome').style.filter = 'none';
    cr = cores1;
    crs = cores1s;
    galinha = galinha_;
    changeColor();
    changeColors();
    document.querySelector('#nome').style.filter = 'none';
    
  }
  else {document.querySelector('.buttonMode').innerHTML = "Mode <br> off"
    cr = cores2;
    crs = cores2s;
    galinha = galinha_inv;
    changeColor();
    changeColors();
    if(randomIndex > 5){
      document.querySelector('#nome').style.filter = 'invert(100%)';
    } else if(randomIndex <= 5){
      document.querySelector('#nome').style.filter = 'none';
    }
  }
}





//document.querySelector('body').innerText = "ggewfwd";
let text = document.createElement('div');
text.classList.add("pres1");
text.innerHTML = s;
document.body.appendChild(text);

let text1 = document.createElement('div');
text1.classList.add('pres2');
text1.innerHTML = info;
document.body.appendChild(text1);

//geral random index
function getRandomIndex(max){
  return Math.floor(Math.random()*max);
}

//mudar cor (e fonte) de pres1
let ic = document.querySelector('.pres1');
document.querySelector('.button1').addEventListener('click', changeColor)

//tentar que esta funcao seja geral
function changeColor(){
  let randomIndex2 = getRandomIndex(cr.length);
  let randomStroke = getRandomIndex(cr.length);
  let randomFill = getRandomIndex(cr.length);
  document.querySelector('.pres1').style.color =  cr[randomIndex2];
  let bt = document.querySelectorAll('.button');
  bt.forEach(el => el.style.backgroundColor =  cr[randomIndex2]);
  bt.forEach(el => el.style.color =  cr[randomStroke]);
  document.querySelector('.pres2').style.backgroundColor = cr[randomFill];
  document.querySelector('.pres2').style.color = cr[randomStroke];
  document.querySelector('#nome').style.color = cr[randomStroke];
  corFill = crs[randomFill];
  corStroke = crs[randomStroke];
  
  randomgalinha = getRandomIndex(10);
   randomchi = getRandomIndex(10);
   randomalca = getRandomIndex(10);
   randombota = getRandomIndex(10);
   randomcach = getRandomIndex(10);
   randomcolar = getRandomIndex(10);
   randomcurta = getRandomIndex(10);
   randomsaia = getRandomIndex(10);
}

//mudar cor background
document.querySelector('.button3').addEventListener('click', changeColors)

function changeColors(){
let randomIndexs = getRandomIndex(crs.length);
 cor = crs[randomIndexs];
 
}


//mudar fonte
document.querySelector('.button2').addEventListener('click', changeFont)

function changeFont(){
  let randomIndex3 = getRandomIndex(fonts.length);
  document.querySelector('.pres1').style.fontFamily = fonts[randomIndex3];
}



//mudar aleatóriamente o nome de pres1
document.querySelector('#nome').addEventListener("click", changeNames);

function changeNames() {
  randomIndex = getRandomIndex(names.length);
  document.querySelector('#nome').innerHTML = names[randomIndex];


  if(!on){
    if(randomIndex > 5){
      document.querySelector('#nome').style.filter = 'invert(100%)';
    } else if(randomIndex <= 5){
      document.querySelector('#nome').style.filter = 'none';
    }

  }
 
}








let points = []; //cria um array de pontos
let dragPoint = null; // boolean se drag está ativo ou não

let numPoints = 5; 
let dragRadious = 30; // raio do circulo
let cor = crs[4];
let corStroke = crs[3];
let corFill = crs[8];
//let tudo = [galinha[1], ocu[1], cach[1], colar[1], alca[1], curta[1], polo[1], saia[1], calca[1], bota[1], chi[1]];


//background n muda porque precisa de atualizar...

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);

  //tudo = [galinha[randomgalinha], ocu[randomocu], cach[randomcach], colar[randomcolar], alca[randomalca], curta[randomcurta], polo[randompolo], saia[randomsaia], calca[randomcalca], bota[randombota], chi[randomchi]];

  for(let i = 0; i < numPoints; i++){
    points.push(createVector(random(width), random(height))); // cria um vetor para cada ponto (um x e um y)
  }

  
}

function draw() {
  //background('#8E562E');
  background(cor);
  //fill('#FFD679');
  fill(corFill);
  stroke(corStroke);
  imageMode(CENTER);
  //image(tudo[9], mouseX, mouseY, 200, 200);
  

  for (let p of points){ //cria os pontos
    image(galinha[randomgalinha], p.x, p.y, 302, 588);
    circle(p.x, p.y, dragRadious * 2);
  }
}

function mousePressed(){
  
}

function mouseDragged(){
  for(let i = points.length - 1; i>=0; i--){
    if(mouseInCircle(points[i], dragRadious)){
      dragPoint = points.splice(i, 1);
      dragPoint.X = mouseX;
      dragPoint.y = mouseY;
      //trazer drag para a frente
      points.push(dragPoint);

      break;
    }
  }
  if(dragPoint){
    dragPoint.x = mouseX;
    dragPoint.y = mouseY;
  }

}


function mouseReleased(){
  dragPoint = null;
}

function mouseInCircle(pos, radius){ //se mouse está no circulo
  return dist(mouseX, mouseY, pos.x, pos.y) < radius

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}










//https://github.com/processing/p5.js/wiki/Global-and-instance-mode











