// GLOBAL VARIABLES================================================================
// Array of possible hit points for each character
var HPPossibles = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
// Array of possible attack power value for each character
var APPossibles = [4, 5, 6, 7, 8, 9, 10];
// Array of possible counterattack power value for each character
var CPPossibles = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// GLOBAL FUNCTIONS
// Reset game
function resetGame() {

    // Character creation
    // Set random HP, attack and counterattack values for each character
    for (let i = 1; i < 5; i++) {
        // HP calculation - using an array of possibles rather than random number
        // because we want different HP for each character
        //Calculate random index number for HPpossibles
        var indexHP = Math.floor(Math.random() * HPPossibles.length);
        charHP = HPPossibles[indexHP];
        console.log(`Character${i} hit points: ${charHP}`)

        // Remove charHP from array so each character has a different HP;
        HPPossibles.splice(indexHP, 1);

        // Attack Power calculation - using an array of possibles rather than random number
        // because we want different Attack Power for each character
        //Calculate random index number for APPossibles
        var indexAP = Math.floor(Math.random() * APPossibles.length);
        charAP = APPossibles[indexAP];
        console.log(`Character${i} attack power: ${charAP}`)

        // Remove charAP from array so each character has a different Attack Power;
        APPossibles.splice(indexAP, 1);

        // Counterattack Power calculation - using an array of possibles rather than random number
        // because we want different Counterattack Power for each character
        //Calculate random index number for CPPossibles
        var indexCP = Math.floor(Math.random() * CPPossibles.length);
        charCP = CPPossibles[indexCP];
        console.log(`Character${i} counterattack power: ${charCP}`)

        // Remove charCP from array so each character has a different Attack Power;
        CPPossibles.splice(indexCP, 1);

        //Display characters on screen
        // Create <img> elements
        var imageCharacter = $("<img>");
        // Add class to imageCharacter
        imageCharacter.addClass("character-image");
        // Concatenate src address for images
        imageSrc = "assets/images/character" + i + ".jpg";
        // Add imageSrc to imageCharacter
        imageCharacter.attr("src", imageSrc);
        // Add data attribute for HP to imageCharacter
        imageCharacter.attr("data-HP", charHP);
        // Add data attribute for AP to imageCharacter
        imageCharacter.attr("data-AP", charAP);
        // Add data attribute for CP to imageCharacter
        imageCharacter.attr("data-CP", charCP);
        // Append imageCharacters to HTML
        $("#character-list").append(imageCharacter);

        // <div class="card" style="width: 18rem;">
        //     <img class="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap">
        //     <div class="card-body">
        //       <h4>Luke Skywalker</h4>
        //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //     </div>
        //   </div>  


}
}    
    


 
        

    



// Game play 
    // Select user character
        // Move character to attack position
    // Move other characters to defense list
// First battle
    // Battle function
        // Select defender
        // Move to defense position, remove from list position
        // Attack button clicked
        // Defender HP reduced by user HP, display on screen
        // User HP reduced by defender HP, display on screen
        // User HP attack value increases by base amount
        // Check to see if user or defender has 0 HP
            // If so, move to second battle
            // If not, show lose message and instruct to reset to try again
// Second battle
    // User selects second defender
    // Call battle function
// Third battle
    // If won, show win message and instruct to reset to try again
    // If not, show lose message and instruct to reset to try again
// Start Game function to bundle other functions
    function startGame() {
        resetGame();
    }

// GAME PLAY============================================================
$(document).ready(function () {
    startGame();



})
