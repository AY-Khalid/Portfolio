canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    hue += 2;
    if (frame % 2 === 0) {
        for (let i = 0; i < 7; i++) {
            particlesArray.push(new Particle());
        }
    }
});