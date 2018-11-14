// OBJECTS
var mace = {
    name: "Mace Windu",
    HP: 0,
    AP: 0,
    CP: 0,
    imgFile: "../images/character1.png"
}

var dooku = {
    name: "Count Dooku",
    HP: 0,
    AP: 0,
    CP: 0,
    imgFile: "../images/character2.png"
}

var yoda = {
    name: "Yoda",
    HP: 0,
    AP: 0,
    CP: 0,
    imgFile: "../images/character3.png"
}

var maul = {
    name: "Darth Maul",
    HP: 0,
    AP: 0,
    CP: 0,
    imgFile: "../images/character4.png"
}

// GLOBAL VARIABLES================================================================
// Array of possible hit points for each character
var HPPossibles = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
// Array of selected HP for the four characters
var HPTotal = [];
// Array of possible attack power value for each character
var APPossibles = [5, 6, 7, 8, 9, 10, 11];
// Array of selected AP for the four characters
var APTotal = [];
// Array of possible counterattack power value for each character
var CPPossibles = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// Array of selected CP for the four characters
var CPTotal = [];
// Variable for whether initial character has been chosen
var isCharacterChosen = false;
// Variable for chosen character HP
var userHP;
// // Variable for chosen character base AP
var baseUserAP;
// // Variable for chosen character AP
var userAP;
// Variable for defender HP
var defenderHP;
// Variable for defender CP
var defenderCP;
// Variable for defender name
var defenderName = "";
// Variable for wins - this won't display, but will be used to determine when all defenders have been defeated
var wins;
// GLOBAL FUNCTIONS
// Reset game

function resetGame() {
    // Reset arrays, variables to original values
    HPPossibles = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
    APPossibles = [7, 8, 9, 10, 11, 12, 13];
    CPPossibles = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    isCharacterChosen = false;
    wins = 0;
    // Disables attack button & reset button until characters are selected
    $(".attack-btn").attr("disabled", true);
    $(".reset-btn").attr("disabled", true);

    // Empty areas from previous games
    $("#character-list").empty();
    $("#enemies-left").empty();
    $("#user-character").empty();
    $("#defender-character").empty();
    $("#battle-log").empty();
}

function createGameValues() {
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
        console.log("charHP" + charHP);

        // Put charHP into HPTotal array to assign to character objects later
        HPTotal.push(charHP);

        // Attack Power calculation - same process as HP
        //Calculate random index number for APPossibles
        var indexAP = Math.floor(Math.random() * APPossibles.length);
        charAP = APPossibles[indexAP];
        console.log(`Character${i} attack power: ${charAP}`)

        // Remove charAP from array so each character has a different Attack Power;
        APPossibles.splice(indexAP, 1);

        // Put charAP into APTotal array to assign to character objects later
        APTotal.push(charAP);

        // Counterattack Power calculation - same process as HP
        // Calculate random index number for CPPossibles
        var indexCP = Math.floor(Math.random() * CPPossibles.length);
        charCP = CPPossibles[indexCP];
        console.log(`Character${i} counterattack power: ${charCP}`)

        // // Remove charCP from array so each character has a different Attack Power;
        CPPossibles.splice(indexCP, 1);

        // Put charCP into CPTotal array to assign to character objects later
        CPTotal.push(charCP);
    }

    // Assign created random numbers to objects
    mace.HP = HPTotal[0];
    mace.AP = APTotal[0];
    mace.CP = CPTotal[0];
    dooku.HP = HPTotal[1];
    dooku.AP = APTotal[1];
    dooku.CP = CPTotal[1];
    yoda.HP = HPTotal[2];
    yoda.AP = APTotal[2];
    yoda.CP = CPTotal[2];
    maul.HP = HPTotal[3];
    maul.AP = APTotal[3];
    maul.CP = CPTotal[3];
    console.log(mace);
    console.log(dooku);
    console.log(yoda);
    console.log(maul);

    // DIsplay HP on the screen
    $(".assignedHP-mace").text(`${mace.HP} hit points`);
    $(".assignedHP-dooku").text(`${dooku.HP} hit points`);
    $(".assignedHP-yoda").text(`${yoda.HP} hit points`);
    $(".assignedHP-maul").text(`${maul.HP} hit points`);
}

