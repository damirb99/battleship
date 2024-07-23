// Number of rows on the map
const ROWS = 7;
// Number of columns on the map
const COLS = 7;
// Number of ships to be placed
const SHIPS = 3;

// Empty array to store ship locations
const shipLocations = [];

// Function to place ships on the map
function placeShipsOnMap() {
    let placedShips = 0; // Counter for placed ships

    // While not all ships are placed
    while (placedShips < SHIPS) {
        // Randomly generated row value
        const row = Math.round(Math.random() * ROWS); 
        // Randomly generated column value
        const col = Math.round(Math.random() * COLS); 

        // Check if the ship can be placed at this position
        if (shipCanBePlaced(row, col)) {
            console.log(`Ship placed at location: ${row}, ${col}`);
            shipLocations.push({ row, col });
            // Increase the number of placed ships
            ++placedShips; 
        } else {
            console.log(`Ship not placed at location ${row}, ${col}. Generating new location...`);
        }
    }
}

// Function to check if a ship can be placed at a given position
function shipCanBePlaced(row, col) {
    console.log(`Checking can ship be placed at location: ${row}, ${col}...`);
    
    // Loop through all placed ships
    for (let i = 0; i < shipLocations.length; ++i) {
        // If there is a ship at the given position, return false
        if (shipLocations[i].row === row && shipLocations[i].col == col) {
            return false;
        }
    }

    // If there is no ship at that position, return true
    return true;
}

// Function to generate the map
function generateMap() {
    console.log("Generating map...");
    const battleArea = document.getElementById("battleArea");

    for (let row = 0; row < ROWS; ++row) {
        const area = document.createElement("tr");

        for (let col = 0; col < COLS; ++col) {
            const field = document.createElement("td");
            field.id = `${row}${col}`;

            // Set the function to be called when the field is clicked
            field.onclick = function() {
                attackShip(row, col);
            }

            // Add the field to the row
            area.appendChild(field);
        }

        // Add the row to the table
        battleArea.appendChild(area);
    }
    console.log("Map generated");
}

// Function to simulate an attack on a ship
function attackShip(row, col) {
    console.log(`Ship attacked at location: ${row}, ${col}`);
    const field = document.getElementById(`${row}${col}`);

    // If there is a ship at the given position
    if (shipCanBePlaced(row, col) === false) {
        console.log("Ship hit!");
        // Mark the field with green color
        field.style.backgroundColor = "green"; 
    } else {
        // If there is no ship at the given position
        console.log("Missed it!");
        // Mark the field with red color
        field.style.backgroundColor = "red"; 
    }
}

// Generate the map
generateMap();

// Place the ships on the map
placeShipsOnMap();
