# Find the Bottom View of a BST

## The Challenge
From [Daily Coding Problem](https://www.dailycodingproblem.com/)

The horizontal distance of a binary tree node describes how far left or right the node will be when the tree is printed out.

More rigorously, we can define it as follows:
	•	The horizontal distance of the root is 0.
	•	The horizontal distance of a left child is hd(parent) - 1.
	•	The horizontal distance of a right child is hd(parent) + 1.

For example, for the following tree, hd(1) = -2, and hd(6) = 0.
```
             5
          /     \
        3         7
      /  \      /   \
    1     4    6     9
   /                /
  0                8
```
The bottom view of a tree, then, consists of the lowest node at each horizontal distance. If there are two nodes at the same depth and horizontal distance, either is acceptable.
For this tree, for example, the bottom view could be `[0, 1, 3, 6, 8, 9]`.
Given the root to a binary tree, return its bottom view.

## Thought Process
Using breadth-first traversal of the tree, we can calculate the horizontal distance of each node and know that any successive nodes are guaranteed to have a lower depth in the tree. Values of each node can be stored in a map and overwritten when necessary.