class Tree {
    constructor(array){
        this.root = this.buildTree(array);
    }

    buildTree(arr){
        // Array must be sorted and contain no duplicate values
        const sorted = Array.from(new Set(arr.sort((a, b) => a - b)));
        if(sorted.length === 0) return null;
        
        let mid = Math.ceil((sorted.length - 1) / 2);
        let left = sorted.slice(0, mid); 
        let right = sorted.slice((mid + 1));

        let root = new Node(sorted[mid], this.buildTree(left), this.buildTree(right));
        return root;
    }

    insert(value){
        // TODO Check for duplicate value in the tree before inserting
        let curr = this.root;
        while (curr.value != value){
            if(curr.value > value) {
                if (curr.leftChild == null ) {
                    curr.leftChild = new Node(value);
                }
                curr = curr.leftChild;

            } 
            else {
                if (curr.rightChild == null ) {
                    curr.rightChild = new Node(value);
                }
                curr = curr.rightChild;
            }
        }
    }
    
    delete(value) {
        let curr = this.root;
        let prev = null;

        // Find the node to delete
        while (curr && curr.value != value){
            if(curr.value > value) {
                prev = curr;
                curr = curr.leftChild;
            } 
            else {
                prev = curr;
                curr = curr.rightChild;
            }
        }
        if (!curr){
            return;
        }
        
        // There are three cases
        // Case One: The node to be deleted has no children
        if (!curr.leftChild && !curr.rightChild) {
            curr.value === prev.leftChild.value ? prev.leftChild = null : prev.rightChild = null;
        }
        // Case Two: The node to be deleted has exactly one child
        else if (curr.leftChild && !curr.rightChild) {
            curr.value === prev.leftChild.value ? prev.leftChild = curr.leftChild : prev.rightChild = curr.leftChild
        }
        else if (!curr.leftChild && curr.rightChild) {
            curr.value === prev.leftChild.value ? prev.leftChild = curr.rightChild : prev.rightChild = curr.rightChild
        }
        // Case Three: The node to be deleted has two children
        else if (curr.leftChild && curr.rightChild) {
            let nextLargestNode = curr.rightChild;
            let prev = curr;

            while (nextLargestNode.leftChild) {
                prev = nextLargestNode;
                nextLargestNode = nextLargestNode.leftChild;
            }
            curr.value = nextLargestNode.value;
            
            if (prev === curr) {
                nextLargestNode.rightChild ? prev.rightChild = nextLargestNode.rightChild : prev.rightChild = null;
            }
            else {
                nextLargestNode.rightChild ? prev.leftChild = nextLargestNode.rightChild : prev.leftChild = null;
            }
        }
        
    }

    find(value) {
        let node = this.root;
        while (node && node.value != value) {
            node.value > value ? node = node.leftChild : node = node.rightChild;
        }
        return node;
    }

    levelOrder(callback) {
        
        let queue = [this.root];
        let list = [];

        while (queue.length > 0) {
            const node = queue.shift();
            callback ? callback(node) : list.push(node.value);

            if (node.leftChild) queue.push(node.leftChild);
            if (node.rightChild) queue.push(node.rightChild);
        }
        
       if (!callback) return list;

    }
    inorder(callback, node = this.root, list = []) {
        if (node == null) return;

        this.inorder(callback, node.leftChild, list);
        callback ? callback(node) : list.push(node.value);
        this.inorder(callback, node.rightChild, list);

        return list;
    }

    preorder(callback, node = this.root, list = []) {
        if (node == null) return;
        
        callback ? callback(node) : list.push(node.value);
        this.preorder(callback, node.leftChild, list);
        this.preorder(callback, node.rightChild, list);

        return list
    }

    postorder(callback, node = this.root, list = []) {
        if (node == null) return;
        
        this.postorder(callback, node.leftChild, list);
        this.postorder(callback, node.rightChild, list)
        callback ? callback(node) : list.push(node.value);

        return list;
    }

    height(node = this.root) {
        if(node == null) return -1;
    
        const left = this.height(node.leftChild);
        const right = this.height(node.rightChild);
    
        return Math.max(left, right) + 1;
    }

    depth(node = this.root) {
        let curr = this.root;
        let depth = 0;

        // Find the node to delete
        while (curr && curr.value != node.value){
            if(curr.value > node.value) {
                depth++;
                curr = curr.leftChild;
            } 
            else {
                depth++;
                curr = curr.rightChild;
            }
        }
        return !curr ? null : depth;
    }

    isBalanced(node = this.root) {
        if(node == null) return 0;
    
        const left = this.isBalanced(node.leftChild);
        const right = this.isBalanced(node.rightChild);

        if (left == -1 || right == -1) {
            return -1;
        } else if (node == this.root) {
            return true;
        } 
        return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;        
    }

    reBalance() {
        // Inorder traversal will by definition always be sorted
        const sortedArray = this.inorder();
        this.root = this.buildTree(sortedArray);       
    }
}

class Node {
    constructor(value, leftChild = null, rightChild = null){
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }
}


/* Tests */ 

let tree = new Tree([30,25,15,27,40]);
console.log(tree.isBalanced()); // True
console.log(tree.depth(tree.root)); // 0
console.log(tree.height(tree.root)); // 3
tree.inorder((node) => {
    console.log({
        node,
        height: tree.height(node),
        depth: tree.depth(node)})
}); // 
console.log(tree.preorder()); // [27,25,15,40,30] 
console.log(tree.postorder()); // [15,25,30,40,27]
console.log(tree.inorder()); // [15,25,27,30,40]
tree.insert(100);
tree.insert(101);
tree.insert(102);
tree.insert(2000);
console.log(tree.isBalanced()); // -1
tree.reBalance();
console.log(tree.isBalanced()); // True
console.log(tree.preorder()); // [40,27,25,15,30,102,101,100,2000]
console.log(tree.postorder()); // [15,25,30,27,100,101,2000,102,40]
console.log(tree.inorder()); // [15,25,27,30,40,100,101,102,2000]