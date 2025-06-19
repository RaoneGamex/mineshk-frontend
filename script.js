function generateGrid() {
    const mineCount = parseInt(document.getElementById("mines").value);
    const diamondCounts = {
        1: 10,
        3: 7,
        5: 6,
        7: 3,
        10: 2
    };

    const diamondCount = diamondCounts[mineCount];
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    // Show ⌛ loading animation in all cells
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerHTML = '<span style="opacity:0.3;">⌛</span>';
        grid.appendChild(cell);
    }

    // After 5 seconds, show diamonds
    setTimeout(() => {
        const diamondPositions = [];
        const totalCells = 25;
        const available = Array.from({ length: totalCells }, (_, i) => i);

        while (diamondPositions.length < diamondCount) {
            const index = Math.floor(Math.random() * available.length);
            diamondPositions.push(available.splice(index, 1)[0]);
        }

        const cells = document.querySelectorAll(".grid .cell");
        cells.forEach((cell, i) => {
            cell.innerHTML = ""; // clear ⌛
            cell.classList.remove("diamond");

            if (diamondPositions.includes(i)) {
                cell.classList.add("diamond");
                cell.textContent = "💎";
            }
        });
    }, 5000); // 5 second wait
}

// Live Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Default Empty Grid on Page Load
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
});
