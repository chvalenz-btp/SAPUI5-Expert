// @ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/sapui5/model/models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof logaligroup.sapui5.model.models} Models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * 
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("logaligroup.sapui5.Component", {

            metadata: {
                manifest : "json"
                // "rootView": {
                //     "viewName": "logaligroup.sapui5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }
            },

            init: function () {
                //call init function on the parent
                UIComponent.prototype.init.apply(this, arguments);

                // set data model
                this.setModel(Models.createRecipients());

                // set i18n model on the view
                let i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        })

    });