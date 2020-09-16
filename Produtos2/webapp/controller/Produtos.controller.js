sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("br.com.infoprodutos2.Produtos2.controller.Produtos", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf br.com.infoprodutos2.Produtos2.view.Produtos
		 */
		onInit: function () {

		},

		funcListItemPress: function (evt) {
			// Buscar o produto selecionado
			var selectedIdProd = evt.getSource().getBindingContext().getProperty("ProductID");

			// Buscar o Routing definido no arquivo manifest.json
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Navegar para a view Detalhes passando o produto selecionado para o campo
			// idProd definido no pattern do route da view
			oRouter.navTo("Detalhes", {
				idProd: selectedIdProd
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf br.com.infoprodutos2.Produtos2.view.Produtos
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf br.com.infoprodutos2.Produtos2.view.Produtos
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf br.com.infoprodutos2.Produtos2.view.Produtos
		 */
		//	onExit: function() {
		//
		//	}

	});

});