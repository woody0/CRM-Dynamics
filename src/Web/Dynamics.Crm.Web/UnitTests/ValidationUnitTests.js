var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var UnitTests;
        (function (UnitTests) {
            "use strict";
            describe("Validation.ensureNotNullOrUndefined", function () {
                it("Throws error for undefined argument", function () {
                    expect(function () { return Validation.ensureNotNullOrUndefined(undefined, undefined); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrUndefined(undefined, null); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrUndefined(undefined, ""); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrUndefined(undefined, "abc"); }).toThrowError(Error);
                });
                it("Throws error for null argument", function () {
                    expect(function () { return Validation.ensureNotNullOrUndefined(null, undefined); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrUndefined(null, null); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrUndefined(null, ""); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrUndefined(null, "abc"); }).toThrowError(Error);
                });
                it("Passes validation for non null or undefined values", function () {
                    expect(function () { return Validation.ensureNotNullOrUndefined("", undefined); }).not.toThrowError();
                    expect(function () { return Validation.ensureNotNullOrUndefined(0, null); }).not.toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrUndefined(new Date(), ""); }).not.toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrUndefined([], "abc"); }).not.toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrUndefined({}, "abc"); }).not.toThrowError(Error);
                });
            });
            describe("Validation.ensureNotNullOrEmpty", function () {
                it("Throws error for undefined argument", function () {
                    expect(function () { return Validation.ensureNotNullOrEmpty(undefined, undefined); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrEmpty(undefined, null); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrEmpty(undefined, ""); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrEmpty(undefined, "abc"); }).toThrowError(Error);
                });
                it("Throws error for null argument", function () {
                    expect(function () { return Validation.ensureNotNullOrEmpty(null, undefined); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrEmpty(null, null); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrEmpty(null, ""); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrEmpty(null, "abc"); }).toThrowError(Error);
                });
                it("Throws error for empty string argument", function () {
                    expect(function () { return Validation.ensureNotNullOrEmpty("", undefined); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrEmpty("", null); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrEmpty("", ""); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNotNullOrEmpty("", "abc"); }).toThrowError(Error);
                });
                it("Passes validation for non null or empty string values", function () {
                    expect(function () { return Validation.ensureNotNullOrEmpty("x", undefined); }).not.toThrowError();
                    expect(function () { return Validation.ensureNotNullOrEmpty("xyz", null); }).not.toThrowError();
                    expect(function () { return Validation.ensureNotNullOrEmpty("xyz", ""); }).not.toThrowError();
                    expect(function () { return Validation.ensureNotNullOrEmpty("xyz", "abc"); }).not.toThrowError();
                });
            });
            describe("Validation.ensureNumberInRange", function () {
                it("Throws error for undefined value", function () {
                    expect(function () { return Validation.ensureNumberInRange(undefined); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNumberInRange(undefined, 1); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNumberInRange(undefined, null, 1); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNumberInRange(undefined, 1, 1); }).toThrowError(Error);
                });
                it("Throws error for null value", function () {
                    expect(function () { return Validation.ensureNumberInRange(null); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNumberInRange(null, 1); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNumberInRange(null, null, 1); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNumberInRange(null, 1, 1); }).toThrowError(Error);
                });
                it("Throws error for non-numeric value", function () {
                    var func = Validation.ensureNumberInRange;
                    expect(function () { return func({}); }).toThrowError(Error);
                    expect(function () { return func("", 1); }).toThrowError(Error);
                    expect(function () { return func([], null, 1); }).toThrowError(Error);
                });
                it("Throws error for out of range numeric value", function () {
                    expect(function () { return Validation.ensureNumberInRange(0, 1); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNumberInRange(0, null, -1); }).toThrowError(Error);
                    expect(function () { return Validation.ensureNumberInRange(0, 1, 2); }).toThrowError(Error);
                });
                it("Passes validation for in range numeric value", function () {
                    expect(function () { return Validation.ensureNumberInRange(1.5, 1, 2); }).not.toThrowError(Error);
                    expect(function () { return Validation.ensureNumberInRange(0, -1, 1); }).not.toThrowError(Error);
                });
            });
            describe("Validation.Strings.left", function () {
                it("Does not throw error for null or undefined value", function () {
                    expect(function () { return Validation.Strings.left(undefined, 5); }).not.toThrowError(Error);
                    expect(function () { return Validation.Strings.left(null, 5); }).not.toThrowError(Error);
                });
                it("Returns specified number of chars from left side", function () {
                    expect(Validation.Strings.left("", 0)).toEqual("");
                    expect(Validation.Strings.left("", 5)).toEqual("");
                    expect(Validation.Strings.left("abc", 0)).toEqual("");
                    expect(Validation.Strings.left("abc", 1)).toEqual("a");
                    expect(Validation.Strings.left("abc", 2)).toEqual("ab");
                    expect(Validation.Strings.left("abc", 3)).toEqual("abc");
                    expect(Validation.Strings.left("abc", 5)).toEqual("abc");
                });
            });
            describe("Validation.Strings.right", function () {
                it("Does not throw error for null or undefined value", function () {
                    expect(function () { return Validation.Strings.right(undefined, 5); }).not.toThrowError(Error);
                    expect(function () { return Validation.Strings.right(null, 5); }).not.toThrowError(Error);
                });
                it("Returns specified number of chars from right side", function () {
                    expect(Validation.Strings.right("", 0)).toEqual("");
                    expect(Validation.Strings.right("", 5)).toEqual("");
                    expect(Validation.Strings.right("abc", 0)).toEqual("");
                    expect(Validation.Strings.right("abc", 1)).toEqual("c");
                    expect(Validation.Strings.right("abc", 2)).toEqual("bc");
                    expect(Validation.Strings.right("abc", 3)).toEqual("abc");
                    expect(Validation.Strings.right("abc", 5)).toEqual("abc");
                });
            });
        })(UnitTests = Crm.UnitTests || (Crm.UnitTests = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));
