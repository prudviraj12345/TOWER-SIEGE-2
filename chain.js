class Chain {

    constructor(bodyA,pointB){
    
     var options = {
    
     bodyA: bodyA,
     pointB:pointB,
     stiffness:0.04,
     lenght:50,
    
    
     }
     this.pointB = pointB;
     // this.bodyA = body;
     this.chain = Constraint.create(options)
     World.add(world,this.chain);
    
    }



     fly(){

     this.chain.bodyA = null


     }



    
    
    
    
     display(){
       if(this.chain.bodyA){
      var pointA = this.chain.bodyA.position;  
      var pointB = this.pointB;  
      strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    
     }
    
    
     }
    
     
    
    
    
    
    }