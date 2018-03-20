//PseduCode 
//show random number at start of game
//create the random skull value
//if image is clicked then add points to the total score
//the images should all have a random amount of values 
//when th eimage is clicked again, update the points by adding image clicked points to current total points
//if the total score is equal to the random number then win! or else if the total score is > # then lose
//also remember to keep track of wins and losses and auto restart w/out refreshing page
//the random # is between 19-120
//and each sugar skull should have value of 1-12 that is hidden

//global variables
var crys1 = Math.floor(Math.random() * (12 - 1) + 1); 
var crys2 = Math.floor(Math.random() * (12 - 1) + 1); 
var crys3 = Math.floor(Math.random() * (12 - 1) + 1); 
var crys4 = Math.floor(Math.random() * (12 - 1) + 1); 

//counter
var win = 0; 
var loss = 0; 
var finalScore; 

//Functions
document.onreadystatechange = function () {
    var state = document.readyState;

    if(state == 'complete'){
        console.log('ReadyState');
        reset()
    }
}


function reset(){
    randNum = Math.floor(Math.random() * (120 - 19) + 19);
    console.log('randomNumber = ' + randNum); 
    crys1 = Math.floor(Math.random() * (12 - 1) +1); 
    crys2 = Math.floor(Math.random() * (12 - 1) +1);
    crys3 = Math.floor(Math.random() * (12 - 1) +1);
    crys4 = Math.floor(Math.random() * (12 - 1) +1)
    finalScore = 0; 

    $('.ranNumBox').html(randNum); 
    $('.scoreDisplay').html(finalScore);
    start();  
}

function start(){

    //reset 
    randNum = Math.floor(Math.random() * (120 - 19) + 19);
    console.log('randomNumber = ' + randNum); 
    crys1 = Math.floor(Math.random() * (12 - 1) +1); 
    crys2 = Math.floor(Math.random() * (12 - 1) +1);
    crys3 = Math.floor(Math.random() * (12 - 1) +1);
    crys4 = Math.floor(Math.random() * (12 - 1) +1)
    finalScore = 0; 

    //jQuery grabbing the html
    $('ranNumBox').html(randNum); 
    $('scoreDisplay').html(finalScore); 

    //and this give each skull a random value
    $('.crystal1').attr('value', crys1); 
        var test = $('.crystal1').attr('value'); 
        console.log('cyrstal 1   '+test); 

    $('.crystal2').attr('value', crys2); 
        var test = $('.crystal2').attr('value'); 
        console.log('cyrstal 2   '+test); 

    $('.crystal3').attr('value', crys3); 
        var test = $('.crystal3').attr('value'); 
        console.log('cyrstal 3   '+test); 

    $('.crystal4').attr('value', crys4); 
        var test = $('.crystal4').attr('value'); 
        console.log('cyrstal 4   '+test); 

    //when clicked it will save the final score and .off bc if not it will repeat twice and also save last number
    $('.box').off().on('click', function(){
        var test1 = $(this).attr('value'); 
        //adds to the final score
        finalScore = parseInt(finalScore) + parseInt(test1); 
        console.log('Crystal*  ' + test1); 
        console.log('finalScore***  ' + finalScore); 
        $('.scoreDisplay').html(finalScore); 

        if(randNum === finalScore){
            alert('win'); 
            win++; 
            $('.win').html(win); 
            $('scoreDisplay').html(0); 
            reset(); 
        }
        else if (finalScore > randNum){
            alert('loser'); 
            loss++; 
            $('.loss').html(loss); 
            $('.scoreDisplay').html(0); 
            reset(); 
        }
    
}); 

}