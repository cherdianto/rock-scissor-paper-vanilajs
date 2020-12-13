class Player {
    constructor(name) {
      this.name = name;
      this.points = 0;
    }
    getName() {
      return this.name;
    }
  
    getRandomChoice() {
      var choices = ["batu","kertas","gunting"];
      this.choice = choices[Math.floor((Math.random() *3))];
      return this.choice;
    }
}

class Game {
    getWinner(p1,p2) 
    {
      var winner;
      if ((p1 === "batu" &&
      p2 === "kertas")
      ||(p1 === "kertas" &&
      p2 === "gunting")
      ||(p1 === "gunting" &&
      p2 === "batu")) 
      {
        pointPlayer2++;
        winner = player2.name;
      } 
      else if ((p2 === "batu" &&
      p1 === "kertas")
      ||(p2 === "kertas" &&
      p1 === "gunting")
      ||(p2 === "gunting" &&
      p1 === "batu")) 
      {
        pointPlayer1++;
        winner = player1.name;
      } 
      else 
      {
        winner = "draw"
      }
      return winner;
    }
}

class Score {
    addPoint() {
        pointPlayer++;
    }
    getPoint(points) {
        return this.points;
    }
}

var last_player1_id, last_player2_id;
var player1, player2;
var game;
var pointPlayer1 = 0; 
var pointPlayer2 = 0;

const gameInit = () => {
    var nama1 = document.getElementById('player1-name').value;
    var nama2 = document.getElementById('player2-name').value;
    player1 = new Player(nama1);
    player2 = new Player(nama2);
    game = new Game();
    pointPlayer1 = 0;
    pointPlayer2 = 0;

    document.getElementById('player1').innerHTML = nama1;
    document.getElementById('player2').innerHTML = nama2;
    document.getElementById('score-player1').innerHTML = pointPlayer1;
    document.getElementById('score-player2').innerHTML = pointPlayer2;
}

// document.addEventListener('DOMContentLoaded', gameInit(), false);

const runGame = (item) => {
    // remove class bg-select
    if (last_player1_id && last_player2_id != '') {
        document.getElementById(last_player1_id).classList.remove("bg-select");
        document.getElementById(last_player2_id).classList.remove("bg-select");
    }

    let choicePlayer1 = item;
    let choicePlayer2 = player2.getRandomChoice();
    let win = game.getWinner(choicePlayer1,choicePlayer2);
    let idPlayer1 = item + '-1'
    let idPlayer2 = choicePlayer2 + '-2';

    // add class bg-select
    document.getElementById(idPlayer1).classList.add("bg-select");
    document.getElementById(idPlayer2).classList.add("bg-select");

    // show the total point
    pointPlayer1 = document.getElementById('score-player1').innerHTML = pointPlayer1;
    pointPlayer2 = document.getElementById('score-player2').innerHTML = pointPlayer2;
    document.getElementById('versus').style.display = 'none';

    // display the winner
    if (win === 'draw') {
        document.getElementById('the-winner-desktop').innerHTML = 'draw';
        document.getElementById('the-winner-mobile').innerHTML = 'draw';
    }
    else {
        document.getElementById('the-winner-desktop').innerHTML = win + '<br> win';
        document.getElementById('the-winner-mobile').innerHTML = win + ' win';
    }

    // save the last status
    last_player1_id = idPlayer1;
    last_player2_id = idPlayer2;

    console.log(idPlayer1 + ` vs ` + idPlayer2 + ` win : ` + win );
    console.log(`poin player 1 : ` + pointPlayer1 + ` , point player 2 : ` + pointPlayer2);

}