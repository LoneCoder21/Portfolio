console.log(3);

addEventListener("mousemove", (event) => {
    const di = document.querySelectorAll(".pointer");
    if (di === null) return;
    di.forEach((pointer) => {
        console.log(pointer.classList);
        let o = 34;
        if (pointer.classList.contains("inner")) {
            o = 10;
        }
        o /= 2;
        pointer.style.left = `${event.x - o}px`;
        pointer.style.top = `${event.y - o}px`;
    });
});
