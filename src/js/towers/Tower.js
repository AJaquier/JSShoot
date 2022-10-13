/**
 * Global Tower Element for all towers. This is an example how to implement a
 * sprite to the scene/game.
 * @constructor
 */
Game.Tower = function () {

    PIXI.Sprite.call(this);

    this.name = 'tower';

    Game.Element(this);

};

Game.Tower.prototype = Object.create(PIXI.Sprite.prototype);
Game.Tower.prototype.constructor = Game.Tower;