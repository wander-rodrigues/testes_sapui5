sap.ui.define([
	"sap/ui/base/Object"
], function (UI5Object) {
	"use strict";

	return UI5Object.extend("sap.ui.demo.wt.controller.ObjDialogo", {

		constructor : function (oView) {
			this._oView = oView;	
		},

		abrir : function () {
			var oView = this._oView;
			var oDialog = oView.byId("IdDialogo1");
			
			// create dialog lazily
			if (!oDialog) {
				var oFragmentController = {
					onFecharDialogo : function () {
						oDialog.close();
					}
				};
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "sap.ui.demo.wt.view.Dialogo1", oFragmentController);
				// connect dialog to the root view of this component (models, lifecycle)
				oView.addDependent(oDialog);
			}
			oDialog.open();
		}
	});

});