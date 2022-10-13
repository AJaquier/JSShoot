Game.Level = {
  initialized: false,

  availableLevels: [],

  init: function () {
    if (this.initialized == true) {
      return this.show();
    }
    var assets = [];
    Game.load(assets, this.setup.bind(this));
  },

  setup: function () {
    Game.clearScene("game");
    this.show();
  },

  show: function () {
    Game.state = "run";
    Game.showScene("game");
  },

  play: function (level) {
    Game.clearScene("game");
  },
};
