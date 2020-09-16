sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";
	return Controller.extend("sap.ui.demo.wt.controller.ContPainel1", {

		//Trata o clique no botão definido na view Tela1
		onBotaoPressionado: function() {
			// lê o modelo modelo_i18n que aponta para o arquivo com os textos
			var oBundle = this.getView().getModel("modelo_i18n").getResourceBundle();

			// Busca o campo nome do JSON da view
			var sNome = this.getView().getModel().getProperty("/recipiente/nome");

			//Cria a mensagem com o texto da mensagem que veio do arquivo i18n 
			//(campo TextoMsg) e substitui o parâmetro 0 pela variável recipiente/nome
			var sMsg = oBundle.getText("TextoMsg", [sNome]);

			// Exibe a mensagem
			MessageToast.show(sMsg);
		},

		onAbrirDialogo : function () {
			this.getOwnerComponent().abrirDialogo();
		}
		
 	});
});