class Ground{

    constructor(x,y,w,h){
        var properties={
            isStatic: true
        }
this.body=Bodies.rectangle(x,y,w,h,properties);
this.width=w;
this.height=h;
World.add(world,this.body);


    }
display(){
    fill("brown");
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}


}