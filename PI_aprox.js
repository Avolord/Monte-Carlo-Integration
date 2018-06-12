class Integration {
  constructor(x,y,radius=100,iterations = 100,speed = 1) {
    this.iterations = iterations;
    this.speed = 1;
    this.radius = radius;
    this.x = x || radius;
    this.y = y || radius;
    this.inCircle = 0;
    this.inSquare = 0;
  }

  draw() {
    Canvas.Circle(this.x,this.y,this.radius,"stroke","red");
    Canvas.Rectangle(this.x-this.radius,this.x-this.radius,this.radius*2,this.radius*2,"stroke","blue");
  }

  SpawnPoints(iterations = this.iterations) {
    for(let i=0;i<iterations;i++) {
      let p = new V2D(this.x+random(0,2*this.radius)-this.radius,this.y+random(0,2*this.radius)-this.radius);
      if(this.inObject(p)) {
        this.inCircle++;
        p.draw(1,"red");
      } else {
        this.inSquare++;
        p.draw(1,"blue");
      }
    }
  }

  addPoint() {
      let p = new V2D(this.x+random(0,2*this.radius)-this.radius,this.y+random(0,2*this.radius)-this.radius);
      if(this.inObject(p)) {
        this.inCircle++;
        p.draw(1,"red");
      } else {
        this.inSquare++;
        p.draw(1,"blue");
      }
  }

  inObject(Pt) {
    return new V2D(this.x,this.y).dist(Pt) <= this.radius;
  }

  render() {
    this.draw();
    this.SpawnPoints();
  }

  approx() {
    return 4*this.inCircle/(this.inSquare+this.inCircle);
  }

}
