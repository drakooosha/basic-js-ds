const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor(){
    this.root1 = null;
  }

  root() {
    return this.root1;
  }

  add(data) {
    let newNode = new Node(data);

    if(this.root1 == null) {
      this.root1 = newNode;
    }
    else {
      this.insetNode(this.root1, newNode);
    } 
  }

  insetNode(node,newNode) {
    if(node.data > newNode.data) {
      if(node.left == null) {
        node.left = newNode;
      }
      else {
        this.insetNode(node.left,newNode)
      }
    }
    else {
      if(node.right == null) {
        node.right = newNode;
      }
      else {
        this.insetNode(node.right,newNode);
      }
    }
  }

  has(data) {
    if(this.root1.data == data) {
      return true;
    }
    else{
      return this.hasNode(this.root1,data)
    }
  }

  hasNode(node,data) {
    if(node.data > data) {
      if(node.left == null) {
        return false;
      }
      if(node.left.data == data) {
        return true;
      }
      else {
        return this.hasNode(node.left,data);
      }
    }
    else {
      if(node.right == null) {
        return false;
      }
      if(node.right.data == data) {
        return true;
      }
      else {
        return this.hasNode(node.right, data);
      }
    }
  }

  find(data) {
    if(this.root1.data == data) {
      return this.root1;
    }
    else {
      return this.nodeFind(this.root1,data);
    }
  }

  nodeFind(node,data) {
    if(node.data > data) {
      if(node.left == null) {
        return null;
      }
      if(node.left.data == data) {
        return node.left;
      }
      else {
        return this.nodeFind(node.left,data);
      }
    }
    else {
      if(node.right == null) {
        return null;
      }
      if(node.right.data == data) {
        return node.right;
      }
      else {
        return this.nodeFind(node.right, data);
      }
    }
  }

  remove(data) {
    this.root1 = this.removeNode(this.root1,data);
  }

  removeNode(node,data) {
    if(node == null) {
      return null;
    }
    else{
      if(node.data > data) {
        node.left = this.removeNode(node.left, data);
        return node;
      }
      else {
        if(node.data < data) {
          node.right = this.removeNode(node.right, data);
          return node;
        }
        else {
          if(node.left == null && node.right == null) {
            node = null;
            return node;  
          }

          if(node.left == null) {
            node = node.right;
            return node;
          }

          if(node.right == null) {
            node = node.left;
            return node;
          }

          let aux = this.findMinNode(node.right);
          node.data = aux.data;

          node.right = this.removeNode(node.right, aux.data);
          return node;
        }
      }
    }
  }

  findMinNode(node){
    if(node.left == null) {
      return node;
    }
    else{
      return this.findMinNode(node.left);
    }
  }

  min() {
    if(this.root1.data == null) {
      return null;
    }
    else {
      return this.findMin(this.root1);
    }
  }

  findMin(node) {
    if(node.left == null) {
      return node.data;
    }
    else {
      return this.findMin(node.left);
    }
  }

  max() {
    if(this.root1.data == null) {
      return null;
    }
    else {
      return this.findMax(this.root1);
    }
  }

  findMax(node) {
    if(node.right == null) {
      return node.data;
    }
    else{
      return this.findMax(node.right);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}