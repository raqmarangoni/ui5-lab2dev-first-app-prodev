sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.lab2dev.firstapp.controller.Home", {
            onInit: function () {

                const list = [
                    {
                        name: "Rice",
                        quantity: 5
                    },
                    {
                        name: "Beans",
                        quantity: 8
                    },
                    {
                        name: "Noodle",
                        quantity: 10
                    },
                    {
                        name: "Kitchen Oil",
                        quantity: 3
                    },
                    {
                        name: "Milk",
                        quantity: 7
                    },
                    {
                        name: "Coffee",
                        quantity: 4
                    },
                    {
                        name: "Sugar", 
                        quantity: 6
                    },
                    {
                        name: "Salt",
                        quantity: 2
                    },
                    {
                        name: "Wheat Flour",
                        quantity: 9
                    },
                    {
                        name: "Soap",
                        quantity: 11
                    }
                    
                ]

                const oModel = new JSONModel(list);
                this.getView().setModel(oModel, "listModel");

            },
            onHello: function(){
                console.log("Hello World")
            }
        });
    });