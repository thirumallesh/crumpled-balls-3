class Launcher{
    constructor(bodyA,pointB){
       
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.004,
            length :15
            }
        
        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
 fly()
 {
     this.launcher.bodyA=null;
 }

    display(){
////console.log(this.sling.bodyB.position)
       if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x,pointB.y);
       }
    
} 
}