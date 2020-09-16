sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {
	getControllerName: function () {
		return "sapui5.demo.mvcapp.controller.Master";
	},

	createContent: function (oController) {

		//////////////////////////////
		//Vamos criar uma tabela agora
		//////////////////////////////

		//As colunas funcionam como cabeçalho da tabela
		var aColumns = [
			new sap.m.Column({
				header: new sap.m.Text({
					text: "ID"
				})
			}),
			new sap.m.Column({
				header: new sap.m.Text({
					text: "Name"
				})
			})
		];

		// No template informamos quais informações da model serão exibidas
		// Este é o template das linhas da tabela
		var oTemplate = new sap.m.ColumnListItem({
			type: "Navigation",
			cells: [
				new sap.m.ObjectIdentifier({
					text: "{ID}" //ID que está dentro de Suppliers no OData
				}),
				new sap.m.ObjectIdentifier({
					text: "{Name}" //Name que está dentro de Suplliers no OData
				})
			]
		});

		//No header da tabela vamos exibir a quantidade de suppliers que também é campo da Model
		var oTableHeader = new sap.m.Toolbar({
			content: [
				new sap.m.Title({
					text: "Number of Suppliers: {/CountSuppliers}" //CountSuppliers é um nó na raiz do OData
				})
			]
		});

		//Criar a tabela com as colunas e o header
		var oTable = new sap.m.Table({
			columns: aColumns,
			headerToolbar: oTableHeader
		});

		//Fazer o bind das entradas em /Suppliers do OData com o oTemplate para 
		//preencher as linhas da tabela
		oTable.bindItems("/Suppliers", oTemplate);

		/////////////////////////////////////////////////
		//Criar uma página para adicionar a tabela criada
		/////////////////////////////////////////////////
		var oPageMaster = new sap.m.Page({
			title: "SupplierOverview",
			content: [
				oTable
			]
		});

		return oPageMaster;
	}
});