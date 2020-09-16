sap.ui.require(
	[
		"sap/ui/demo/wt/model/formatter",
		"sap/ui/model/resource/ResourceModel",
		"sap/ui/thirdparty/sinon",
		"sap/ui/thirdparty/sinon-qunit"
	],
	function (formatter, ResourceModel) {
		"use strict";
		QUnit.module("Formatting functions", {
			beforeEach: function () {
				this._oResourceModel = new ResourceModel({
					bundleUrl : jQuery.sap.getModulePath("sap.ui.demo.wt", "/i18n/i18n.properties")
				});
			},
			afterEach: function () {
				this._oResourceModel.destroy();
			}
		});
		QUnit.test("Deve retornar os textos traduzidos", function (assert) {
			// Arrange
			var	oViewStub = {
				getModel: this.stub().withArgs("i18n").returns(this._oResourceModel)
			};
			var oControllerStub = {
				getView: this.stub().returns(oViewStub)
			};
			// System under test
			var fnIsolatedFormatter = formatter.funcaoStatusText.bind(oControllerStub);
			// Assert
			assert.strictEqual(fnIsolatedFormatter("A"), "Novo", "The long text for status A is correct");
			assert.strictEqual(fnIsolatedFormatter("B"), "Em andamento", "The long text for status B is correct");
			assert.strictEqual(fnIsolatedFormatter("C"), "Concluído", "The long text for status C is correct");
			assert.strictEqual(fnIsolatedFormatter("Outros"), "Outros", "The long text for status Foo is correct");
		});
	}
);