const { Tree } = require("./index");

let tree;

// Tree is mutable because beforeAll only runs once
beforeAll(() => {
  tree = new Tree([30, 25, 15, 27, 40]);
});

test("Should return true", () => {
  expect(tree.isBalanced()).toBe(true);
});

test("Should return 0", () => {
  expect(tree.depth()).toBe(0);
});
test("Should return 3", () => {
  expect(tree.height()).toBe(3);
});
test("Preorder method should return [27,25,15,40,30]", () => {
  expect(tree.preorder()).toEqual([27, 25, 15, 40, 30]);
});
test("Postorder method should return [15,25,30,40,27]", () => {
  expect(tree.postorder()).toEqual([15, 25, 30, 40, 27]);
});
test("Inorder method should return [15,25,27,30,40]", () => {
  expect(tree.inorder()).toEqual([15, 25, 27, 30, 40]);
});

test("isBalanced should return false", () => {
  tree.insert(100);
  tree.insert(101);
  tree.insert(102);
  tree.insert(2000);
  expect(tree.isBalanced()).toBe(false);
});

test("isBalanced should return true", () => {
  tree.reBalance();

  expect(tree.isBalanced()).toBe(true);
});

test("Values cannot be inserted more than once", () => {
  tree.insert(2000)
  expect(tree.inorder()).toEqual([15,25,27,30,40,100,101,102,2000]);
});
