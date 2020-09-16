/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nome/com/teste/Testezinho/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});