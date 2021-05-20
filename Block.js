class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
      }

      this.image = loadImage("sprites/can.png");
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);

     this.Visiblity=255;
      
    }
   
    display(){

      if(this.body.speed <5){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility -2;
      tint(255,this.Visiblity);
      pop();
      
    }
  }
}