function selectCharacters() {
    $(".start-character-image").on("click", function () {
        // If a character has not been chosen yet
        if (!isCharacterChosen) {
            console.log(isCharacterChosen);
            // Remove start-character-image class
            $(this).removeClass("start-character-image");
            // Move the character to the Your Character area
            $("#user-character").append(this);
            // Set isCharacterChosen so next choice will go to Defender area
            isCharacterChosen = true;
            // Change Choose Your Character text
            $("#intro-text").text("Choose your opponent")

            // Return value from HTML, assign HP, baseUserAp and userAP
            if ($(this).attr('value') === "mace") {
                userHP = mace.HP;
                baseUserAP = mace.AP;
                userAP = mace.AP;            
                $(".assignedHP-mace").addClass("HP-counter");
            } 
            
            else if ($(this).attr('value') === "dooku") {
                userHP = dooku.HP;
                baseUserAP = dooku.AP;
                userAP = dooku.AP;
                $(".assignedHP-dooku").addClass("HP-counter");
            }

            else if ($(this).attr('value') === "yoda") {
                userHP = yoda.HP;
                baseUserAP = yoda.AP;
                userAP = yoda.AP;
                $(".assignedHP-yoda").addClass("HP-counter");                
            }

            else if ($(this).attr('value') === "maul") {
                userHP = maul.HP;
                baseUserAP = maul.AP;
                userAP = maul.AP;
                $(".assignedHP-maul").addClass("HP-counter");
             
            }

            // Enable reset button
            $(".reset-btn").attr("disabled", false);

            console.log(`User HP: ${userHP}`);
            // Need to move enemies elsewhere but can't figure it out

            // Hide choose a character area - this works but I want to wait to activate it while I'm testing
            // $(".character-choice").empty();


        } else {

            // Remove start-character-image class
            $(this).removeClass("start-character-image");

            // Add name to variable for use in battle-log text - this isn't working.
            // defenderName = $(this).attr("battlename");
            // console.log(`defender name: ${defenderName}`);

            // Move the character to the Defender area
            $("#defender-character").append(this);

            // Add class to defender so it can be removed upon defeat
            $(this).addClass("current-defender");

            // Return value from HTML, assign HP, CP
            if ($(this).attr('value') === "mace") {
                defenderHP = mace.HP;
                defenderCP = mace.CP;
                $(".assignedHP-mace").addClass("HP-counter-opponent");       
            } 
            
            else if ($(this).attr('value') === "dooku") {
                defenderHP = dooku.HP;
                defenderCP = dooku.CP;
                $(".assignedHP-dooku").addClass("HP-counter-opponent");                
            }

            else if ($(this).attr('value') === "yoda") {
                defenderHP = yoda.HP;
                defenderCP = yoda.CP;
                $(".assignedHP-yoda").addClass("HP-counter-opponent");               
            }

            else if ($(this).attr('value') === "maul") {
                defenderHP = maul.HP;
                defenderCP = maul.CP;
                $(".assignedHP-maul").addClass("HP-counter-opponent");               
            }
            
            // Enable attack button
            $(".attack-btn").attr("disabled", false);

            // Add text to battle log
            $("#battle-log").html("<p>Hit the attack button to attack your opponent</p><br><br>");


            // DELETE THIS - testing only
            // $(".character-choice").empty();
        }
    })

    $(".reset-btn").on("click", function () {
        location.reload();
    })
}

function attack() {
    $(".attack-btn").on("click", function () {
        // Log attack power, counterattack power
        $("#battle-log").html("<p> You attacked with " + userAP + " points of damage.</p><p>You received " + defenderCP + " points of damage.</p><p>Press the attack button to attack again.</p>");

        // Calculate new HP left for both characters
        userHP -= defenderCP;
        defenderHP -= userAP;
        console.log(`New User HP: ${userHP}`)
        console.log(`New Defender HP: ${defenderHP}`)
        userAP += baseUserAP;
        // Display to screen
        $(".HP-counter").text(`${userHP} hit points`)
        $(".HP-counter-opponent").text(`${defenderHP} hit points`)


        // Check to see if you lost
        if (userHP <= 0) {
            $("#battle-log").html("<h3>You lost.</h3><p>Hit the reset button to try again.<br>");
            // Disable attack button - game is over;
            $(".attack-btn").attr("disabled", true);
            // Enable reset button to restart;
            $(".reset-btn").attr("disabled", false); 
        
            // Check to see if defender is out of HP
        } else if (defenderHP <= 0) {
            $("#battle-log").html("<h3>You beat this defender!</h3><br>")
            // Removes defender from screen
            $(".current-defender").empty();
            // Locks attack button until another defender is selected
            $(".attack-btn").attr("disabled", true);
            // Adds 1 to win counter - not visible, only for tracking
            wins++;

            // Check if defenders remain or the user beat them all
            if (wins === 3) {
                $("#battle-log").html("<h3>You defeated all your enemies!.</h3><p>Hit the reset button to play again.");
                $(".reset-btn").attr("disabled", false);                     

            } else {
                $("#battle-log").append("Choose another enemy.");
                $(".reset-btn").attr("disabled", true);                     

            }

        }

    })
}

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

function startGame() {
    resetGame();
    createGameValues();
    selectCharacters();
    attack();
}

// GAME PLAY============================================================
$(document).ready(function () {
    startGame();
})


