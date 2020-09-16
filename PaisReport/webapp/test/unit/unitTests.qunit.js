/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"pais/teste/com/PaisReport/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});