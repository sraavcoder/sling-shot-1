class Spring{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.1,
            length: 20
        }
        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    attach(body){
        this.string.bodyA = body;
    }
    
    fly(){
    setTimeout(() => {
      this.string.bodyA = null;    
    },100);
   }

    display(){
    if(this.string.bodyA){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.pointB;
        strokeWeight(6);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
    }
    }
    
}