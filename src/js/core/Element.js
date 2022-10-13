/**
 * Global Element for all in game objects. Every object should extend from this
 * class.
 * @constructor
 */
Game.Element = function (that) {

    that.name = that.name || 'element';

    that.scene = that.scene || 'game';

    that.anchor.set(.5);

    that._renderCanvasOrg = that._renderCanvas;

    that._renderCanvas = function() {
        this._renderCanvasOrg.apply(this, arguments);
        this.update.call(this);
    };

    that._renderWebGLOrg = that._renderWebGL;

    that._renderWebGL = function() {
        this._renderWebGLOrg.apply(this, arguments);
        this.update.call(this);
    };

    that.update = that.update || function () { };

    that.add = that.add || function () {
        Game.scenes[this.scene].addChild(this);
    };

    that.hide = that.hide || function() {
        this.visible = false;
    }

};