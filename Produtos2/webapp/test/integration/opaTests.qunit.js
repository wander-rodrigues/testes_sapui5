/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"br/com/infoprodutos2/Produtos2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});