sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "./Formatter",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    'sap/m/library'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast, JSONModel, Formatter, Filter, FilterOperator, mobileLibrary) {
        "use strict";
        
        const PopinLayout = mobileLibrary.PopinLayout;

        return Controller.extend("com.lab2dev.firstapplication.controller.Home", {
            onInit: async function () {
                
                const list = [
                    {Name: "Acer", Price: 1499.99, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 3.8, WeightUnit: "KG", Width: 28, Depth: 21, Height: 2.5, DimUnit: "cm"},
                    {Name: "Dell", Price: 899.50, CurrencyCode: "BRL", Status: "Out of Stock", WeightMeasure: 4.0, WeightUnit: "KG", Width: 31, Depth: 20, Height: 3, DimUnit: "cm"},
                    {Name: "Samsung", Price: 2650.00, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 3.5, WeightUnit: "KG", Width: 26, Depth: 17, Height: 2.8, DimUnit: "cm"},
                    {Name: "HP", Price: 1899.99, CurrencyCode: "BRL", Status: "Available", WeightMeasure: 4.2, WeightUnit: "KG", Width: 29, Depth: 23, Height: 2.2, DimUnit: "cm"},
                    {Name: "Macbook", Price: 1299.00, CurrencyCode: "BRL", Status: "Discontinued", WeightMeasure: 4.8, WeightUnit: "KG", Width: 30, Depth: 22, Height: 2.5, DimUnit: "cm"},
                    {Name: "Lenovo", Price: 1099.95, CurrencyCode: "BRL", Status: "Out of Stock", WeightMeasure: 3.6, WeightUnit: "KG", Width: 27, Depth: 18, Height: 3.5, DimUnit: "cm"}
            ]
            
            var oModel = new JSONModel(list);
            this.getView().setModel(oModel, "listModel");
        },

        onListItemPress: function (oEvent) {
                const item = oEvent.getSource()
                const itemTitle = item.getTitle()
                const message = `O item ${itemTitle} foi clicado!`
                MessageToast.show(message, { title: "Informação do item" })
        },

        onFilterProducts: function (oEvent) {
            var aFilter = []
            const sQuery = oEvent.getParameter("query")
            if (sQuery) {
                aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery))
            }
                // const oList = this.byId("productList")
                // const oBinding = oList.getBinding("items")
                // oBinding.filter(aFilter)

                const oTable = this.byId("productTable");
                const oBinding = oTable.getBinding("items");
                oBinding.filter(aFilter);
        },

            onPopinLayoutChanged: function() {
                var oTable = this.byId("idProductsTable");
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
    
            onSelect: function(oEvent) {
                const bSelected = oEvent.getParameter("selected"),
                    sText = oEvent.getSource().getText(),
                    oTable = this.byId("idProductsTable"),
                    aSticky = oTable.getSticky() || [];
    
                if (bSelected) {
                    aSticky.push(sText);
                } else if (aSticky.length) {
                    const iElementIndex = aSticky.indexOf(sText);
                    aSticky.splice(iElementIndex, 1);
                }
    
                oTable.setSticky(aSticky);
            },
    
            onToggleInfoToolbar: function(oEvent) {
                const oTable = this.byId("idProductsTable");
                oTable.getInfoToolbar().setVisible(!oEvent.getParameter("pressed"));
            }

        });
    });