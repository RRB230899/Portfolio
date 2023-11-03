document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");
    const harries = document.querySelectorAll(".harry");
    const targetPercents = [100, 95, 95, 80, 55, 55]
    const directions = [1, 1, 1, 1, 1, 1]; // 1 for moving right, -1 for moving left
    const currentPercents = [-10, -10, -10, -10, -10, -10];

    const animateHarry = (index) => {
        return () => {
            currentPercents[index] += directions[index];
            harries[index].style.left = currentPercents[index] + "%";

            if (currentPercents[index] === targetPercents[index] || currentPercents[index] === -10) {
                directions[index] *= -1; // Change direction when reaching the target or -10
                if (currentPercents[index] < -10) {
                    currentPercents[index] = -10;
                }
                else if (currentPercents[index] > targetPercents[index]) {
                    currentPercents[index] = targetPercents[index];
                }
            }
        };
    };

    // Set individual animation intervals for each Harry
    for (let i = 0; i < harries.length; i++) {
        setInterval(animateHarry(i), 100); // Adjust the interval to control the animation speed
    }
});