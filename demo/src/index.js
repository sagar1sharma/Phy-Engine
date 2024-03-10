/**
* @module Index
*/

var Matter = require('matter-js');
var Examples = require('../../examples/index');
var demo = require('./Demo').demo;

window.pathseg = require('pathseg');
window.MatterTools = require('matter-tools');
window.Matter = Matter;

var examples = Matter.Common.keys(Examples).map(function(id){
    return {
        id: id,
        sourceLink: 'https://github.com/' + id + '.js',
        name: Examples[id].title, 
        init: Examples[id]
    };
});

var isDev = true;

demo(examples, isDev);
