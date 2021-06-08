//Better Countdown Timer With Loops
function btrCountdownTimer() {
    var count = 10

    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            document.getElementById("CountdownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function () {
        document.getElementById("CountdownTimer").innerHTML = "BLAST OFF!!!!";
    }, 10000);
}
//As requested by the Fleet Admiral, we will go to "Warning, less than 1/2 time left at five seconds.
function evenbtrCountdownTimer() {
    var count = 10;

    for (var i = 0; i < 11; i++) {
            //We made the i < 11 so that we have the extra second to put in the warning sign
        if (i == 10) {
            setTimeout(function () {
                document.getElementById("CountdownTimer").innerHTML = "BLAST OFF!!!!";
            }, i * 1000);
            //This will put the blast off message at the end of the timer. 
        } else if (i > 4) {
            setTimeout(function () {
                document.getElementById("CountdownTimer").innerHTML = "Warning less than 1/2 way to launch, time left = " + count;
                count--;
            }, i * 1000);
            //This will initiate the warning message once it gets to 5 seconds. 
        } else {
            setTimeout(function () {
                document.getElementById("CountdownTimer").innerHTML = count;
                count--;
            }, i * 1000);
            //This will make sure that neither the blast off sign or the warning sign will display if neither condition is met. 
        }

    }
}


//Week1-2 Countdown Timer Should run 10...1 then BLAST OFF
function StartCountdown() {
    var count = 10
    //The Countdown Timer should display 10
    document.getElementById("CountdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        //After 1 sec will run code in here
        //The Countdown Timer should display 9
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 1000); //set the wait time as 1 sec

    setTimeout(function () {
        //The Countdown Timer should display 8
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 2000); //set the wait time as 2 sec

    setTimeout(function () {
        //The Countdown Timer should display 7
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 3000); //set the wait time as 3 sec

    setTimeout(function () {
        //The Countdown Timer should display 6
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 4000); //set the wait time as 4 sec

    setTimeout(function () {
        //The Countdown Timer should display 5
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 5000); //set the wait time as 5 sec

    setTimeout(function () {
        //The Countdown Timer should display 4
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 6000); //set the wait time as 6 sec

    setTimeout(function () {
        //The Countdown Timer should display 3
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 7000); //set the wait time as 7 sec

    setTimeout(function () {
        //The Countdown Timer should display 2
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 8000); //set the wait time as 8 sec

    setTimeout(function () {
        //The Countdown Timer should display 1
        document.getElementById("CountdownTimer").innerHTML = count;
        count = count - 1;
    }, 9000); //set the wait time as 9 sec

    setTimeout(function () {
        //The Countdown Timer should display BLAST OFF!!!!
        document.getElementById("CountdownTimer").innerHTML = "BLAST OFF!!!!";
    }, 10000); //set the wait time as 10 sec
}

//Funtion to play Craps Game
function playCraps() {
    console.log("playCraps has started");
    var die1;
    die1 = Math.ceil(Math.random() * 6);
    //This makes sure that the die is only a 6 sided die
    document.getElementById("Die1Results").innerHTML = "The value of Die1 is: " + die1
    var die2;
    //This gives the code a place to put the value of die1 on the page so that the player knows the value of the die and can play 
    die2 = Math.ceil(Math.random() * 6);
    //This makes sure that the die is only a 6 sided die
    document.getElementById("Die2Results").innerHTML = "The value of Die2 is: " + die2
    var dieSum = die1 + die2;
    //This gives the code a place to put the value of die2 on the page so that the player knows the value of the die and can play 
    document.getElementById("SumResults").innerHTML = "The Sum of Die1 plus Die2 is: " + dieSum
    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("CrapsResults").innerHTML = "Craps! You Lose!";
        //This will make it so that the rules of craps comes into play and you will lose if you get a 7 or 11
    } else if (die1 == die2 && die2 % 2 == 0) {
        document.getElementById("CrapsResults").innerHTML = "Doubles! YOU WIN!";
        //This will make it so that the rules of craps comes into play and you will win if you get even doubles
    } else {
        document.getElementById("CrapsResults").innerHTML = "Please try again!";
        //This will make it so that the rules of craps comes into play and you will have to try again if you don't get even doubles
    }
}