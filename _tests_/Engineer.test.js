const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    test("Can instantiate Engineer instance", () => {
        const e = new Engineer();
        expect(typeof(e)).toBe("object");
    });
    
    test("Can set name with constructor params", () => {
        const name = "Lizzy";
        const e = new Engineer(name);
        expect(e.name).toBe(name);
    });
    
    test("Can set id with constructor param", () => {
        const testValue = 100;
        const e = new Engineer("Foo", testValue);
        expect(e.id).toBe(testValue);
    });
});