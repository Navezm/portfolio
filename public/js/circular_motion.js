// Main declaration
let header = document.querySelector("header");

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

canvas.width = innerWidth - 15;
canvas.height = innerHeight;

let mouse = {
    x: innerWidth / 2,
    y: innerHeight /2,
};

let colorArray = [
    "#BFA38A",
    "#D9C5B4",
    "#F2E3D5",
    "#8C6C5A",
    "#261712"
];

let span = document.querySelector("h1");
span.style.position = "absolute";
span.style.top = innerHeight/3+"px";
span.style.left = innerWidth/6+"px";

// Basic event
window.addEventListener("mousemove", function(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener("resize", function(){
    canvas.width = innerWidth - 15;
    canvas.height = innerHeight;
});

// Utility function
let randomIntFromRange = (min, max) => {
    return Math.floor(Math.random() * (max-min+1) + min);
};

// Object
class Particle{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.radians = Math.random() * Math.PI*2;
        this.velocity = 0.02;
        this.distanceFromCenter = {
            x: randomIntFromRange(100, 250),
            y: randomIntFromRange(100, 250)
        };
        this.lastMouse = {x: x, y: y}
    };
    update(){
        let lastPoint = {x: this.x, y: this.y};

        // Moving points
        this.radians += this.velocity;

        // Drag effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

        // Circular motion
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter.x;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter.y;
        this.draw(lastPoint);
    };
    draw(argument){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.radius;
        ctx.moveTo(argument.x, argument.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        ctx.closePath();
    }
}

// Creation of lines
let particles;
let init = () => {
    particles = [];
    for (let i = 0; i < 250; i++) {
        let randomRadius = Math.random()*5;
        let randomColor = colorArray[Math.floor(Math.random()*colorArray.length)];
        particles.push(new Particle(canvas.width/4*3, canvas.height/2, randomRadius, randomColor));
    };
};

// Animate loop
let animate = () => {
    requestAnimationFrame(animate);

    // Particles trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Drawing and moving particles
    particles.forEach(element => {
        element.update();
    });
};

init();
animate();