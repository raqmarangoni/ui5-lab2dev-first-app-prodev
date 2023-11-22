sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "./Formatter",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Formatter, Filter, FilterOperator, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("com.lab2dev.firstapp.controller.Home", {
            onInit: function () {

                const list = [
                        {name: "Acer", Price: 1499.99, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 3.8, WeightUnit: "KG", Width: 28, Depth: 21, Height: 2.5, DimUnit: "cm"},
                        {name: "Dell", Price: 899.50, CurrencyCode: "BRL", Status: "Out of Stock", WeightMeasure: 4.0, WeightUnit: "KG", Width: 31, Depth: 20, Height: 3, DimUnit: "cm"},
                        {name: "Samsung", Price: 2650.00, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 3.5, WeightUnit: "KG", Width: 26, Depth: 17, Height: 2.8, DimUnit: "cm"},
                        {name: "HP", Price: 1899.99, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 4.2, WeightUnit: "KG", Width: 29, Depth: 23, Height: 2.2, DimUnit: "cm"},
                        {name: "Macboock", Price: 1299.00, CurrencyCode: "BRL", Status: "Discontinued", WeightMeasure: 4.8, WeightUnit: "KG", Width: 30, Depth: 22, Height: 2.5, DimUnit: "cm"},
                        {name: "Lenovo", Price: 1099.95, CurrencyCode: "BRL", Status: "Out of Stock", WeightMeasure: 3.6, WeightUnit: "KG", Width: 27, Depth: 18, Height: 3.5, DimUnit: "cm"}
                ]
                // Cria um modelo JSON com os produtos (JSONModel)
                const oModel = new JSONModel(list);
                this.getView().setModel(oModel, "listModel");
                // Define o modelo com o nome "list" e fazendo a ligação com a view (Aggregation Binding)

            },
            onPress: function(oEvent){
                //origem do evento
                const item = oEvent.getSource();
                //Título do item
                const itemTitle = item.getTitle();
                //mensagem a ser exibida
                const message = `O item: "${itemTitle}" foi clicado!`;
                //exibe a mensagem na tela
                //MessageToast.show(message);
                MessageBox.information(message, {title: "Informação do Item"})
            },

            onFilterProducts: function (oEvent){
                var aFilter = []
                const sQuery = oEvent.getParameter("query")
                if(sQuery){
                    aFilter.push(new Filter("name", FilterOperator.Contains, sQuery))
                }
                const oList = this.byId("productList")
                const oBinding = oList.getBinding("items")
                oBinding.filter(aFilter);
            }
        });
    });