var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        Crm.publisherPrefix = "sib_";
        Crm.componentName = function (name) { return Crm.publisherPrefix + name; };
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));
var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Forms;
        (function (Forms) {
            "use strict";
            var FormNotificationType = (function () {
                function FormNotificationType() {
                }
                FormNotificationType.Error = "ERROR";
                FormNotificationType.Warning = "WARNING";
                FormNotificationType.Information = "INFO";
                return FormNotificationType;
            }());
            Forms.FormNotificationType = FormNotificationType;
            var ClientType = (function () {
                function ClientType() {
                }
                ClientType.Browser = "Web";
                ClientType.Outlook = "Outlook";
                ClientType.Mobile = "Mobile";
                return ClientType;
            }());
            Forms.ClientType = ClientType;
            var AttributeRequiredLevel = (function () {
                function AttributeRequiredLevel() {
                }
                AttributeRequiredLevel.None = "none";
                AttributeRequiredLevel.Required = "required";
                AttributeRequiredLevel.Recommended = "recommended";
                return AttributeRequiredLevel;
            }());
            Forms.AttributeRequiredLevel = AttributeRequiredLevel;
        })(Forms = Crm.Forms || (Crm.Forms = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var ScriptManager;
        (function (ScriptManager) {
            "use strict";
            var _scripts = {};
            var _stylesheets = [];
            function loadScripts(scripts, document) {
                if (document === void 0) { document = window.document; }
                var deferreds = scripts.map(function (s) { return loadScript(s, document); });
                return jQuery.when(deferreds);
            }
            ScriptManager.loadScripts = loadScripts;
            function loadScript(script, document) {
                if (document === void 0) { document = window.document; }
                console.log("Dynamics.Crm.ScriptManager.loadScript: " + script);
                var promise = _scripts[script];
                if (!!promise) {
                    return promise;
                }
                _scripts[script] = promise = jQuery.Deferred();
                var element = document.createElement("script");
                element.defer = true;
                element.type = "text/javascript";
                element.src = script;
                element.addEventListener("load", function onLoaded() {
                    promise.resolveWith(element);
                });
                document.body.appendChild(element);
                return promise;
            }
            ScriptManager.loadScript = loadScript;
            function loadStylesheets(stylesheets, document) {
                if (document === void 0) { document = window.document; }
                stylesheets.forEach(function (s) { return loadStylesheet(s, document); });
            }
            ScriptManager.loadStylesheets = loadStylesheets;
            function loadStylesheet(stylesheet, document) {
                if (document === void 0) { document = window.document; }
                console.log("Dynamics.Crm.ScriptManager.loadStylesheet: " + stylesheet);
                var filter = _stylesheets.filter(function (s) { return s === stylesheet; });
                if (filter.length === 0) {
                    jQuery("head", document)
                        .append("<link rel='stylesheet' href='{path}' />"
                        .replace("{path}", stylesheet));
                    _stylesheets.push(stylesheet);
                }
            }
            ScriptManager.loadStylesheet = loadStylesheet;
        })(ScriptManager = Crm.ScriptManager || (Crm.ScriptManager = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Dialogs;
        (function (Dialogs) {
            "use strict";
            var BootstrapDialogTemplates = (function () {
                function BootstrapDialogTemplates() {
                }
                BootstrapDialogTemplates.alert = function (message, title) { return ("\n            <div class='modal fade' tabindex='-1' role='dialog'>\n            <div class='modal-dialog' role='document'>\n               <div class='modal-content'>\n                   <div class='modal-header'>\n                       <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\n                           <span aria-hidden='true' >&times;</span></button>\n                       <h4 class='modal-title'>" + title + "</h4>\n                   </div>\n                   <div class='modal-body'>" + message + "</div>\n                   <div class='modal-footer'>\n                       <button type='button' class='btn btn-primary' data-dismiss='modal'>OK</button>\n                   </div>\n               </div>\n            </div>\n            </div>"); };
                BootstrapDialogTemplates.confirm = function (message, title) { return ("\n            <div class='modal fade' tabindex='-1' role='dialog'>\n            <div class='modal-dialog' role='document'>\n               <div class='modal-content'>\n                   <div class='modal-header'>\n                       <button type='button' class='close' data-dismiss='modal' aria-label='Close'>\n                           <span aria-hidden='true' >&times;</span></button>\n                       <h4 class='modal-title'>" + title + "</h4>\n                   </div>\n                   <div class='modal-body'>" + message + "</div>\n                   <div class='modal-footer'>\n                       <button type='button' class='btn btn-primary' data-dismiss='modal'>OK</button>\n                       <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>\n                   </div>\n               </div>\n            </div>\n            </div>"); };
                return BootstrapDialogTemplates;
            }());
            var BootstrapDialog = (function () {
                function BootstrapDialog(window, content, init) {
                    this._content = content;
                    this._window = window;
                    this._init = init;
                }
                BootstrapDialog.prototype.Resolve = function () {
                    this.deferred.resolve();
                };
                BootstrapDialog.prototype.Reject = function () {
                    this.deferred.reject();
                };
                BootstrapDialog.prototype.Show = function () {
                    this.dialog.modal("show");
                    return this.deferred;
                };
                Object.defineProperty(BootstrapDialog.prototype, "dialog", {
                    get: function () {
                        if (!this._dialog) {
                            this._dialog = this._window.jQuery(this._content);
                            this._dialog.appendTo(this._window.jQuery("body"));
                            this._dialog.modal({
                                backdrop: false,
                                show: false
                            });
                            this._window.jQuery("button.btn-primary", this._dialog).click(this.Resolve.bind(this));
                            this._window.jQuery("button.close", this._dialog).click(this.Reject.bind(this));
                            this._window.jQuery("button.btn-default", this._dialog).click(this.Reject.bind(this));
                            if (this._init) {
                                this._init(this._dialog);
                            }
                        }
                        return this._dialog;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BootstrapDialog.prototype, "deferred", {
                    get: function () {
                        if (!this._deferred) {
                            this._deferred = $.Deferred();
                        }
                        return this._deferred;
                    },
                    enumerable: true,
                    configurable: true
                });
                return BootstrapDialog;
            }());
            Dialogs.BootstrapDialog = BootstrapDialog;
            var BootstrapDialogProvider = (function () {
                function BootstrapDialogProvider(window) {
                    this._window = window;
                    this.Init();
                }
                BootstrapDialogProvider.prototype.Init = function () {
                    var baseUrl = "../WebResources/" + Dynamics.Crm.publisherPrefix + "/Libs/bootstrap/";
                    this._loading = Crm.ScriptManager.loadScript(baseUrl + "js/bootstrap.min.js", this._window.document);
                    Crm.ScriptManager.loadStylesheet(baseUrl + "css/bootstrap.min.css", this._window.document);
                };
                BootstrapDialogProvider.prototype.Alert = function (message, title) {
                    var _this = this;
                    return this
                        ._loading
                        .then(function () { return new BootstrapDialog(_this._window, BootstrapDialogTemplates.alert(message, title)); });
                };
                BootstrapDialogProvider.prototype.Confirm = function (message, title) {
                    var _this = this;
                    return this
                        ._loading
                        .then(function () { return new BootstrapDialog(_this._window, BootstrapDialogTemplates.confirm(message, title)); });
                };
                BootstrapDialogProvider.prototype.Create = function (config) {
                    var _this = this;
                    return this
                        ._loading
                        .then(function () { return new BootstrapDialog(_this._window, config.Template, config.Init); });
                };
                return BootstrapDialogProvider;
            }());
            Dialogs.BootstrapDialogProvider = BootstrapDialogProvider;
        })(Dialogs = Crm.Dialogs || (Crm.Dialogs = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));

var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Dialogs;
        (function (Dialogs) {
            "use strict";
            (function (DialogType) {
                DialogType[DialogType["Alert"] = 0] = "Alert";
                DialogType[DialogType["Confirm"] = 1] = "Confirm";
                DialogType[DialogType["Custom"] = 2] = "Custom";
            })(Dialogs.DialogType || (Dialogs.DialogType = {}));
            var DialogType = Dialogs.DialogType;
            var provider;
            function getProvider() {
                if (!provider) {
                    provider = new Dialogs.BootstrapDialogProvider(window.top);
                }
                return provider;
            }
            function alert(message, title) {
                var deferred = $.Deferred();
                getProvider()
                    .Alert(message, title)
                    .done(function (d) { return d
                    .Show()
                    .done(function () { return deferred.resolve(); })
                    .fail(function () { return deferred.reject(); }); })
                    .fail(function () { return deferred.reject(); });
                return deferred;
            }
            Dialogs.alert = alert;
            function confirm(message, title) {
                var deferred = $.Deferred();
                getProvider()
                    .Confirm(message, title)
                    .done(function (d) { return d
                    .Show()
                    .done(function () { return deferred.resolve(true); })
                    .fail(function () { return deferred.reject(); }); })
                    .fail(function () { return deferred.reject(); });
                return deferred;
            }
            Dialogs.confirm = confirm;
            function create(config) {
                var deferred = $.Deferred();
                getProvider()
                    .Create(config)
                    .done(function (d) { return d
                    .Show()
                    .done(function () {
                    var result = config.Done();
                    deferred.resolve(result);
                })
                    .fail(function () { return deferred.reject(); }); })
                    .fail(function () { return deferred.reject(); });
                return deferred;
            }
            Dialogs.create = create;
        })(Dialogs = Crm.Dialogs || (Crm.Dialogs = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));