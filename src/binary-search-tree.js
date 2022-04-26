const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this._root) {
      this._root = newNode;
    } else {
      this._addHelper(this._root, newNode);
    }
  }

  _addHelper(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._addHelper(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._addHelper(node.right, newNode);
      }
    }
  }

  _searchHelper(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node = this._searchHelper(node.left, data);
    } else if (data > node.data) {
      node = this._searchHelper(node.right, data);
    }

    return node;
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    return this._searchHelper(this._root, data);
  }

  remove(data) {
    this._root = this._removeHelper(this._root, data);
  }

  _removeHelper(node, data) {
    debugger;
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeHelper(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeHelper(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }

      const newNode = this.find(this.min(node.right));
      node.data = newNode.data;
      node.right = this._removeHelper(node.right, newNode.data);
    }

    return node;
  }

  min(node = null) {
    let curNode = node || this._root;
    let min = curNode.data;

    while (curNode) {
      if (curNode.left) min = curNode.left.data;
      curNode = curNode.left;
    }

    return min;
  }

  max(node = null) {
    let curNode = node || this._root;
    let max = curNode.data;

    while (curNode) {
      if (curNode.right) max = curNode.right.data;
      curNode = curNode.right;
    }

    return max;
  }
}

module.exports = {
  BinarySearchTree
};