class Stone {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          density:1.0,
          restitution:0,
          friction:1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
      this.image = loadImage("sprites/stone.png");
    }
    display(){
      var pos =this.body.position;
      fill("purple");
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, 70, 70);

    }
  }