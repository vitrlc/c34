const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var engine;
var world;
var ball;
var quadrado;
var retângulo;

function setup() {
    var canvas = createCanvas(500,500);

    ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
    quadrado = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
    retângulo = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
    button = createImg('click.png');
    button.position(20,30);
    button.size(50,50);

    button.MouseClicked(blow);
}

function draw() {
    background(59);
    Engine.update(engine);

    blower.display();
    ball.display();
    blowerMouth.display()
}

function blow() {
    Matter.Bpdy.applyForce(ball.body, { x: 0, y: 0 }, { x: -0.05, y: 0.05 });
}



