class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(650,590,2000,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        fill(188,67,67);
        rectMode(CENTER);
        fill("brown");
        rect(this.ground.position.x,this.ground.position.y,2000,20);
    }
}