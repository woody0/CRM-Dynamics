﻿module Dynamics.Crm.Core {

    "use strict";

    export interface IEntity {
        id?: string;
        type: string;
        attributes: any;
    }

    export interface IAttribute {
        type: string;
        value: any;
    }

    export function parseIdentifier(idStr: string): string {

        if (idStr === undefined || idStr == null) {
            return "";
        }

        return idStr.replace("{", "").replace("}", "").toLowerCase();
    }

    export function identifiersAreEqual(id: string, otherId: string): boolean {

        if (!id || !otherId) {
            return false;
        }

        return parseIdentifier(id) === parseIdentifier(otherId);
    }
}