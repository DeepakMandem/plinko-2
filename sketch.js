var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles =[];
var plinkos = [];
var divisions = [];
var score = 0;
var turn = 0;
var gameState = "start";
var gameState = "end"

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  
  if(score>0){
    turn = turn + 1

  }
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  
  

  text("100  " , width-790, 600)
  text("100  " , width-710, 600)
  text("200  " , width-630, 600)
  text("200  " , width-550, 600)
  text("300  " , width-470, 600)
  text("300  " , width-390, 600)
  text("400  " , width-310, 600)
  text("400  " , width-230, 600)
  text("500  " , width-150, 600)
  text("500  " , width-70, 600)
  
  if(particle=null)
  {
      particle.display();

      if (particle.body.position.y<600 && particle.body.position.x > 80){
       
          
        {
          
          particle=null;
          score=score+100
          if (turn>= 5) gameState ="end";
        }
      }
    }

    if(particle=null)
  {
      particle.display();

      if (particle.body.position.y<600 && particle.body.position.x ==(80,160)){
       
          
        {
          
          particle=null;
          score=score+100
          
        }
      }
    }
    if(particle=null)
  {
      particle.display();

      if (particle.body.position.y<600 && particle.body.position.x ==(160,240)){
       
          
        {
          
          particle=null;
          score=score+200
          
        }
      }
    }
    if(particle=null)
  {
      particle.display();

      if (particle.body.position.y<600 && particle.body.position.x ==(240,320)){
       
          
        {
          
          particle=null;
          score=score+200
          
        }
      }
    }
    if(particle=null)
  {
      particle.display();

      if (particle.body.position.y<600 && particle.body.position.x ==(320,400)){
       
          
        {
          
          particle=null;
          score=score+300
          
        }
      }
    }

    if(particle=null)
    {
        particle.display();
  
        if (particle.body.position.y<600 && particle.body.position.x ==(400,480)){
         
            
          {
            
            particle=null;
            score=score+300
            
          }
        }
      }

      if(particle=null)
      {
          particle.display();
    
          if (particle.body.position.y<600 && particle.body.position.x ==(480,560)){
           
              
            {
              
              particle=null;
              score=score+400
              
            }
          }
        }
        if(particle=null)
      {
          particle.display();
    
          if (particle.body.position.y<600 && particle.body.position.x ==(560,640)){
           
              
            {
              
              particle=null;
              score=score+400
              
            }
          }
        }

        if(particle=null)
        {
            particle.display();
      
            if (particle.body.position.y<600 && particle.body.position.x ==(640,720)){
             
                
              {
                
                particle=null;
                score=score+500
                
              }
            }
          }

          if(particle=null)
        {
            particle.display();
      
            if (particle.body.position.y<600 && particle.body.position.x ==(720,800)){
             
                
              {
                
                particle=null;
                score=score+500
                
              }
            }
          }
    

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random( width/2+50, width/2-390, width/2-310, width/2-230, width/2-150, width/2-70, width/2-0, width/2+80, width/2+160, width/2+240, width/2+320, width/2+400), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
if(gameState!=="end"){
turn++;
particle=new Particle(mouseX, 10, 10, 10);


}
}
