//points that each gem are worth
//randomized every round;
var gem1Points;
var gem2Points;
var gem3Points;
var gem4Points;

//random point goal
var pointGoal;

//current user points
var currentPoints = 0;

//how many gems have been collected this round
var gemsCollected = 0;

//wins and losses
var wins = 0;
var losses = 0;

//initialize stats for gems and point goal
var newGame = function(){
    gemsCollected = 0;
    currentPoints = 0;
    pointGoal = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log(pointGoal);
    gem1Points = Math.floor(Math.random() * 12)+1;
    gem2Points = Math.floor(Math.random() * 12)+1;
    gem3Points = Math.floor(Math.random() * 12)+1;
    gem4Points = Math.floor(Math.random() * 12)+1;
    console.log("a "+gem1Points);
    console.log("b "+gem2Points);
    console.log("c "+gem3Points);
    console.log("d "+gem4Points);
}

//When a gem is collected (clicked) increase point total by the gems current value and increment gems collected
$("#button-1").on("click", function() {
    currentPoints += gem1Points;
    gemsCollected ++;
    console.log("current points: "+currentPoints);
    console.log("gems collected: "+gemsCollected);
})

$("#button-2").on("click", function() {
    currentPoints += gem2Points;
    gemsCollected ++;
    console.log("current points: "+currentPoints);
    console.log("gems collected: "+gemsCollected);
})

$("#button-3").on("click", function() {
    currentPoints += gem3Points;
    gemsCollected ++;
    console.log("current points: "+currentPoints);
    console.log("gems collected: "+gemsCollected);
})

$("#button-4").on("click", function() {
    currentPoints += gem4Points;
    gemsCollected ++;
    console.log("current points: "+currentPoints);
    console.log("gems collected: "+gemsCollected);
})



newGame();



