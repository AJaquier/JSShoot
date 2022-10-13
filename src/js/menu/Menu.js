Game.Menu = {


    initialized: false,

    /**
     * Window where information can be put
     */
    window: {},
    windowSettings: {},
    /**
     * The background music object
     */
    backgroundMusic: {},

    init: function () {

        if (this.initialized == true) {
            return this.show();
        }
        var assets = [
            {url: 'assets/images/ui/button-normal.png'},
            {url: 'assets/images/ui/button-active.png'},
            {url: 'assets/audio/effects/button-hover.ogg'},
            {url: 'assets/audio/effects/button-activate.ogg'},
            {url: 'assets/images/ui/button-close.png'},
            {url: 'assets/images/ui/checkbox-checked.png'},
            {url: 'assets/images/ui/checkbox-unchecked.png'},
            {url: 'assets/images/ui/window-background.png'},
            {url: 'assets/audio/music/Prop - Vagity.mp3', id: 'music', key: 'background'}
        ];
        Game.load(assets, this.setup.bind(this));
    },

    setup: function () {

        Game.clearScene('menu');

        var top = Game.settings.height * .1;
        var play = new Game.Button({
            label: 'Play'
        });
        play.position.x = Game.settings.center.x;
        play.position.y = top;
        play.activate = function () {
            Game.Button.prototype.activate.call(this);
            Game.Level.init();
        };
        play.add();

        top += 60;

        var settings = new Game.Button({
            label: 'Settings'
        });
        settings.position.x = Game.settings.center.x;
        settings.position.y = top;
        settings.activate = function () {
            Game.Button.prototype.activate.call(this);
            Game.Menu.window.hide();
            Game.Menu.windowSettings.show();
        };
        settings.add();

        top += 60;

        var credits = new Game.Button({
            label: 'Credits'
        });
        credits.position.x = Game.settings.center.x;
        credits.position.y = top;
        credits.activate = function () {
            Game.Button.prototype.activate.call(this);
            Game.Menu.windowSettings.hide();
            Game.Menu.window.show('Credits\n\nMathieu de Ruiter\nwww.couchfriends.com');
        };
        credits.add();

        this.window = new Game.Window('window');
        this.window.add();

        this.windowSettings = new Game.WindowSettings();
        this.windowSettings.add();

        this.show();
    },

    show: function () {

        Game.backgroundMusic = PIXI.loader.resources['background'].data;
        Game.backgroundMusic.play();
        Game.state = 'run';
        Game.showScene('menu');

    }
};