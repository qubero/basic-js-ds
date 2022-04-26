const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor() {
    this._front = null;
    this._rear = null;
  }

  getUnderlyingList() {
    return this._front;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this._front) {
      this._front = this._rear = node;
    } else {
      this._rear.next = node;
      this._rear = node;
    }
  }

  dequeue() {
    const value = this._front.value;
    this._front = this._front.next;

    return value;
  }
}

module.exports = {
  Queue
};
