sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "smartcontrols/model/formatter"
], function (Controller, formatter) {
    "use strict";

    return Controller.extend("smartcontrols.controller.View1", {
        formatter: formatter,
       onInit: function () {
   
},
onSmartTableInit: function () {
    var oTable = this.byId("idsmarttable").getTable();

    // Create Column
    var oColumn = new sap.m.Column({
        header: new sap.m.Text({ text: "Material Details" })
    });

    // Insert AFTER SalesOrg (index 2 → adjust if needed)
    oTable.insertColumn(oColumn, 3);

    // Add cell template
    var oTemplate = new sap.m.Text({
        text: {
            parts: ["SalesOrg", "Material"],
            formatter: this.formatter.getMaterialDetails
        }
    });

    // Add template to binding
    var oBindingInfo = oTable.getBindingInfo("items");
    if (oBindingInfo && oBindingInfo.template) {
        oBindingInfo.template.addCell(oTemplate);
    }
}
}
);
});
