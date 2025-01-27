var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Reports;
        (function (Reports) {
            "use strict";
            function getUrl(reportName, reportId, entityId = null, entityCode = null, action = "run") {
                let url = Xrm.Utility.getGlobalContext().getClientUrl();
                let reportUrl = url + "/crmreports/viewer/viewer.aspx?action={action}&helpID={name}&id={{id}}"
                    .replace("{action}", encodeURIComponent(action))
                    .replace("{name}", encodeURIComponent(reportName))
                    .replace("{id}", encodeURIComponent(reportId));
                if (entityId && entityCode) {
                    reportUrl += "&context=records&records={{entityId}}&recordstype={entityCode}"
                        .replace("{entityId}", entityId)
                        .replace("{entityCode}", entityCode);
                }
                return reportUrl;
            }
            Reports.getUrl = getUrl;
        })(Reports = Crm.Reports || (Crm.Reports = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));
