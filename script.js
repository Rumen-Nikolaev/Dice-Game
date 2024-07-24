// Initialize player names
let player1 = "Player1";
let player2 = "Player2";

// Function to edit player names
function editNames() {
    // Prompt user to enter new names for Player1 and Player2
    player1 = prompt("Change Player1 Name");
    player2 = prompt("Change Player2 Name");

    // Check if the entered names are valid (non-empty)
    if (player1.length < 1 || player2.length < 1) {
        alert('Please enter valid names');
        return;
    }

    // Update the displayed names in the HTML
    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

// Function to simulate rolling the dice
function rollTheDice() {
    // Select the dice image elements
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    // Set dice images to rolling animation (assuming diceroll.gif is an animation)
    diceNum1.setAttribute("src", "diceroll.gif");
    diceNum2.setAttribute("src", "diceroll.gif");

    // Clear the result text
    let result = document.querySelector('h1');
    result.innerHTML = "";

    // Simulate a delay for rolling the dice (2.5 seconds)
    setTimeout(() => {
        // Generate random numbers between 1 and 6 for both dice
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        // Update the dice images to reflect the rolled numbers
        diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
        diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

        // Determine the winner or if it's a draw
        if (randomNumber1 === randomNumber2) {
            result.innerHTML = "Draw!";
        } else if (randomNumber1 < randomNumber2) {
            result.innerHTML = (player2 + " WINS!");
        } else {
            result.innerHTML = (player1 + " WINS!");
        }

    }, 2500); // 2500 milliseconds (2.5 seconds) delay for the dice roll animation
}
