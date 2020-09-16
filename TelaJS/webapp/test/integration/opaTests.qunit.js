/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"br/com/telajs/TelaJS/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});