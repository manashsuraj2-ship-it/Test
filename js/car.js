// js/car.js

// 3D Car Model Creation
const carModel = new THREE.Object3D();

const carBodyGeometry = new THREE.BoxGeometry(1, 0.5, 0.3);
const carBodyMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
const carBody = new THREE.Mesh(carBodyGeometry, carBodyMaterial);
carModel.add(carBody);

// Add wheels
const wheelGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 32);
const wheelMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
for(let i = 0; i < 4; i++) {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.x = i < 2 ? -0.5 : 0.5;
    wheel.position.y = -0.25;
    wheel.position.z = i % 2 === 0 ? -0.15 : 0.15;
    carModel.add(wheel);
}

// Controls
const controls = {
    forward: false,
    backward: false,
    left: false,
    right: false
};

window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'w': controls.forward = true; break;
        case 's': controls.backward = true; break;
        case 'a': controls.left = true; break;
        case 'd': controls.right = true; break;
    }
});

window.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'w': controls.forward = false; break;
        case 's': controls.backward = false; break;
        case 'a': controls.left = false; break;
        case 'd': controls.right = false; break;
    }
});

// Physics simulation (simple)
function updateCar() {
    if (controls.forward) carModel.position.z -= 0.1;
    if (controls.backward) carModel.position.z += 0.1;
    if (controls.left) carModel.position.x -= 0.1;
    if (controls.right) carModel.position.x += 0.1;
}

function animate() {
    requestAnimationFrame(animate);
    updateCar();
    renderer.render(scene, camera);
}
animate();

export { carModel };