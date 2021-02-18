const Intern = require("../lib/Intern");

describe('Intern', () => {
    test("Can instantiate Intern instance", () => {
        const e = new Intern();
        expect(typeof(e)).toBe("object");
    });
    
    test("Can set name with constructor params", () => {
        const name = "Sam";
        const e = new Intern(name);
        expect(e.name).toBe(name);
    });
    
    test("Can set id with constructor param", () => {
        const testValue = 100;
        const e = new Intern("Foo", testValue);
        expect(e.id).toBe(testValue);
    });
});