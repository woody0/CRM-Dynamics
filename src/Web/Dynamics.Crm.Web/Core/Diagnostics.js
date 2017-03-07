var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var Diagnostics;
        (function (Diagnostics) {
            "use strict";
            Diagnostics.debug = true;
            Diagnostics.trace = true;
            var ConsoleLogger = (function () {
                function ConsoleLogger() {
                }
                ConsoleLogger.prototype.Error = function (message, error) {
                    if (Diagnostics.debug) {
                        debugger;
                    }
                    var entry = createLogEntry(message, error);
                    console.error(entry);
                };
                ConsoleLogger.prototype.Message = function (message) {
                    console.log(message);
                };
                ConsoleLogger.prototype.Warning = function (message) {
                    console.warn(message);
                };
                return ConsoleLogger;
            }());
            var LogEntryLogger = (function () {
                function LogEntryLogger() {
                }
                LogEntryLogger.prototype.Error = function (message, error) {
                    if (Diagnostics.debug) {
                        debugger;
                    }
                    var entry = createLogEntry(message, error);
                    console.error(entry);
                    Dynamics.Crm.Data.unitOfWork
                        .GetLogEntryRepository()
                        .Create(entry);
                };
                LogEntryLogger.prototype.Message = function (message) {
                    console.log(message);
                };
                LogEntryLogger.prototype.Warning = function (message) {
                    console.warn(message);
                };
                return LogEntryLogger;
            }());
            // public functions
            function useLogEntryLogger() {
                Diagnostics.log = new LogEntryLogger();
            }
            Diagnostics.useLogEntryLogger = useLogEntryLogger;
            function useConsoleLogger() {
                Diagnostics.log = new ConsoleLogger();
            }
            Diagnostics.useConsoleLogger = useConsoleLogger;
            function printArguments() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                console.log("Function " + arguments[0] + " called with arguments: {");
                for (var i = 1; i < arguments.length; i++) {
                    console.log(arguments[i]);
                }
                console.log("}");
            }
            Diagnostics.printArguments = printArguments;
            // private function
            function createLogEntry(message, error) {
                var entityName = getEntityName();
                var source = ("JavaScript::{entityName}")
                    .replace("{entityName}", entityName);
                var description = ("Stack: {stackTrace}\nDescription: {errorDescription}")
                    .replace("{stackTrace}", error.stack || error.stacktrace || "<none>")
                    .replace("{errorDescription}", error.description || "<none>");
                var entry = {
                    type: Crm.Data.Schema.LogEntryEntity.type
                };
                var name = error.type ? (error.type + ":" + message) : message;
                var msg = message === error.message ? message : (message + error.message);
                entry[Crm.Data.Schema.LogEntryEntity.nameField] = Validation.Strings.left(name, 300);
                entry[Crm.Data.Schema.LogEntryEntity.messageField] = Validation.Strings.left(msg, 5000);
                entry[Crm.Data.Schema.LogEntryEntity.descriptionField] = Validation.Strings.right(description, 1048576);
                entry[Crm.Data.Schema.LogEntryEntity.sourceField] = Validation.Strings.left(source, 500);
                entry[Crm.Data.Schema.LogEntryEntity.typeField] = Dynamics.Crm.Core.LogEntryType.Error;
                return entry;
            }
            function getEntityName() {
                try {
                    return Xrm.Page.data.entity.getEntityName();
                }
                catch (e) {
                    Diagnostics.log && Diagnostics.log.Warning(e);
                    return "UnknownEntity";
                }
            }
            // variables
            useLogEntryLogger();
        })(Diagnostics = Crm.Diagnostics || (Crm.Diagnostics = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));
