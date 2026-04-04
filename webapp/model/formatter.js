sap.ui.define([], function () {
    "use strict";

    return {
        getMaterialDetails: function (salesOrg, material) {
            return (salesOrg || "") + "  " + (material || "");
        }
    };
});