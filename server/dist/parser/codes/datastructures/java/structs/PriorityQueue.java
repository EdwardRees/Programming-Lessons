package structs;

import java.util.Arrays;
import java.util.Comparator;

class QueueNode<T> implements Comparable<QueueNode<T>> {
  private int priority;
  private T value;

  public QueueNode(int priority, T value) {
    this.priority = priority;
    this.value = value;
  }

  public String toString() {
    return String.format("Priority: %d, Value: %s", this.priority, this.value);
  }

  public T getValue() {
    return this.value;
  }

  public int getPriority() {
    return this.priority;
  }

  public void updatePriority(int priority) {
    this.priority = priority;
  }

  public int compareTo(QueueNode<T> o) {
    return priority > o.getPriority() ? 1 : priority == o.getPriority() ? 0 : -1;
  }
}

public class PriorityQueue<T> {
  private QueueNode[] queue;
  private int bottom;
  private boolean maxQueue;
  private int index;
  private int limit;

  public PriorityQueue(boolean maxQueue) {
    this.maxQueue = maxQueue;
    this.limit = 20;
    this.queue = new QueueNode[this.limit];
    this.bottom = 0;
    this.index = 0;
  }

  public PriorityQueue() {
    this(true);
  }

  private void swap(int i, int j) {
    QueueNode<T> val = this.queue[i];
    this.queue[i] = this.queue[j];
    this.queue[j] = val;
  }

  private void maxSort() {
    for (int i = 0; i < this.queue.length; i++) {
      for (int j = i; j < this.queue.length - 1; j++) {
        if (this.queue[j] == null) {
          continue;
        }
        if (this.queue[i].compareTo(this.queue[j]) == 1) {
          swap(i, j);
        }
      }
    }
  }

  private void minSort() {
    for (int i = 0; i < this.queue.length; i++) {
      for (int j = i; j < this.queue.length - 1; j++) {
        if (this.queue[j] == null) {
          continue;
        }
        if (this.queue[i].compareTo(this.queue[j]) == -1) {
          swap(i, j);
        }
      }
    }
  }

  private void sort() {
    if (this.maxQueue) {
      maxSort();
    } else {
      minSort();
    }
  }

  private void expand() {
    QueueNode<T>[] newQueue = new QueueNode[this.limit * 2];
    for (int i = 0; i < this.queue.length; i++) {
      newQueue[i] = queue[i];
    }
    this.limit *= 2;
    this.queue = newQueue;
  }

  public void insert(T value, int priority) {
    if (this.index + 1 == this.limit - 1) {
      expand();
    }
    this.queue[this.index++] = new QueueNode<T>(priority, value);
    sort();
  }

  public void insert(T value) {
    this.insert(value, this.bottom++);
  }

  public void printAll() {
    System.out.println("i: value");
    for (int i = 0; i < this.queue.length; i++) {
      if (this.queue[i] == null) {
        continue;
      }
      System.out.printf("%d: %s%n", i, this.queue[i]);
    }
  }

  public static void main(String[] args) {
    PriorityQueue<Integer> q = new PriorityQueue<Integer>();
    for(int i=0; i<22; i++){
      q.insert(i + 5);
    }
    q.insert(0, 0);
    q.insert(50, 50);
    q.printAll();
  }

}