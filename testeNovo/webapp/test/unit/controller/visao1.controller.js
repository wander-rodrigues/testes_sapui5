/*global QUnit*/

sap.ui.define([
	"nomeespaco/testeNovo/controller/visao1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("visao1 Controller");

	QUnit.test("I should test the visao1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});