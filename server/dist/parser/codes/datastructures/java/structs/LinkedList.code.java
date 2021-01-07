package structs;

import java.util.Collection;

/**
 * Single Linked List
 * 
 * @param <T> Type parameter
 */
// start: LinkedList Structure
public class LinkedList<T> implements List<T> {

  // start: Node Definition
  class Node<T> {
    // start: Node Field Variables
    private Node<T> next;
    private T data;
    // end: Node Field Variables

    // start: Node Constructor
    public Node(T data) {
      this.data = data;
      this.next = null;
    }
    // end: Node Constructor

    public void setNext(Node<T> next) {
      this.next = next;
    }

    public Node<T> getNext() {
      return this.next;
    }

    public T getData() {
      return this.data;
    }
  }
  // end: Node Definition

  // start: LinkedList head
  private Node<T> head;
  // end: LinkedList head

  public LinkedList() {
    this.head = null;
  }

  public void add(T e) {
    add(new Node<T>(e));
  }

  private void add(Node<T> node) {
    if (head == null) {
      this.head = node;
    } else {
      Node<T> temp = head;
      while (temp.getNext() != null) {
        temp = temp.getNext();
      }
      temp.setNext(node);
    }
  }

  public boolean isEmpty() {
    return head == null;
  }

  public boolean contains(T e) {
    if (isEmpty()) {
      return false;
    }
    if (this.head.getData().equals(e)) {
      return true;
    }
    Node<T> temp = this.head;
    while (temp.getNext() != null) {
      if (temp.getData().equals(e)) {
        return true;
      }
      temp = temp.getNext();
    }
    return false;
  }

  public void addAll(Collection<? extends T> c) {
    for (T value : c) {
      add(value);
    }
  }

  public int size() {
    int i = 0;
    Node<T> temp = head;
    while (temp != null) {
      i++;
      temp = temp.getNext();
    }
    return i;
  }

  public T get(int index) throws IndexOutOfBoundsException {
    if (index > size() || index < 0 || isEmpty()) {
      throw new IndexOutOfBoundsException();
    }
    Node<T> temp = head;
    int count = 0;
    while (temp.getNext() != null && count++ != index) {
      temp = temp.getNext();
    }
    return temp.getData();
  }

  public T remove(int index) throws IndexOutOfBoundsException {
    if (index > size() || index < 0 || isEmpty()) {
      throw new IndexOutOfBoundsException();
    }
    if (index == 0) {
      if (head.getNext() != null) {
        Node<T> next = head.getNext();
        head = null;
        head = next;
        return head.getData();
      }
      Node<T> temp = head;
      head = null;
      return temp.getData();
    }

    int count = 0;
    Node<T> temp = head;
    while (count + 1 != index && temp.getNext().getNext() != null) {
      temp = temp.getNext();
      count++;
    }
    Node<T> next = temp.getNext();
    temp.setNext(null);
    temp.setNext(next.getNext());
    return next.getData();
  }

  public void clear() {
    while (!isEmpty()) {
      remove(size() - 1);
    }
  }

  @Override
  public String toString() {
    StringBuilder str = new StringBuilder();
    str.append("List:\t");
    Node<T> temp = this.head;
    while (temp != null) {
      str.append(String.format("%s ", temp.getData()));
      temp = temp.getNext();
    }
    return str.toString();
  }
}
// end: LinkedList Structure