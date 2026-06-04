/* 
|-------------------|
| - GLOBAL VALUES - | ---------------------------------------------------------------------------------------------
|-------------------|
*/
const canvas = document.querySelector("#canvas");
const button = document.querySelector("#canvasSize");

/* 
|---------------|
| - FUNCTIONS - | ---------------------------------------------------------------------------------------------
|---------------|
*/

// GRID GENERATION
function generateGrid(size) {
    // Row's loop
    for (let i = 0; i < size; i++) {
        // Create the row
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        // Fill the row with squares
        for (let j = 0; j < size; j++) {
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

// EDIT GRID'S SIZE
function changeGridSize() {
    let newSize = Number(prompt('Insert the new value (range = 2 - 100):', 2));
    if (isNaN(newSize) || newSize < 2 || newSize >100) {
        alert('ERR: Try again');
    }
    else {
        while (canvas.firstChild) {
            canvas.removeChild(canvas.firstChild);
        }
        generateGrid(newSize);
    }
}

// Initial grid's scale
generateGrid(16);

// Link the button with the function
button.addEventListener("click", changeGridSize);