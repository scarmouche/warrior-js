// level 4

class Player {
  playTurn(warrior) {
   
    var stairDirection = warrior.directionOfStairs(),
        occupiedSpaces = warrior.listen(),
        enemies = [],
        captives = [];

        analyzeFloor();

        if (captives.length) {
          rescueCaptives();
        } else if (warrior.feel(stairDirection).isEmpty()) {
          warrior.walk(stairDirection);
        } else {
          warrior.attack(stairDirection);
        }

        function analyzeFloor() {
          for (var i = 0; i < occupiedSpaces.length; i++) {
            var space = occupiedSpaces[i];
            if (space.isEnemy()) {
              enemies.push(space);
            } else if (space.isCaptive()) {
              captives.push(space);
            } 
          }
        }

        function rescueCaptives() {
          for (var i = 0; i < captives.length; i++) {
            var dir = warrior.directionOf(captives[i]);
            if (warrior.feel(dir).isCaptive()) {
              return warrior.rescue(dir);
            } else if (warrior.feel(dir).isEmpty()) {
              return warrior.walk(dir);
            } else {
              return warrior.attack(dir);
            }
          }
        }

  }
}

global.Player = Player;