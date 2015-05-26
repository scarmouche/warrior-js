class Player {
  playTurn(warrior) {
    var direction = warrior.directionOfStairs();

    warrior.walk(direction);
  }
}

global.Player = Player;
