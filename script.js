function generateGrid() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    const mineCount = parseInt(document.getElementById("mines").value);
    const gridSize = 25;

    const diamondCounts = {
        1: 10,
        3: 7,
        5: 6,
        7: 3,
        10: 2
    };

    const diamondCount = diamondCounts[mineCount];
    const cells = Array.from({ length: gridSize }, (_, i) => i);
    const diamondPositions = [];

    while (diamondPositions.length < diamondCount) {
        const pos = cells.splice(Math.floor(Math.random() * cells.length), 1)[0];
        diamondPositions.push(pos);
    }

    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if (diamondPositions.includes(i)) {
            cell.classList.add("diamond");
            cell.textContent = "💎";
        } else {
            cell.textContent = "";
        }
        grid.appendChild(cell);
    }
}

// Live Clock Function
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}

// Initial Grid Setup (Empty)
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
});

// Generate Signal on Button Click
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

    const cells = document.querySelectorAll(".grid .cell");
    cells.forEach(cell => {
        cell.textContent = ""; // Reset all
        cell.classList.remove("diamond");
    });

    const available = Array.from(cells.keys());
    const diamondPositions = [];

    while (diamondPositions.length < diamondCount) {
        const randomIndex = Math.floor(Math.random() * available.length);
        const pos = available.splice(randomIndex, 1)[0];
        diamondPositions.push(pos);
    }

    diamondPositions.forEach(index => {
        cells[index].textContent = "💎";
        cells[index].classList.add("diamond");
    });
}

// Live Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

setInterval(updateClock, 1000);
updateClock(); // initialize immediately
