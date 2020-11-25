//blueprint/class for a box ==> Object Oriented Programming
class Box{
  constructor(x,y,w,h){
    var options = {
      restitution : 1
    }
    this.body = Bodies.rectangle(x,y,w,h,options );
    this.width = w;
    this.height = h;
    World.add(myWorld, this.body);

  }  

  display(){
    push();// save the canvas
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("orange")
    rect(0,0,  this.width, this.height);
    pop();// show the canvas as it was
  }
}