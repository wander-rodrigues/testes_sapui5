sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("br.com.infoprodutos.Produtos.controller.Detalhes", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf br.com.infoprodutos.Produtos.view.Detalhes
		 */
		onInit: function () {
			//Essa variável oRouter irá conter todas as funcionalidades que foram criadas
			//no nosso router, lá no arquivo manifest.json
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			//Agora nós vamos registrar uma função para ser chamada toda vez que esta view Detalhes
			//for chamada. Nós fazemos esse registro aqui apenas uma vez (no onInit) e a partir daí,
			//toda vez que o usuário clicar em uma linha na view de produtos ou seja, toda vez que ele 
			//selecionar um produto na lista de produtos, essa view de detalhes será chamada e a função
			//registrada será executada automaticamente
			//Resumindo: Toda vez que o router Detalhes for chamado na tela de produtos, 
			//a função onRouteFunc será executada
			oRouter.getRoute("Detalhes").attachMatched(this.onRouteFunc, this);
		},

		// Função executada quando a view Detalhes for chamada
		onRouteFunc: function (evt) {

			//Recuperar os parâmetros que a view Detalhes recebeu atravé do route. 
			//No nosso caso é somente o campo idProd definido no Pattern do Routing, que serve 
			//para passar o produto selecionado para esta view
			//oArgumentos é um objeto que irá conter todos os parâmetros passados pra view 
			var oArgumentos = evt.getParameter("arguments");

			//Recuperar a view corrente (neste caso a view Detalhes)
			var oView = this.getView();

			// Montar variável com o nome da entidade mais o produto selecionado
			var sURL = "/Products(" + oArgumentos.idProd + ")";

			//Fazer o bindElement da view com o produto selecionado
			oView.bindElement({
				path: sURL,
				parameters: {
					expand: "Category"
				},
				events: {
					dataRequested: function () {
						oView.setBusy(true); //Ocupado
					},
					dataReceived: function () {
						oView.setBusy(false);
					}
				}
			});
		},

		// Função executada antes da view ser apresentada ao usuário
		onBeforeRendering: function () {

			//Recuperar a view corrente (neste caso a view Detalhes)
			var oView = this.getView();

			//Buscar o controle SimpleForm através do ID
			var oFormFornecedor = oView.byId("formFornecedor");

			//E por fim fazer o bindElement do fornecedor neste controle
			oFormFornecedor.bindElement("Supplier");
		},

		/**
		 *@memberOf br.com.infoprodutos.Produtos.controller.Detalhes
		 */
		onNavBack: function (oEvent) {

			//Essa variável oRouter irá conter todas as funcionalidades que foram criadas
			//no nosso router, lá no arquivo manifest.json
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			// Com este comando, nós estamos acessando o nosso router, que foi configurado 
			// no arquivo manifest.json. Em seguida executamos o método navTo que fará a navegação
			// para a view Produto, onde nós passamos os parâmetros "nome do router" que neste caso
			// é "Produtos", e como não há parâmetros a serem passados para a view, as chaves ficam
			// vazias
			oRouter.navTo("Produtos", {});
		}
	});
});