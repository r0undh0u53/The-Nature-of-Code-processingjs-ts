﻿/// <reference path="../../scripts/typings/processing.d.ts" />

/* tslint:disable: no-unused-variable */
/* tslint:disable: comment-format */

import Car = require('Car');

'use strict';

export var sketch = ($p: Processing) => {

    var car: Car;

    $p.setup = () => {
        $p.size(640, 360);
        car = new Car($p);
    };

    $p.draw = () => {
        $p.background(255);

        car.update();
        car.checkEdges();
        car.display();
    };

    $p.keyPressed = () => {
        if ($p.keyCode === $p.UP) {
            car.accelerate();
        } else if ($p.keyCode === $p.DOWN) {
            car.decelerate();
        }
    };
};

export var run = () => {

    var canvas: HTMLElement = document.getElementById('canvas1');
    var processingInstance: Processing = new Processing(canvas, sketch);
};
