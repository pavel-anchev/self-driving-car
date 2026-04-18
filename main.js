const canvas = document.getElementById("myCanvas");

const numberOfLanes = 3;
const laneWidth = 60;
canvas.width = 200;

if (laneWidth * numberOfLanes > canvas.width) {
    const increaseRoadWidth = laneWidth * numberOfLanes - canvas.width;
    canvas.width += increaseRoadWidth;
}

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9, numberOfLanes);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

animate();

console.table(road);

function animate() {
    car.update();
    canvas.height = window.innerHeight;
    
    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);

    road.draw(ctx);
    car.draw(ctx);

    ctx.restore();
    requestAnimationFrame(animate);
}