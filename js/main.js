/* 
|-------------------|
| - GLOBAL VALUES - | ---------------------------------------------------------------------------------------------
|-------------------|
*/
const canvas = document.querySelector("#canvas");

/* 
|---------------|
| - FUNCTIONS - | ---------------------------------------------------------------------------------------------
|---------------|
*/

// GRID GENERATION
function generateGrid(canvasSize) {
    // Row's loop
    for (let i = 0; i < canvasSize; i++) {
        // Create the row
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        // Fill the row with squares
        for (let j = 0; j < canvasSize; j++) {
            // Create the square
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            // CHANGE SQUARES BG-COLOR
            square.addEventListener("mouseenter", () => {
                if (square.classList.contains("hovered")) {
                    square.classList.remove("hovered");
                }
                // Get the target's class
                let existingClasses = square.getAttribute("class") || " ";
                // Add a "hovered" class
                square.setAttribute("class", `${existingClasses} hovered`);
            });
            // Append the square to the row
            row.appendChild(square);
        }
        // Append to the canvas
        canvas.appendChild(row);
    }
}

generateGrid(16);