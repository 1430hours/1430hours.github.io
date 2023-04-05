
	const scene = new THREE.Scene();

	// Init camera (PerspectiveCamera)
const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	// Init renderer
	const renderer = new THREE.WebGLRenderer();

	// Set size (whole window)
	renderer.setSize(window.innerWidth, window.innerHeight);

	// Render to canvas element
	document.body.appendChild(renderer.domElement);

	// Init BoxGeometry object (rectangular cuboid)
	const geometry = new THREE.BoxGeometry(2, 2, 2);

	// Create material with color
	const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

	// Add texture - 
	// const texture = new THREE.TextureLoader().load('textures/crate.gif');

	// Create material with texture
	// const material = new THREE.MeshBasicMaterial({ map: texture });

	// Create mesh with geo and material
	cube = new THREE.Mesh(geometry, material);
	
	// Add to scene
	scene.add(cube);
	
	camera.position.z=100;



// Draw the scene every time the screen is refreshed
function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.1;
	cube.rotation.y += 1;

	renderer.render(scene, camera);
}



animate();

