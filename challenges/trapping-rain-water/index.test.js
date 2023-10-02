const trap = require('./index');

test("Trap function should always return a number.", () => {
    expect(typeof trap()).toBe('number');
});

test("Trap function shouldn't fail if input is empty array.", () => {
    expect(trap([])).toBe(0);
});

test("Trap should return 9.", () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
});

test("Trap should return 6.", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
});

test("Trap should return 0 if array is buffered by zeroes.", () => {
    expect(trap([0, 0, 0, 5, 5, 0])).toBe(0);
});

test("Trap should return 0 if array contains only negative integers.", () => {
    expect(trap([-10, -40, -2])).toBe(0);
});

test("Trap shouldn't fail if array contains both positive and negative integers", () => {
    expect(trap([5, 3, 0, -40, 2, 10, -10, 0])).toBe(15);
});