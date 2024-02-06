class Node {
  constructor(val, rightChild = null, leftChild = null, hd = 0) {
    this.val = val;
    this.right = rightChild;
    this.left = leftChild;
    this.hd = hd;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  getBottomView() {
    let map = new Map();
    let currentNode;
    let queue = [this.root];

    while (queue.length > 0) {
      currentNode = queue.shift();
      map.set(currentNode.hd, currentNode.val);

      if (currentNode.left) {
        currentNode.left.hd = currentNode.hd - 1;
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        currentNode.right.hd = currentNode.hd + 1;
        queue.push(currentNode.right);
      }
    }
    // map.prototype.entries() returns an iterator that can be spread into an array
    return [...map.entries()].sort((a, b) => a[0] - b[0]).map((el) => el[1]);
  }
}

module.exports = { Node, Tree };
