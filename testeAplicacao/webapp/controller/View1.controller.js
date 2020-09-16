sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
			"use strict";
			return Controller.extend("testeAplicacao.controller.View1", {
					/**
					 *@memberOf testeAplicacao.controller.View1
					 */
					testeFuncao: function (oEvent) {
						alert("teste");
					});
			});