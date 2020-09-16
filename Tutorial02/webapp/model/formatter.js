sap.ui.define([], function () {
	"use strict";
	return {
		funcaoStatusText: function (sParametroStatus) {
			var resourceBundle = this.getView().getModel("modelo_i18n").getResourceBundle();
			switch (sParametroStatus) {
				case "A":
					return resourceBundle.getText("textoStatusA");
				case "B":
					return resourceBundle.getText("textoStatusB");
				case "C":
					return resourceBundle.getText("textoStatusC");
				default:
					return sParametroStatus;
			}
		}
	};
});