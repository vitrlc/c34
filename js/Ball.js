class {
    constructor (x,y,h,w){
        var options = {
            restitution: 0.9
        };

        this.body = Bodies.circle(x,y,h,w, options);
        this.w = w;
        this.h = h;

        World.add(world, this.body);
        }

        display() {
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            ellipseMode(CENTER);
            ellipse(0, 0, this.w, this.h);
            pop();
        }
    }