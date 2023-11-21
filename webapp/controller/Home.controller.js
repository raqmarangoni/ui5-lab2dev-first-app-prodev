sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("com.lab2dev.firstapp.controller.Home", {
            onInit: function () {

                const list = [
                    {
                        title: "Arroz",
                        counter: 5
                    },
                    {
                        title: "Feijão",
                        counter: 8
                    },
                    {
                        title: "Macarrão",
                        counter: 10
                    },
                    {
                        title: "Óleo de Cozinha",
                        counter: 3
                    },
                    {
                        title: "Leite",
                        counter: 7
                    },
                    {
                        title: "Café",
                        counter: 4
                    },
                    {
                        title: "Açúcar", 
                        counter: 6
                    },
                    {
                        title: "Sal",
                        counter: 2
                    },
                    {
                        title: "Farinha de Trigo",
                        counter: 9
                    },
                    {
                        title: "Sabonete",
                        counter: 11
                    }
                    
                ]

                const oModel = new JSONModel(list);
                this.getView().setModel(oModel, "listModel");

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
            }
        });
    });