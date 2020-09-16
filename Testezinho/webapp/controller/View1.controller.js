sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("nome.com.teste.Testezinho.controller.View1", {
		onInit: function () {},
		/**
		 *@memberOf nome.com.teste.Testezinho.controller.View1
		 */
		onPressButton: function (oEvent) {
			MessageToast.show("Pert\xF4 o bot\xE3o");
		},
		/**
		 *@memberOf nome.com.teste.Testezinho.controller.View1
		 */
		pressionouobotao: function (oEvent) {
			//This code was generated by the layout editor.
			MessageToast.show("Pressionou outro botão");
		}
	});
});