sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (
        Controller
        , JSONModel
        , MessageBox
        , MessageToast
        , ResourceModel
        , Filter
        , FilterOperator) {
        "use strict";

        return Controller.extend("com.lab2dev.firstapp.controller.Home", {

            onInit: async function () {
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

                var oModel = new JSONModel(list);
                this.getView().setModel(oModel, "listModel");
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
            }
        });
    });