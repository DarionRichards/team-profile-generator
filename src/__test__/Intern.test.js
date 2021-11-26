const Intern = require("../lib/Intern");

describe("Intern", () => {
    const worker = new Intern({
        name: "Elon",
        id: "1",
        email: "elonhastakeoff@tesla.com",
        school: "Ad Astra",
    });

    test("should be an instance of Intern ", () => {
        expect(worker instanceof Intern).toBe(true);
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
    test("should return the expected school", () => {
        const expected = worker.school;
        const actual = worker.getSchool();

        expect(actual).toEqual(expected);
    });
});