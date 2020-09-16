sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("br.com.infoprodutos2.Produtos2.controller.Detalhes", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf br.com.infoprodutos2.Produtos2.view.Detalhes
		 */
		onInit: function () {

			// Buscar o Routing definido no arquivo manifest.json
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			//Registrar função para ser executada toda vez que a view Detalhes for chamada
			oRouter.getRoute("Detalhes").attachMatched(this.onRouteFunc, this);
		},

		// Executada toda vez que a view Detalhe for chamada
		onRouteFunc: function (evt) {
			//Recuperar os parametros que foram passados pra view Detalhes
			var oArgumentos = evt.getParameter("arguments");

			//Montar variável com o nome da entidade mais o produto selecionado
			var sURL = "/Products(" + oArgumentos.idProd + ")";

			//Recuperar a view corrente (no caso a view de Detalhes)
			var oView = this.getView();

			//Fazer o bindElement
			oView.bindElement({
				path: sURL,
				parameters: {
					expand: "Category"
				},
				events: {
					dataRequested: function () {
						oView.setBusy(true);
					},
					dataReceived: function () {
						oView.setBusy(false);
					}
				}
			});
		},

		/**
		 *@memberOf br.com.infoprodutos2.Produtos2.controller.Detalhes
		 */
		onNavBack: function (oEvent) {

			// Buscar o Routing definido no arquivo manifest.json
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			//Navegar para a tela de Produtos (lista principal)
			oRouter.navTo("Produtos", {});
		},

		onBeforeRendering: function () {

			//Recuperar a view corrente (no caso a view de Detalhes)
			var oView = this.getView();

			//Buscar o controle SimpleForm que contém os campos de fornecedor
			var oFormFornecedor = oView.byId("formFornecedor");

			//Fazer o navigation para o fornecedor no serivço da Microsoft (Supplier)
			oFormFornecedor.bindElement("Supplier");

		}
	});
});