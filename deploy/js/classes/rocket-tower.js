var TowerDefense = TowerDefense || {};


TowerDefense.RocketTower = function (parentState, posX, posY) {
      // parentState, posX, posY, range, fireRate, dmg, bulletspeed, image
      TowerDefense.Tower.call(this, parentState, posX, posY, 'rocket-tower', 600, 800, 5, 200, 'rocket');

}

TowerDefense.RocketTower.prototype = Object.create(TowerDefense.Tower.prototype);
TowerDefense.RocketTower.prototype.constructor = TowerDefense.RocketTower;

TowerDefense.RocketTower.prototype.update = function () {

}
