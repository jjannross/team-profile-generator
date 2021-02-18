const Manager = require("../lib/Manager");

describe('Manager', () => {
    test("Can instantiate Manager instance", () => {
        const e = new Manager();
        expect(typeof(e)).toBe("object");
    });
    
    test("Can set name with constructor params", () => {
        const name = "Valerie";
        const e = new Manager(name);
        expect(e.name).toBe(name);
    });
    
    test("Can set id with constructor param", () => {
        const testValue = 100;
        const e = new Manager("Foo", testValue);
        expect(e.id).toBe(testValue);
    });
});