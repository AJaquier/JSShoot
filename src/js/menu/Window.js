/**
 * Global Tower Element for all towers. This is an example how to implement a
 * sprite to the scene/game.
 * @constructor
 */
Game.Window = function (content) {
  PIXI.Sprite.call(this);

  this.content = content || false;

  this.interactive = true;

  this.name = "window";

  this.position.x = Game.settings.center.x;
  this.position.y = Game.settings.height * 0.1 + 250;

  this.scene = "menu";

  this.texture =
    PIXI.loader.resources["assets/images/ui/window-background.png"].texture;

  if (this.width > Game.settings.width) {
    this.width = Game.settings.width;
  }
  if (this.height > Game.settings.height) {
    this.height = Game.settings.height;
  }

  if (this.content) {
    var style = {
      font: "24px kenvector_futureregular, Arial",
      fill: "#000000",
      dropShadow: true,
      dropShadowDistance: 2,
      dropShadowColor: "rgba(0,0,0,.2)",
      wordWrap: true,
      wordWrapWidth: this.width,
      align: "center",
      lineHeight: 38,
    };

    this.content = new PIXI.Text(content, style);
    this.content.position.y = -(this.height / 2) + 10;
    this.content.anchor.set(0.5, 0);
    this.addChild(this.content);
  }

  var button = new Game.Button({
    texture: PIXI.loader.resources["assets/images/ui/button-close.png"].texture,
    textureActive: false,
  });
  button.position.x = 500 / 2;
  button.position.y = -250;

  button.activate = function () {
    Game.Button.prototype.activate.call(this);
    this.parent.visible = false;
  };

  this.addChild(button);
  Game.Element(this);

  this.visible = false;
};

Game.Window.prototype = Object.create(PIXI.Sprite.prototype);
Game.Window.prototype.constructor = Game.Window;

Game.Window.prototype.show = function (content) {
  this.position.x = Game.settings.center.x;
  if (content) {
    this.content.text = content;
  }
  this.visible = true;
};
