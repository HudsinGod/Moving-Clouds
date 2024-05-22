// Number of clouds you want to create
const numClouds = 10;

for(let i = 0; i < numClouds; i++) {
    // Create a new cloud element
    let cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.innerHTML = '<div class="cloudBubble1"></div><div class="cloudBubble2"></div>';

    // Append the new cloud to the container
    document.getElementById('container').appendChild(cloud);

    // Set initial position and scale
    cloud.style.left = Math.random() * window.innerWidth + 'px';
    cloud.style.top = Math.random() * window.innerHeight + 'px';
    cloud.style.transform = 'scale(' + (Math.random() * 0.5 + 0.5) + ')';

    // Set transition
    cloud.style.transition = 'all linear ' + (Math.random() * 5 + 5) + 's';

    // Start animation
    setTimeout(moveCloud.bind(null, cloud), Math.random() * 2000);
}

function moveCloud(cloud) {
    cloud.style.left = Math.random() * window.innerWidth + 'px';
    cloud.style.top = Math.random() * window.innerHeight + 'px';

    // Repeat animation
    setTimeout(moveCloud.bind(null, cloud), Math.random() * 5000 + 5000);
}
