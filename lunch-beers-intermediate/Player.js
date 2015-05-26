class Player {
  playTurn(warrior) {
   
    var stairDirection = warrior.directionOfStairs(),
        enemies = [];

    findNearbyEnemies();

    if (enemies.length) {
      if (multipleEnemies()) {
        warrior.bind(enemies[0]);
      } else {
        warrior.attack(enemies[0]);
      }   
    } else if (warrior.feel(stairDirection).isEnemy()) {
      warrior.attack(stairDirection);
    } else {
      warrior.walk(stairDirection);
    } 
 
    function findNearbyEnemies() {
      /* Right now this code only works with the directions in this order */
      var directions = ['forward', 'backward', 'left', 'right'];

      for (var i = 0; i < directions.length; i++) {
        var dir = directions[i];
        if (warrior.feel(dir).isEnemy()) {
          enemies.push(dir);
        }
      }
    }

    function multipleEnemies() {
      return enemies.length >= 2;
    }

  }
}

global.Player = Player;