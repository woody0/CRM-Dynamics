﻿module Dynamics.Crm.Tasks {

    "use strict";

    export interface ITasksConfig {
        continueOnError?: boolean;
        executeAll?: boolean;
    }

    export function execute(tasks: (() => boolean)[], config: ITasksConfig = {}): any[] {

        if (Diagnostics.trace) {
            Diagnostics.printArguments("Tasks.execute", tasks, config);
        }

        var results: any[] = [];

        if (!Array.isArray(tasks)) {

            Diagnostics.log.Warning("Tasks.execute: Invalid argument. An array was expected.");

        } else {

            for (var i: number = 0; i < tasks.length; i++) {

                var task: () => boolean = tasks[i];

                try {

                    var result: boolean = task();
                    
                    results.push(result);

                    if (!config.executeAll && !!result) {
                        return results;
                    }

                } catch (e) {

                    Diagnostics.log.Error(
                        `Tasks.execute: An error has occurred in ${typeof task} ${getTaskName(task)}`.trim(), e);

                    results.push(e);

                    if (!config.continueOnError) {
                        return results;
                    }                   
                }
            }
        }

        return results;
    }

    function getTaskName(task: () => boolean): string {

        if (typeof task !== "function") {
            return "";
        }

        var result = /^function\s+([\w\$]+)\s*\(/.exec(task.toString());

        return result ? result[1] : "";
    }
}