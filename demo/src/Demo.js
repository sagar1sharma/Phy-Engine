/**
* @module Demo
*/

var MatterTools = require('matter-tools');

var demo = function(examples, isDev) {
    var demo = MatterTools.Demo.create({
        toolbar: {
            title: 'Source Code' + (isDev ? ' ・ dev' : ''),
            url: 'https://github.com/sagar1sharma/Phy-Engine',
            reset: true,
            fullscreen: true,
            exampleSelect: true
        },
        tools: {
            inspector: true,
            // gui: true
        },
        inline: false,
        preventZoom: true,
        resetOnOrientation: true,
        routing: true,
        startExample: 'mixed',
        examples: examples
    });

    window.MatterDemoInstance = demo;

    document.body.appendChild(demo.dom.root);
    document.title = 'Physics Engine Demo Application';

    MatterTools.Demo.start(demo);
};

module.exports = { demo: demo };
