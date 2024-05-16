class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert last node
  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data, this.head);
    }
    else {
      let current = this.head
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.size++;
  }

  // print all data
  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // insert at index
  insertAtIndex(data, index) {
    if (index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current = this.head;
    let previous;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = node;
    node.next = current;

    this.size++;
  }

  //  get at index
  getAtIndex(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(`Value at index ${index} : ${current.data}`)
      }
      current = current.next;
      count++;
    }
  }

  // remove at index
  removeAtIndex(index) {
    if (index < this.size) {
      let current = this.head;
      let previous;
      let count = 0;

      if (index === 0) {
        this.head = current.next;
      }
      else {
        while (count < index) {
          previous = current;
          current = current.next;
          count++;
        }
        previous.next = current.next;
      }

      this.size--;
    }

  }

  // clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new LinkedList();
ll.insertLast(300);
ll.insertFirst(100);
ll.insertFirst(400);
ll.insertAtIndex(200, 1);
ll.getAtIndex(2);
ll.removeAtIndex(1);
ll.clearList();

console.log(ll);
ll.printData();