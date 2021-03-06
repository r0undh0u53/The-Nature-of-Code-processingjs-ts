/// <reference path="../../scripts/typings/processing.d.ts" />
define(["require", "exports", 'Car'], function (require, exports, Car) {
    'use strict';
    exports.sketch = function ($p) {
        var car;
        $p.setup = function () {
            $p.size(640, 360);
            car = new Car($p);
        };
        $p.draw = function () {
            $p.background(255);
            car.update();
            car.checkEdges();
            car.display();
        };
        $p.keyPressed = function () {
            if ($p.keyCode === $p.UP) {
                car.accelerate();
            }
            else if ($p.keyCode === $p.DOWN) {
                car.decelerate();
            }
        };
    };
    exports.run = function () {
        var canvas = document.getElementById('canvas1');
        var processingInstance = new Processing(canvas, exports.sketch);
    };
});
//# sourceMappingURL=Sketch.js.map