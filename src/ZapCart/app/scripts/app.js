'use strict';

var angular = require('angular');
var WelcomeCtrl = require('./controllers/welcomeController');

var app = angular.module('myApp', []);
app.controller('WelcomeCtrl', ['$scope', WelcomeCtrl]);