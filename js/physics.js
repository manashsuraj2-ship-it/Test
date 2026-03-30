// physics.js

// Cannon.js physics world setup and collision handling

const { World, Body, Sphere, Plane } = require('cannon');

// Create a physics world
const world = new World();
world.gravity.set(0, -9.82, 0); // Set gravity

// Create a plane
const groundBody = new Body({
    position: { x: 0, y: 0, z: 0 },
    mass: 0 // mass of 0 makes the body static
});
world.addBody(groundBody);

// Create a dynamic sphere
const sphereBody = new Body({
    mass: 5,
    position: { x: 0, y: 5, z: 0 }
});
const sphereShape = new Sphere(1); // radius of 1

// Add the sphere to the world
world.addBody(sphereBody);

// Collision handling
world.on('beginContact', (event) => {
    console.log('Collision detected between:', event.bodyA, event.bodyB);
});

// Update loop
function update() {
    world.step(1 / 60);
    // Other update logic here
    requestAnimationFrame(update);
}

update();