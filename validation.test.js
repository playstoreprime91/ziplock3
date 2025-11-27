const { validateInputs } = require("./validation")

describe("validateInputs function", () => {
    test("returns true for valid data", () => {
        expect(validateInputs("Alice", 5, 1000, 100)).toBe(true)
    })

    test("returns false for empty name", () => {
        expect(validateInputs("", 5, 1000, 100)).toBe(false)
    })

    test("returns false for name containing numbers", () => {
        expect(validateInputs("Bob123", 5, 1000, 100)).toBe(false)
    })

    test("returns false when level is zero or negative", () => {
        expect(validateInputs("Bob", 0, 100, 10)).toBe(false)
    })

    test("returns false when money is too high", () => {
        expect(validateInputs("Bob", 1, 1000000, 10)).toBe(false)
    })

    test("returns false when health is negative", () => {
        expect(validateInputs("Bob", 1, 100, -1)).toBe(false)
    })
})
