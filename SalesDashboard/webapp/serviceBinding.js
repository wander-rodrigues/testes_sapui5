function initModel() {
	var sUrl = "/Odata_Hana/dashboard/dashboard.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}