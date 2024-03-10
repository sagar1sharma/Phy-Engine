/**
* @class World
*/

var World = {};

module.exports = World;

var Composite = require('./Composite');
var Common = require('../core/Common');

(function() {

    World.create = Composite.create;
    World.add = Composite.add;
    World.remove = Composite.remove;
    World.clear = Composite.clear;
    World.addComposite = Composite.addComposite;
    World.addBody = Composite.addBody;
    World.addConstraint = Composite.addConstraint;

})();
