// level 2

class Player {
  playTurn(warrior) {
   
    var HP = warrior.health(),
        stairDirection = warrior.directionOfStairs();

    if ( warrior.feel(stairDirection).isEmpty() && HP < 8) {
      warrior.rest();
    } else if ( warrior.feel(stairDirection).isEmpty()) {
      warrior.walk(stairDirection);
    } else {
      attackEnemies();
    }

    function attackEnemies() {
      var directions = ['forward', 'left', 'right', 'backward'];
      for (var i = 0; i < directions.length; i++) {
        var dir = directions[i];
        if (warrior.feel(dir).isEnemy()) {
          warrior.attack(dir);
        }
      }
    }
    
  }
}

global.Player = Player;