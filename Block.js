class Block {
  constructor(x, y, width, height) {
    var options = {
      friction: 1,
      

  
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visibility = 255;
  }
  display() {
    // if (this.body.speed < 3) {
    //   super.display();
    // } else {
    //   World.remove(world, this.body);
    //   push();
    //   this.visibility = this.visibility - 5;
    //   tint(255, this.visibility);
    //   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    //   pop();
    // }
    var pos = this.body.position;
    fill("white");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width,this.height);
  }
}
