/**
 * Global Tower Element for all towers. This is an example how to implement a
 * sprite to the scene/game.
 * @constructor
 */
Game.TowerSlow = function () {

    Game.Tower.call(this);

    this.texture = PIXI.loader.resources['assets/images/ship.png'].texture;

};

Game.TowerSlow.prototype = Object.create(Game.Tower.prototype);
Game.TowerSlow.prototype.constructor = Game.TowerSlow;

Game.TowerSlow.prototype.update = function() {
    this.position.x += 1;
    this.position.y += 1;
};