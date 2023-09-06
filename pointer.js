addEventListener("mousemove", (event) => {
    const di = document.querySelectorAll(".pointer");
    if (di === null) return;
    di.forEach((pointer) => {
        let o = 34;
        if (pointer.classList.contains("inner")) {
            o = 10;
        }
        o /= 2;
        pointer.style.left = `${event.x - o}px`;
        pointer.style.top = `${event.y - o}px`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let circles = document.querySelector(".circles");

    for (let i = 0; i < 12; ++i) {
        let circle = document.createElement("div");
        circle.style.left = `${Math.floor(Math.random() * 100)}vw`;
        let size = Math.floor(Math.random() * 80 + 20);
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.animationDelay = `${Math.random() * 20}s`;
        circle.style.animationDuration = `${Math.random() * 25 + 10}s`;
        circle.style.backgroundColor = `color-mix(in srgb, #fd6d0e ${Math.floor(
            Math.random() * 50 + 50
        )}%, black)`;
        circles?.appendChild(circle);
    }
});
