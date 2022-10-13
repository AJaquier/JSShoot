/**
 * Global Tower Element for all towers. This is an example how to implement a
 * sprite to the scene/game.
 * @constructor
 */
Game.Button = function (settings) {

    PIXI.Sprite.call(this);

    settings = settings || {};

    this.settings = {
        label: '',
        texture: PIXI.loader.resources['assets/images/ui/button-normal.png'].texture,
        textureActive: PIXI.loader.resources['assets/images/ui/button-active.png'].texture
    };

    for (var key in settings) {
        this.settings[key] = settings[key];
    }

    if (this.settings.texture) {
        this.texture = this.settings.texture;
    }

    this.text = false;

    this.interactive = true;

    this.on('mousedown', function() {
        this.buttonDown();
    });
    this.on('touchstart', function() {
        this.buttonDown();
    });

    this.on('mouseup', function() {
        this.buttonUp();
    });
    this.on('touchend', function() {
        this.buttonUp();
    });
    this.on('mouseupoutside', function() {
        this.buttonUp();
    });
    this.on('touchendoutside', function() {
        this.buttonUp();
    });

    this.on('click', function() {
        this.activate();
    });
    this.on('tap', function() {
        this.activate()
    });

    this.on('mouseover', function() {
        this.buttonOver();
    });

    this.name = 'button';

    this.scene = 'menu';

    if (this.settings.label != '') {
        var style = {
            font : '28px kenvector_futureregular, Arial',
            fill : '#ffffff',
            dropShadow: true,
            dropShadowDistance: 2,
            dropShadowColor: 'rgba(0,0,0,.2)'
        };

        this.text = new PIXI.Text(this.settings.label, style);
        this.text.anchor.set(.5);

        this.addChild(this.text);
    }

    Game.Element(this);

};

Game.Button.prototype = Object.create(PIXI.Sprite.prototype);
//Game.Button.prototype.constructor = Game.Button;

/**
 * Callback when button is clicked or touched down.
 */
Game.Button.prototype.buttonDown = function() {

    if (this.settings.textureActive) {
        this.texture = this.settings.textureActive;
        if (this.text) {
            this.text.position.y = 2;
        }
    }

};

/**
 * Callback when button is clicked or touched down.
 */
Game.Button.prototype.buttonUp = function() {

    if (this.settings.texture) {
        this.texture = this.settings.texture;
        if (this.text) {
            this.text.position.y = 0;
        }
    }

};

/**
 * Callback when button is clicked or touched down.
 */
Game.Button.prototype.buttonOver = function() {
    PIXI.loader.resources['assets/audio/effects/button-hover.ogg'].data.play();
};

/**
 * Callback when button is clicked or touched down.
 */
Game.Button.prototype.activate = function() {
    PIXI.loader.resources['assets/audio/effects/button-activate.ogg'].data.play();
};