sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/demo/wt/controller/ObjDialogo"
], function(UIComponent, JSONModel, ObjDialogo) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.wt.Component", {
		metadata: {
			manifest: "json"
		},
		//O init é automaticamente executado quando o componente é instanciado 
		init: function() {
			// Chama o INIT do pai
			// É obrigatório chamar o INIT do UIComponent (pai)
			UIComponent.prototype.init.apply(this, arguments);

			//Cria um JSON (estrutura recipiente com o campo nome)
			var lvRecipiente = {
				recipiente: {
					nome: "Brenda"
				}
			};

			var loModel = new JSONModel(lvRecipiente);

			//Para poder usar este modelo a partir da view XML, 
			//chamamos a função setModel na view e passamos o modelo criado. 
			//O modelo agora está configurado na view.
			this.setModel(loModel);

			// set dialog
			this._ObjDialogo1 = new ObjDialogo(this.getRootControl());
		},

		abrirDialogo: function() {
			this._ObjDialogo1.abrir();
		}
	});
});