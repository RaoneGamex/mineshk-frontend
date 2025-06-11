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
