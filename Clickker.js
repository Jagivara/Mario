
var Score = 0;
var UppScore = 50;
var UppScore2 = 100;
var ScoreHelper = 1;
var Level = 0;
var Level2 = 0;
var UppScore3 = 1000;

function clickcount(){
    Score+= ScoreHelper;
    document.getElementById("Clicks").innerHTML = 'Score: ' + Score;
}

function uppgrade1(){
    if (Level >= 10) {
        alert('This is max level')
        return

    } else {
        
    }
if (Score >= UppScore) {

} else {
    alert('You need more points to buy this')
    return
}
    Score-= UppScore;
    UppScore+= 50;
    Level++;
    document.getElementById("Clicks").innerHTML = 'Score: ' + Score;
    document.getElementById("LevelUppgrade").innerHTML = 'Level: '+ Level;
    if(Level >= 10) {
        document.getElementById("LevelUppgrade").innerHTML = 'MAX'
    }
    function runTimer() {
        let count = 1
      
        setInterval(() => {
          count++;
          if(count >= 0)
          Score++;
          document.getElementById("Clicks").innerHTML = 'Score: ' + Score;
        }, 1000)
      }
      
      runTimer()
}

function uppgrade2(){
    if (Level2 >= 3) {
        alert('This is max level')
        return

    } else {

    }

    if (Score >= UppScore2) {
        
    } else {
        alert('You need more points to buy this')
        return
    }
    Score-= UppScore2;
    UppScore2+= 100;
    ScoreHelper*= 2;
    Level2++;
    document.getElementById("Clicks").innerHTML = 'Score: ' + Score;
    document.getElementById("LevelUppgrade2").innerHTML = 'Level: ' + Level2;
    if (Level2 >= 3) {
        document.getElementById("LevelUppgrade2").innerHTML = 'MAX'
    }
}

function Rebirth(){
    if (Score >= UppScore3) {

    } else {
        alert('You need '+(UppScore3)+' points to buy this')
        return
    }

    if(UppScore3 <= 1000){
        UppScore3+= 2000;
        ScoreHelper*= 2;
        Score = 0;
        document.getElementById("Clicks").innerHTML = 'Score: ' + Score;
        return
    }

    if(UppScore3 <= 3000){
        UppScore3+= 2000;
        ScoreHelper*= 2;
        Score = 0;
        document.getElementById("Clicks").innerHTML = 'Score: ' + Score;
        return
    }

    if(UppScore3 >= 5000){
        UppScore3*= 2
        ScoreHelper*= 2;
        Score = 0;
        document.getElementById("Clicks").innerHTML = 'Score: ' + Score;
    }
}