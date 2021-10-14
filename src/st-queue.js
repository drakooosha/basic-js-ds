const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(){
    this.list = null; 
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    let newNode = new ListNode(value);

    if(this.list == null) {
      this.list = newNode;
    }
    else {
      this.addNode(this.list,newNode);
    }
  }

  addNode(node,newNode) {
    if(node.next == null) {
      node.next = newNode;
    }
    else {
      this.addNode(node.next,newNode);
    }
  }

  dequeue() {
    let result = this.list.value;
    this.list = this.list.next;
    return result;
  }

}

ListNode = function (x) {
  this.value = x;
  this.next = null;
}
