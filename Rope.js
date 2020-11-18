class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.01,
            length:400
        }
        this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.pointB;
        strokeWeight(2);
        stroke("#fff");
        line(posA.x,posA.y,posB.x,posB.y);
    }

}