/*global QUnit*/

sap.ui.define([
	"pais/teste/com/PaisReport/controller/VIewPais.controller"
], function (Controller) {
	"use strict";

	QUnit.module("VIewPais Controller");

	QUnit.test("I should test the VIewPais controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});