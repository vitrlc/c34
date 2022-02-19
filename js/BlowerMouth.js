class BlowerMouth{

    constructor(x,y,w,h) {
        var options = {
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,w,h, options);
    this.w = w;
    this.h = h;
    this.color = color;
    World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("#8d6e63");
        rect(0, 0, this.w, this.h);
        pop();
    }

}