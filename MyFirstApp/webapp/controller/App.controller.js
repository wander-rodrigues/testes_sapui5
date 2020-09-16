sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("Amarmn.MyFirstApp.controller.App", {
		onPress: function () {
			MessageToast.show("My First SAPUI5 application");
		}
	});
});