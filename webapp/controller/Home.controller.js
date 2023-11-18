sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast','sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.lab2dev.firstapp.controller.Home", {
            onInit: function () {

            },
            onHelloButtonPress: function (test){
                console.log("Hello");
                console.log(test)
            }
        });
    });
