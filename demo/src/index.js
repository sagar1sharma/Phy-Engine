/**
* Initialise and start the browser demo / compare tool.
*
* For a simpler, minimal Matter.js example see:
* https://github.com/liabru/matter-js/wiki/Getting-started
*
* The source for examples can be found at `/examples/`.
*
* @module Index
*/

var Matter = require('matter-js');
var Examples = require('../../examples/index');
// var compare = require('./Compare').compare;
// var multi = require('./Multi').multi;
var demo = require('./Demo').demo;

// browser globals
window.pathseg = require('pathseg');
window.MatterTools = require('matter-tools');
window.Matter = Matter;

// prepare examples
var examples = Matter.Common.keys(Examples).map(function(id){
    return {
        id: id,
        sourceLink: 'https://github.com/' + id + '.js',
        name: Examples[id].title, 
        init: Examples[id]
    };
});

// start the requested tool
// var isCompare = window.location.search.indexOf('compare') >= 0;
// var isMulti = window.location.search.indexOf('multi') >= 0;
var isDev = true;

demo(examples, isDev);
