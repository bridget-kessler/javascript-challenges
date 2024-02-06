const { Node, Tree } = require("./index");

test("Should return [0, 1, 3, 6, 8, 9]", () => {
  const root = new Node(5);
  root.left = new Node(3);
  root.left.left = new Node(1);
  root.left.left.left = new Node(0);
  root.left.right = new Node(4);
  root.right = new Node(7);
  root.right.left = new Node(6);
  root.right.right = new Node(9);
  root.right.right.left = new Node(8);
  const tree = new Tree(root);

  expect(tree.getBottomView()).toEqual([0, 1, 3, 6, 8, 9]);
});

test("Should return [8, 4, 9, 5, 3, 7]", () => {
  const root = new Node(1);
  root.left = new Node(2);
  root.left.left = new Node(4);
  root.left.left.left = new Node(8);
  root.left.right = new Node(5);
  root.left.left.right = new Node(9);
  root.right = new Node(3);
  root.right.right = new Node(7);
  const tree = new Tree(root);

  expect(tree.getBottomView()).toEqual([8, 4, 9, 5, 3, 7]);
});