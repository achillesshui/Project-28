class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.008,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(bodyA)
    }
    fly(){
        this.sling.bodyA = null;
    }
    
    attach(){
        this.sling.bodyA = stone.body;
    }
    display(){
        if(this.sling.bodyA != null) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}