sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/Formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/library",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (
        Controller
        , JSONModel
        , Formatter
        , Filter
        , FilterOperator
        , ODataModel
    ) {
        "use strict";

        return Controller.extend("com.lab2dev.firstapp.controller.Home", {
            formatter: Formatter,
            onInit: async function () {

                var oModel = new ODataModel("/northwind/northwind.svc/");

                oModel.read("/Products", {
                    success: (oData) => {
                        debugger
                        var oModel = new JSONModel(oData.results)
                        this.getView().setModel(oModel, 'products')
                    },
                    error: (oError) => {
                        console.log(oError)
                    }

                })  

                const list = [
                    { name: "Asus", Price: 956.00, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 4.5, WeightUnit: "KG", Width: 35, Depth: 19, Height: 3, DimUnit: "cm" },
                    { name: "Macbook", Price: 1200.00, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 4.2, WeightUnit: "KG", Width: 25, Depth: 18, Height: 2, DimUnit: "cm" },
                    { name: "Dell", Price: 1155.40, CurrencyCode: "BRL", Status: "Out of Stock", WeightMeasure: 4.5, WeightUnit: "KG", Width: 30, Depth: 20, Height: 4, DimUnit: "cm" },
                    { name: "Acer", Price: 2999.00, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 4.2, WeightUnit: "KG", Width: 29, Depth: 22, Height: 3, DimUnit: "cm" },
                    { name: "Asus", Price: 956.00, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 4.5, WeightUnit: "KG", Width: 35, Depth: 19, Height: 3, DimUnit: "cm" },
                    { name: "Macbook", Price: 1200.00, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 4.2, WeightUnit: "KG", Width: 25, Depth: 18, Height: 2, DimUnit: "cm" },
                    { name: "Dell", Price: 1155.40, CurrencyCode: "BRL", Status: "Out of Stock", WeightMeasure: 4.5, WeightUnit: "KG", Width: 30, Depth: 20, Height: 4, DimUnit: "cm" },
                    { name: "Acer", Price: 2999.00, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 4.2, WeightUnit: "KG", Width: 29, Depth: 22, Height: 3, DimUnit: "cm" },
                ]

                var oListModel = new JSONModel(list);
                this.getView().setModel(oListModel, "listModel");

                const table = [
                    {Name: "Acer", Price: 1499.99, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 3.8, WeightUnit: "KG", Width: 28, Depth: 21, Height: 2.5, DimUnit: "cm"},
                    {Name: "Dell", Price: 899.50, CurrencyCode: "BRL", Status: "Out of Stock", WeightMeasure: 4.0, WeightUnit: "KG", Width: 31, Depth: 20, Height: 3, DimUnit: "cm"},
                    {Name: "Samsung", Price: 2650.00, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 3.5, WeightUnit: "KG", Width: 26, Depth: 17, Height: 2.8, DimUnit: "cm"},
                    {Name: "HP", Price: 1899.99, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 4.2, WeightUnit: "KG", Width: 29, Depth: 23, Height: 2.2, DimUnit: "cm"},
                    {Name: "Macbook", Price: 1299.00, CurrencyCode: "BRL", Status: "Discontinued", WeightMeasure: 4.8, WeightUnit: "KG", Width: 30, Depth: 22, Height: 2.5, DimUnit: "cm"},
                    {Name: "Lenovo", Price: 1099.95, CurrencyCode: "BRL", Status: "Out of Stock", WeightMeasure: 3.6, WeightUnit: "KG", Width: 27, Depth: 18, Height: 3.5, DimUnit: "cm"}
            ]

                var oTableModel = new JSONModel(table);
                this.getView().setModel(oTableModel, "tableModel");
            },

            onListItemPress: function (oEvent) {
                const item = oEvent.getSource()
                const itemTitle = item.getTitle()
                const message = `O item ${itemTitle} foi clicado!`
                MessageBox.information(message, { title: "Informação do item" })
            },
            onFilterProducts: function (oEvent) {
                var aFilter = []
                const sQuery = oEvent.getParameter("query")
                if (sQuery) {
                    aFilter.push(new Filter("name", FilterOperator.Contains, sQuery))
                }

                const oList = this.byId("productList")
                const oBinding = oList.getBinding("items")
                oBinding.filter(aFilter)
            },
            onPopinLayoutChanged: function () {
                var oTable = this.byId("productTable");
                var oComboBox = this.byId("idPopinLayout");
                var sPopinLayout = oComboBox.getSelectedKey();
                switch (sPopinLayout) {
                    case "Block":
                        oTable.setPopinLayout(PopinLayout.Block);
                        break;
                    case "GridLarge":
                        oTable.setPopinLayout(PopinLayout.GridLarge);
                        break;
                    case "GridSmall":
                        oTable.setPopinLayout(PopinLayout.GridSmall);
                        break;
                    default:
                        oTable.setPopinLayout(PopinLayout.Block);
                        break;
                }
            },

            onSelect: function (oEvent) {
                const bSelected = oEvent.getParameter("selected"),
                    sText = oEvent.getSource().getText(),
                    oTable = this.byId("productTable"),
                    aSticky = oTable.getSticky() || [];

                if (bSelected) {
                    aSticky.push(sText);
                } else if (aSticky.length) {
                    const iElementIndex = aSticky.indexOf(sText);
                    aSticky.splice(iElementIndex, 1);
                }

                oTable.setSticky(aSticky);
            },

            onToggleInfoToolbar: function (oEvent) {
                const oTable = this.byId("productTable");
                oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));
            }
        });
    });
