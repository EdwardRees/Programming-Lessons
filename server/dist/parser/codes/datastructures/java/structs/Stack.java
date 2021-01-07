package structs;

public class Stack<T> {

  private T[] arr;
  private int limit;
  private int size;

  public Stack(int limit) {
    arr = (T[]) new Object[limit];
    this.limit = limit;
    this.size = 0;
  }

  /**
   * Puts on top, shift everything by 1
   * 
   * @param item item to push 
   */
  public void push(T item) {
    if (size + 1 == limit) {
      extend();
    }
    size++;
    for(int i = size; i>1; i--){
      arr[i] = arr[i - 1];
    }
    arr[0] = item;
  }

  public T pop() {
    T head = arr[0];
    for (int i = 0; i < size - 1; i++) {
      arr[i] = arr[i + 1];
    }
    size--;
    return head;
  }

  /** Double the limit */
  private void extend() {
    this.limit *= 2;
    T[] arr2 = (T[]) new Object[limit];
    for (int i = 0; i < size; i++) {
      arr2[i] = arr[i];
    }
    arr = arr2;
  }

}