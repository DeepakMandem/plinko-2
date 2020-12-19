var plinko = [];
var particle = [];
var division = [];
var ground

function setup() {
  createCanvas(800,400);
  
  ground = new Ground(400,370,width,30);
  division1 = new Division(80,200,20,200);
  division2 = new Division(160,200,20,200);
  division3= new Division(240,200,20,200);
  division4 = new Division(320,200,20,200);
  division5 = new Division(400,200,20,200);

}

function draw() {
  background(255,255,255);  
  
  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  
  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,125));
  }

  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,150));
  }
  
  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  }
  
  for (var j = 0; j < particles.length; j++){

    particles[j].display();
  }
  
  drawSprites();


}