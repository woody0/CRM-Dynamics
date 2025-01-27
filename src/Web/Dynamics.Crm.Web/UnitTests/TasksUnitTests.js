var Dynamics;
(function (Dynamics) {
    var Crm;
    (function (Crm) {
        var UnitTests;
        (function (UnitTests) {
            "use strict";
            describe("Tasks.execute", () => {
                it("Returns empty array with null tasks", () => {
                    let page = new UnitTests.Mocks.PageMock();
                    let forms = new Crm.Forms(page);
                    let results = forms.tasks.execute(null);
                    expect(results).not.toBeNull();
                    expect(results.length).toEqual(0);
                });
                it("Returns empty array with undefined tasks", () => {
                    let page = new UnitTests.Mocks.PageMock();
                    let forms = new Crm.Forms(page);
                    let results = forms.tasks.execute(undefined);
                    expect(results).not.toBeNull();
                    expect(results.length).toEqual(0);
                });
                it("Force execute on all tasks", () => {
                    let page = new UnitTests.Mocks.PageMock();
                    let forms = new Crm.Forms(page);
                    let counter = 0;
                    let tasks = [
                        () => { counter++; return false; },
                        () => { counter++; },
                        () => { counter++; return true; },
                        () => { counter++; throw new Error("Dummy error"); },
                        () => { counter++; return false; }
                    ];
                    let results = forms.tasks.execute(tasks, { executeAll: true, continueOnError: true });
                    expect(results).not.toBeNull();
                    expect(results.length).toEqual(tasks.length);
                    expect(counter).toEqual(tasks.length);
                });
                it("Stops on third tasks", () => {
                    let page = new UnitTests.Mocks.PageMock();
                    let forms = new Crm.Forms(page);
                    let counter = 0;
                    let tasks = [
                        () => { counter++; return false; },
                        () => { counter++; },
                        () => { counter++; return true; },
                        () => { counter++; return false; }
                    ];
                    let results = forms.tasks.execute(tasks);
                    expect(results).not.toBeNull();
                    expect(results.length).toEqual(3);
                    expect(counter).toEqual(3);
                });
                it("Stops on first error", () => {
                    let page = new UnitTests.Mocks.PageMock();
                    let forms = new Crm.Forms(page);
                    let counter = 0;
                    let tasks = [
                        () => { counter++; return false; },
                        () => { counter++; throw new Error("Dummy error"); },
                        () => { counter++; return false; }
                    ];
                    let results = forms.tasks.execute(tasks);
                    expect(results).not.toBeNull();
                    expect(results.length).toEqual(2);
                    expect(counter).toEqual(2);
                });
            });
        })(UnitTests = Crm.UnitTests || (Crm.UnitTests = {}));
    })(Crm = Dynamics.Crm || (Dynamics.Crm = {}));
})(Dynamics || (Dynamics = {}));
