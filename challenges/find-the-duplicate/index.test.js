const findDuplicate = require("./index");

test("Should find the first duplicate value", () => {
  expect(findDuplicate([1,2,3,4,5,3,6,7])).toEqual("The duplicate value is 3");
});

test("Should find no duplicates if there are none", () => {
    expect(findDuplicate([1,2,3,4,5,6,7])).toEqual("There are no duplicate values");
});