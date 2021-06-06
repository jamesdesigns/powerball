/*jslint devel: true*/
/*eslint-env browser*/

function playGame() {
  "use strict";

  var score = 0;

  // Set up Arrays for Selected Numbers and User's Guess's
  var allNumbersGuessed = [];
  var allNumbersGenerated = [];
  
  // Create the random numbers for the powerball
  var num1 = Math.floor(Math.random() * 100) + 1;
  allNumbersGenerated.push(num1);

  var num2 = Math.floor(Math.random() * 100) + 1;
  allNumbersGenerated.push(num2);

  var num3 = Math.floor(Math.random() * 100) + 1;
  allNumbersGenerated.push(num3);

  var num4 = Math.floor(Math.random() * 100) + 1;
  allNumbersGenerated.push(num4);

  var num5 = Math.floor(Math.random() * 100) + 1;
  allNumbersGenerated.push(num5);

  var num6 = Math.floor(Math.random() * 100) + 1;
  allNumbersGenerated.push(num6);

  var num7 = Math.floor(Math.random() * 100) + 1;
  allNumbersGenerated.push(num7);
  
  // Users guess
  var userNum1 = parseInt(document.getElementById("guess1").value);
  allNumbersGuessed.push(userNum1);

  var userNum2 = parseInt(document.getElementById("guess2").value);
  allNumbersGuessed.push(userNum2);

  var userNum3 = parseInt(document.getElementById("guess3").value);
  allNumbersGuessed.push(userNum3);

  var userNum4 = parseInt(document.getElementById("guess4").value);
  allNumbersGuessed.push(userNum4);

  var userNum5 = parseInt(document.getElementById("guess5").value);
  allNumbersGuessed.push(userNum5);

  var userNum6 = parseInt(document.getElementById("guess6").value);
  allNumbersGuessed.push(userNum6);

  var userNum7 = parseInt(document.getElementById("guess7").value);
  allNumbersGuessed.push(userNum7);

  console.log(allNumbersGuessed);
  console.log(allNumbersGenerated);

  allNumbersGuessed.forEach((nums, index) => {
    // This prints out the index of the allNumbersGuessed array and the value guessed:
    console.log(`Index: ${index} Value: ${nums}`);
  });

  // var anyMatches = allNumbersGenerated === allNumbersGuessed ? true : false;
  var matchArrays = [...allNumbersGenerated, ...allNumbersGuessed];
  // This prints out both arrays and combines them
  console.log(matchArrays);
  // Now I need to figure out how to compare all values to see if any are of equal value
  

    if ( num1 === userNum1 || num2 === userNum2 || num3 === userNum3 || num4 === userNum4 || num5 === userNum5 || num6 === userNum6) {
      console.log('You are a BIG winner!!');
    } else {
      console.log('You did not win!!');
    }

    console.log(num1);
    console.log(userNum1);

  
    console.log( num1 == userNum1 ? 'First Box is a match! You Win!!' : 'Better luck next time!');
    console.log( num2 == userNum2 ? 'Second Box is a match! You Win!!' : 'Better luck next time!');
    console.log( num3 == userNum3 ? 'Third Box is a match! You Win!!' : 'Better luck next time!');
    console.log( num4 == userNum4 ? 'Fourth Box is a match! You Win!!' : 'Better luck next time!');
    console.log( num5 == userNum5 ? 'Fifth Box is a match! You Win!!' : 'Better luck next time!');
    console.log( num6 == userNum6 ? 'Sixth Box is a match! You Win!!' : 'Better luck next time!');
    console.log( num7 == userNum7 ? 'Seventh Box is a match! You Win!!' : 'Better luck next time!');
  
    if (num1 == userNum1 || num2 == userNum2 || num3 == userNum3 || num4 == userNum4 || num5 == userNum5 || num6 == userNum6) {
      score = 100;
      document.getElementById("winner").innerHTML = `You are a winner! $${score}`;
    } else if (num7 == userNum7) {
      score = 100;
      document.getElementById("winner").innerHTML = `You just won BIG! $${score * 1000}`;
    } else {
      document.getElementById("winner").innerHTML = `Better luck next time!`;
    }

    if (num1 == userNum1) {
      document.getElementById("guess1").style.backgroundColor = "red";
      document.getElementById("guess1").style.color = "white";
    }

    if (num2 == userNum2) {
      document.getElementById("guess2").style.backgroundColor = "red";
      document.getElementById("guess1").style.color = "white";
    }

    if (num3 == userNum3) {
      document.getElementById("guess3").style.backgroundColor = "red";
      document.getElementById("guess1").style.color = "white";
    }

    if (num4 == userNum4) {
      document.getElementById("guess4").style.backgroundColor = "red";
      document.getElementById("guess1").style.color = "white";
    }

    if (num5 == userNum5) {
      document.getElementById("guess4").style.backgroundColor = "red";
      document.getElementById("guess1").style.color = "white";
    }

    if (num6 == userNum6) {
      document.getElementById("guess4").style.backgroundColor = "red";
      document.getElementById("guess1").style.color = "white";
    }
  
  // Output each random number
  document.getElementById("test1").innerHTML = num1;
  document.getElementById("test2").innerHTML = num2;
  document.getElementById("test3").innerHTML = num3;
  document.getElementById("test4").innerHTML = num4;
  document.getElementById("test5").innerHTML = num5;
  document.getElementById("test6").innerHTML = num6;
  document.getElementById("test7").innerHTML = num7;


  
  // Set up several conditions to see if any numbers match


  // if (num1 === userNum1 || num2 === userNum1) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num3 === userNum1 || num4 === userNum1) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num5 === userNum1 || num6 === userNum1) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num7 === userNum1) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num1 === userNum2 || num2 === userNum2) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num3 === userNum2 || num4 === userNum2) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num5 === userNum2 || num6 === userNum2) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num7 === userNum2) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num1 === userNum3 || num2 === userNum3) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num3 === userNum3 || num4 === userNum3) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num5 === userNum3 || num6 === userNum3) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num7 === userNum3) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num1 === userNum4 || num2 === userNum4) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num3 === userNum4 || num4 === userNum4) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num5 === userNum4 || num6 === userNum4) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num7 === userNum4) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num1 === userNum5 || num2 === userNum5) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num3 === userNum5 || num4 === userNum5) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num5 === userNum5 || num6 === userNum5) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num7 === userNum5) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num1 === userNum6 || num2 === userNum6) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num3 === userNum6 || num4 === userNum6) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num5 === userNum6 || num6 === userNum6) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num7 === userNum6) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num1 === userNum7 || num2 === userNum7) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num3 === userNum7 || num4 === userNum7) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num5 === userNum7 || num6 === userNum7) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (num7 === userNum7) {
  //     document.getElementById("winner").innerHTML = "You got one!!";
  // } else if (userNum1 === num1 && userNum2 === num2 && userNum3 === num3 && userNum4 === num4 && userNum5 === num5 && userNum6 === num6 && userNum7 === num7) {
  //     document.getElementById("winner").innerHTML = "YOU WIN!!";
  // } else {
  //     document.getElementById("winner").innerHTML = "You Lose!!";
  // }
  
}

playGame();