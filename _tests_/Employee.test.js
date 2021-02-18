const Employee = require("../lib/Employee");

describe('Employee', () => {
    test("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });
    
    test("Can set name with constructor params", () => {
        const name = "Alice";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });
    
    test("Can set id with constructor param", () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });
});
