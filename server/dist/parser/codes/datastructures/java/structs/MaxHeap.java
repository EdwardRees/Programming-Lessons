package structs;

class HeapNode<T> implements Comparable<HeapNode<T>> {
  private T data;
  private int priority;

  public HeapNode(int priority) {
    this(priority, null);
  }

  public HeapNode(int priority, T data) {
    this.data = data;
    this.priority = priority;
  }

  public int getPriority() {
    return this.priority;
  }

  public void setPriority(int priority) {
    this.priority = priority;
  }

  public T getData() {
    return this.data;
  }

  public void setData(T data) {
    this.data = data;
  }

  @Override
  public int compareTo(HeapNode<T> o) {
    return this.priority > o.getPriority() ? 1 : this.priority < o.getPriority() ? -1 : 0;
  }

  @Override
  public String toString() {
    return String.format("Priority: %d, Data: %s", priority, data);
  }
}

/**
 * Pulled from https://www.geeksforgeeks.org/max-heap-in-java/
 */
public class MaxHeap<T> {
  private HeapNode<T>[] Heap;
  private int size;
  private int maxsize;

  // Constructor to initialize an
  // empty max heap with given maximum
  // capacity.
  public MaxHeap(int maxsize) {
    this.maxsize = maxsize;
    this.size = 0;
    Heap = new HeapNode[this.maxsize + 1];
    Heap[0] = new HeapNode<T>(Integer.MAX_VALUE);
  }

  // Returns position of parent
  private int parent(int pos) {
    return pos / 2;
  }

  // Below two functions return left and
  // right children.
  private int leftChild(int pos) {
    return (2 * pos);
  }

  private int rightChild(int pos) {
    return (2 * pos) + 1;
  }

  // Returns true of given node is leaf
  private boolean isLeaf(int pos) {
    if (pos >= (size / 2) && pos <= size) {
      return true;
    }
    return false;
  }

  private void swap(int fpos, int spos) {
    HeapNode<T> tmp;
    tmp = Heap[fpos];
    Heap[fpos] = Heap[spos];
    Heap[spos] = tmp;
  }

  // A recursive function to max heapify the given
  // subtree. This function assumes that the left and
  // right subtrees are already heapified, we only need
  // to fix the root.
  private void maxHeapify(int pos) {
    if (isLeaf(pos))
      return;

    if (Heap[pos].compareTo(Heap[leftChild(pos)]) == -1 || Heap[pos].compareTo(Heap[rightChild(pos)]) == -1) {

      if (Heap[leftChild(pos)].compareTo(Heap[rightChild(pos)]) == 1) {
        swap(pos, leftChild(pos));
        maxHeapify(leftChild(pos));
      } else {
        swap(pos, rightChild(pos));
        maxHeapify(rightChild(pos));
      }
    }
  }

  // Inserts a new element to max heap
  public void insert(T element, int priority) {
    Heap[++size] = new HeapNode<T>(priority, element);

    // Traverse up and fix violated property
    int current = size;
    while (Heap[current].compareTo(Heap[parent(current)]) == 1) {
      swap(current, parent(current));
      current = parent(current);
    }
  }

  public void print() {
    for (int i = 1; i <= size / 2; i++) {
      System.out.print(" PARENT : " + Heap[i] + " LEFT CHILD : " + Heap[2 * i] + " RIGHT CHILD :" + Heap[2 * i + 1]);
      System.out.println();
    }
  }

  // Remove an element from max heap
  public HeapNode<T> extractMax() {
    HeapNode<T> popped = Heap[1];
    Heap[1] = Heap[size--];
    maxHeapify(1);
    return popped;
  }

  public static void main(String[] arg) {
    // System.out.println("The Max Heap is ");
    MaxHeap<String> maxHeap = new MaxHeap<>(15);
    maxHeap.insert("Hello", 15);
    maxHeap.insert("World", 3);
    maxHeap.insert("Test", 17);
    maxHeap.insert("Edward", 10);
    maxHeap.insert("Top", 84);
    maxHeap.insert("Information", 19);
    maxHeap.insert("Restaurants", 7);
    maxHeap.insert("Java", 22);
    maxHeap.insert("Window", 9);
    maxHeap.insert("Bottom", 1);

    // maxHeap.print();
    HeapNode<String> max = maxHeap.extractMax();
    System.out.printf("The max val is %s with a priority of %d%n", max.getData(), max.getPriority());
    max = maxHeap.extractMax();
    System.out.printf("The max val is %s with a priority of %d%n", max.getData(), max.getPriority());
    max = maxHeap.extractMax();
    System.out.printf("The max val is %s with a priority of %d%n", max.getData(), max.getPriority());
    max = maxHeap.extractMax();
    System.out.printf("The max val is %s with a priority of %d%n", max.getData(), max.getPriority());
    max = maxHeap.extractMax();
    System.out.printf("The max val is %s with a priority of %d%n", max.getData(), max.getPriority());
    max = maxHeap.extractMax();
    System.out.printf("The max val is %s with a priority of %d%n", max.getData(), max.getPriority());
    max = maxHeap.extractMax();
    System.out.printf("The max val is %s with a priority of %d%n", max.getData(), max.getPriority());
    max = maxHeap.extractMax();
    System.out.printf("The max val is %s with a priority of %d%n", max.getData(), max.getPriority());
    max = maxHeap.extractMax();
    System.out.printf("The max val is %s with a priority of %d%n", max.getData(), max.getPriority());

  }
}