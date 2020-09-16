sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("br.com.infoprodutos.Produtos.controller.Produtos", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf br.com.infoprodutos.Produtos.view.Produtos
		 */
		onInit: function () {

		},

		funcListItemPress: function (evt) {
			//Essa variável oRouter irá conter todas as funcionalidades que foram criadas
			//no nosso router, lá no arquivo manifest.json
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			//Nesta variável, a partir das informações do nosso evento (evt) nós recuperamos 
			//o bindingcontext. Cada linha do relatório possui seu proprio binding context.
			//Com o binding context selecionado, nós recuperamos a propriedade ProductID que é
			//o ID do produto selecionado
			var selectedIdProd = evt.getSource().getBindingContext().getProperty("ProductID");

            // Com este comando, nós estamos acessando o nosso router, que foi configurado 
            // no arquivo manifest.json. Em seguida executamos o método navTo que fará a navegação
            // para a próxima view, onde nós passamos os parâmetros "nome do router" que neste caso
            // é "Detalhes", e o parâmetro idProd que foi definido no Patterns
			oRouter.navTo("Detalhes", {
				idProd: selectedIdProd
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf br.com.infoprodutos.Produtos.view.Produtos
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf br.com.infoprodutos.Produtos.view.Produtos
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf br.com.infoprodutos.Produtos.view.Produtos
		 */
		//	onExit: function() {
		//
		//	}

	});

});