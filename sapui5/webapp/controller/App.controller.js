// @ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageToast",
    
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 
     * 
     */
    function (Controller, MessageToast) {
        'use strict';
        return Controller.extend("logaligroup.sapui5.controller.App", {

            onInit: function (){
            
            }, 

            onShowHello: function () {
                // read text from i18n model
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data models
                let sRecipient =  this.getView().getModel().getProperty("/recipient/name");
                let sMesg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMesg);
            }

        });

    });