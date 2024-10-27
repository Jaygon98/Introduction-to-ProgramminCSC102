// Function to roll two dice and determine the outcome 
function playCraps() {
    // Generate two random numbers between 1 and 6
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the dice 
    const sum = die1 + die2;

    // Output the dice rolls 
    document.getElementById("result").innerHTML = 'You rolled; ${die1} and ${die2}<br>';

    // Check for win/lose conditions
    if (sum === 7 || sum === 11) {
        document.getElementById("result").innerHTML += "CRAPS - you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById("result").innerHTML += "You won!";
    } else {
        document.getElementById("result").innerHTML += "You pushed!";
    }
}

    // Function to run the game when the button is clicked
    function startGame() {
        // Clear previous results
        document.getElementById("result").innerHTML = "";
    }

        // Call the playCraps function
        playCraps() ;

 