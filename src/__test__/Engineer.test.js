const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const worker = new Engineer({
        name: "Elon",
        id: "1",
        email: "elonhastakeoff@tesla.com",
        github: "TeslaCode",
    });
    test("should be an instance of Employee ", () => {
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

    test("should return the expected github", () => {
        const expected = worker.github;
        const actual = worker.getGithub();

        expect(actual).toEqual(expected);
    });

    test("should return the expected role", () => {
        const expected = "Engineer";
        const actual = worker.getRole();

        expect(actual).toEqual(expected);
    });
});