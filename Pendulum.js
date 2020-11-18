class Pendulum{
    constructor(x, y){
        var options = {
            'restitution':1, 
            'friction':0,
            'frictionAir':0.0,
            'density':3,
            'slop':1,
            'inertia': Infinity
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.diameter = 30;
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(3);
        stroke("white");
        fill("black");
        ellipse(0,0,this.diameter);
        pop();      
   }

}
