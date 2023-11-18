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
                        name: "Banana",
                        color: "Yellow",
                        quantity: 6
                    },
                    {
                        name: "Apple",
                        color: "Red",
                        quantity: 3
                    },
                    {
                        name: "Blueberry",
                        color: "Blue",
                        quantity: 5
                    },
                    {
                        name: "Orange",
                        color: "Orange",
                        quantity: 1
                    },
                    {
                        name: "Strawberry",
                        color: "red",
                        quantity: 9
                    },
                    {
                        name: "Kiwi",
                        color: "Green",
                        quantity: 1
                    },
                    
                ]

                var oModel = new JSONModel(list);
                this.getView().setModel(oModel, "listModel");

            },
            onHello: function(){
                console.log("Hello World")
            }
        });
    });