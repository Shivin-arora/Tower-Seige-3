class Box{

    constructor(x,y,width,height,color){
    
        var option={
            restitution : 0.4,
            density : 0.9
           // friction :1.3
        }
        this.thanos = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
  this.color=color;
        this.visibility=255;
       // this.image=loadImage("polygon.png");
        
       // this.image=loadImage("sprites/wood1.png");
        World.add(world, this.thanos);
    
    }
    
    
    show(){
        var pos = this.thanos.position; 
    var angle = this.thanos.angle;
   if(this.thanos.speed<6){

    
    
  // translate(pos.x,pos.y);
   // rotate(angle);
  
   fill(this.color);
    rectMode(CENTER);
  
   rect(pos.x,pos.y,this.width,this.height);

    }else{
        
        
        push();
       // translate(pos.x,pos.y);
       World.remove(world,this.thanos);
        this.visibility=this.visibility-20;
        tint(255,this.visibility);
        //rect(pos.x,pos.y,this.width,this.height);
        World.remove(world,this.thanos);
        pop();
    }

}

score(){
    if(this.visibility<0 && this.visibility>-105){
        score++;
    }
}


    }