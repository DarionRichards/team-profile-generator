const Manager = require("../lib/Manager");

describe("Manager", () => {
    const worker = new Manager({
        name: "Elon",
        id: "1",
        email: "elonhastakeoff@tesla.com",
        officeNumber: "0121 123 456",
    });

    test("should be an instance of Manager", () => {
        expect(worker instanceof Manager).toBe(true);
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

    test("should return the expected office number", () => {
        const expected = worker.officeNumber;
        const actual = worker.getOfficeNumber();

        expect(actual).toEqual(expected);
    });

    test("should return the expected role", () => {
        const expected = "Manager";
        const actual = worker.getRole();

        expect(actual).toEqual(expected);
    });
});