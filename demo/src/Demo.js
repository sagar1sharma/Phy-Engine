/**
* A Matter.js demo and development testbed based on MatterTools.
*
* For a simpler, minimal Matter.js example see:
* https://github.com/liabru/matter-js/wiki/Getting-started
*
* The source for examples can be found at `/examples/`.
*
* @module Demo
*/

var MatterTools = require('matter-tools');

var demo = function(examples, isDev) {
    var demo = MatterTools.Demo.create({
        toolbar: {
            title: 'matter-js' + (isDev ? ' ・ dev' : ''),
            url: 'https://github.com/liabru/matter-js',
            reset: true,
            source: true,
            inspector: true,
            tools: true,
            fullscreen: true,
            exampleSelect: true
        },
        tools: {
            inspector: true,
            gui: true
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
    document.title = 'Matter.js Demo' + (isDev ? ' ・ Dev' : '');

    if (isDev) {
        // add compare button
        var buttonSource = demo.dom.buttonSource,
            buttonCompare = buttonSource.cloneNode(true);

        buttonCompare.textContent = '⎄';
        buttonCompare.title = 'Compare';
        buttonCompare.href = '?compare';
        buttonCompare.target = '';
        buttonCompare.className = 'matter-btn matter-btn-compare';
        buttonCompare.addEventListener('click', function(event) {
            window.location = '?compare#' + demo.example.id;
            event.preventDefault();
        });

        buttonSource.parentNode.insertBefore(buttonCompare, buttonSource.nextSibling);

        // always show debug info
        Matter.before('Render.create', function(renderOptions) {
            renderOptions.options.showDebug = true;
        });

        // arrow key navigation of examples
        document.addEventListener('keyup', function(event) {
            var isBackKey = event.key === 'ArrowLeft' || event.key === 'ArrowUp',
                isForwardKey = event.key === 'ArrowRight' || event.key === 'ArrowDown';

            if (isBackKey || isForwardKey) {
                var direction = isBackKey ? -1 : 1,
                    currentExampleIndex = demo.examples.findIndex(function(example) { 
                        return example.id === demo.example.id;
                    }),
                    nextExample = demo.examples[(demo.examples.length + currentExampleIndex + direction) % demo.examples.length];
                
                MatterTools.Demo.setExample(demo, nextExample);
            }
        });
    }

    MatterTools.Demo.start(demo);
};

module.exports = { demo: demo };
