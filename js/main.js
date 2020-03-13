const ROWS = 7;
const COLS = 7;
const SHIPS = 3;

const shipLocations = [];

function placeShipsOnMap() {


    let placedShips = 0;
    while (placedShips < SHIPS) {
        const row = Math.round(Math.random() * ROWS);
        const col = Math.round(Math.random() * COLS);

        if (shipCanBePlaced(row, col)) {
            console.log(`Ship placed at location: ${row}, ${col}`)
            shipLocations.push({
                row, col
            });

            ++placedShips;
        } else {
            console.log(`Ship not placed at location ${row}, ${col}. Generating new location...`)
        }
    }
}

//?????
function shipCanBePlaced(row, col) {
    console.log(`Checking can ship be placed at location: ${row}, ${col}...`)
    for (let i = 0; i < shipLocations.length; ++i) {
        if (shipLocations[i].row === row && shipLocations[i].col == col) {
            return false;
        }
    }

    return true;
}

function generateMap() {
    console.log("Generating map...");

    const battleArea = document.getElementById("battleArea");

    for (let row = 0; row < ROWS; ++row) {
        const area = document.createElement("tr");

        for (let col = 0; col < COLS; ++col) {
            const field = document.createElement("td");
            field.id = `${row}${col}`;
           
            field.onclick = function(){
                attackShip(row, col)
            }


            area.appendChild(field);
        }

        battleArea.appendChild(area);
    }
    console.log("Map generated")
}

function attackShip(row, col) {
    console.log(`Ship attacked at location: ${row}, ${col}`);

    const field = document.getElementById(`${row}${col}`);
    if (shipCanBePlaced(row, col) === false) {
        console.log("Ship hit!")
        field.style.backgroundColor = "green";
    } else {
        console.log("Missed it!");
        field.style.backgroundColor = "red";
    }
}

generateMap();
placeShipsOnMap();
