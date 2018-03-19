//PseduCode 
//show random number at start of game
//if image is clicked then add points to the total score
//the images should all have a random amount of values 
//when th eimage is clicked again, update the points by adding image clicked points to current total points
//if the total score is equal to the random number then win! or else if the total score is > # then lose
//also remember to keep track of wins and losses and auto restart w/out refreshing page
//the random # is between 19-120
//and each sugar skull should have value of 1-12 that is hidden

$(document).ready(function(){
    //this creates the random score between 19 and 120
    var ranNum = Math.floor(Math.random() * (120 -19 +1)) +19; 
   
    $('.ranNumBox').html(ranNum); 

}); 