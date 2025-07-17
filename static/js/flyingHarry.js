document.addEventListener("DOMContentLoaded", function () {
    const skillItems = document.querySelectorAll(".skill-bars li");
    const harries = document.querySelectorAll(".harry");
    const harryImages = document.querySelectorAll('.harry');

    // Initialize arrays
    const currentPercents = Array(harries.length).fill(-10);
    const directions = Array(harries.length).fill(1);

    // Extract skill percentages from classnames and store mapping
    const skillData = Array.from(skillItems).map((li, index) => {
        const progressDiv = li.querySelector('.progress');
        const classname = progressDiv.className; // e.g., "percent95"
        const match = classname.match(/percent(\d+)/);
        const percent = match ? parseInt(match[1], 10) : 100;

        return {
            index,
            targetPercent: percent,
            harr: harries[index],
        };
    });
    console.log(skillData.harr)

    // Animation function
    const animateHarry = (item) => {
        return () => {
            const i = item.index;
            currentPercents[i] += directions[i];

            // Animate the left property
            item.harr.style.left = currentPercents[i] + "%";

            if (currentPercents[i] >= item.targetPercent || currentPercents[i] <= -10) {
                directions[i] *= -1; // Reverse direction
                if (currentPercents[i] > item.targetPercent) {
                    currentPercents[i] = item.targetPercent;
                } else if (currentPercents[i] < -10) {
                    currentPercents[i] = -10;
                }
            }
        };
    };

    // Set intervals for each Harry
    skillData.forEach((item, index) => {
        setInterval(animateHarry(item), 100); // Adjust speed as desired
    });

    harryImages.forEach((img, index) => {
        // For example, start from -445px and go up by 66px per image
        const baseTop = -643; // or any starting value
        const offset = 66;    // change per image
        img.style.top = `${baseTop + index * offset}px`;
    });
});