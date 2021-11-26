const Employee = require("../lib/Employee");

describe("Employee", () => {
    const worker = new Employee({
        name: "Elon",
        id: "1",
        email: "elonhastakeoff@tesla.com",
    });

    test("should be an instance of Employee", () => {
        expect(worker instanceof Employee).toBe(true);
    });

    test("should return the expected name", () => {
        const expected = worker.name;
        const actual = worker.getName();

        expect(actual).toEqual(expected);
    });

    test("should return the expected id", () => {
        const expected = worker.id;
        const actual = worker.getId();

        expect(actual).toEqual(expected);
    });

    test("should return the expected email", () => {
        const expected = worker.email;
        const actual = worker.getEmail();

        expect(actual).toEqual(expected);
    });

    test("should return the expected role", () => {
        const expected = "Employee";
        const actual = worker.getRole();

        expect(actual).toEqual(expected);
    });
});