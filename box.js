class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          
          'density':1.0
      }
      this.body = Matter.Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      const angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
       stroke(0);
      rect(0, 0, this.width, this.height);
      pop();
      console.log(this.body);
    }
  };