/**
 * Global Tower Element for all towers. This is an example how to implement a
 * sprite to the scene/game.
 * @constructor
 */
Game.WindowSettings = function () {

    Game.Window.call(this, 'settings');

    var style = {
        font : '24px kenvector_futureregular, Arial',
        fill : '#ffffff',
        dropShadow: true,
        lineHeight: 36,
        textBaseline: 'middle',
        dropShadowDistance: 2,
        dropShadowColor: 'rgba(0,0,0,.2)'
    };

    this.settings = [
        {
            object: {},
            label: 'Sound',
            key: 'sound'
        },
        {
            object: {},
            label: 'Music',
            key: 'music'
        },
        {
            object: {},
            label: 'Particles',
            key: 'particles'
        }
    ];
    var top = -(this.height/2);
    for (var i = 0; i < this.settings.length; i++) {
        top += 64;
        var setting = this.settings[i];
        var texture = PIXI.loader.resources['assets/images/ui/checkbox-checked.png'].texture;
        if (Game.settings[setting.key] == false) {
            texture = PIXI.loader.resources['assets/images/ui/checkbox-unchecked.png'].texture;
        }
        setting.object = new PIXI.Sprite(texture);
        var label = new PIXI.Text(setting.label, style);
        label.position.x = 46;
        setting.toggleSetting = function() {

            Game.Button.prototype.activate.call(this);
            var newSetting = true;
            var currentSetting = Game.settings[this.key];
            if (currentSetting == true) {
                newSetting = false;
            }
            Game.settings[this.key] = setting;
            var texture = PIXI.loader.resources['assets/images/ui/checkbox-checked.png'].texture;
            if (newSetting == false) {
                texture = PIXI.loader.resources['assets/images/ui/checkbox-unchecked.png'].texture;
            }
            Game.settings.save(this.key, newSetting);
            this.object.texture = texture;
        };
        setting.object.addChild(label);
        setting.object.position.x = -(this.width/2) + 10;
        setting.object.position.y = top;
        setting.object.interactive = true;
        setting.object.setting = setting;
        setting.object.on('click', function() {
            this.setting.toggleSetting();
        });
        setting.object.on('tap', function() {
            this.setting.toggleSetting();
        });
        setting.object.on('mouseover', function() {
            Game.Button.prototype.buttonOver.call(this);
        });

        this.addChild(setting.object);
    }
};

Game.WindowSettings.prototype = Object.create(Game.Window.prototype);
Game.WindowSettings.prototype.constructor = Game.WindowSettings;

Game.WindowSettings.prototype.show = function () {

    Game.Window.prototype.show.call(this);
    for (var i = 0; i < this.settings.length; i++) {
        var setting = this.settings[i];
        var texture = PIXI.loader.resources['assets/images/ui/checkbox-checked.png'].texture;
        if (Game.settings[setting.key] == false) {
            texture = PIXI.loader.resources['assets/images/ui/checkbox-unchecked.png'].texture;
        }
        setting.object.texture = texture;
    }

};