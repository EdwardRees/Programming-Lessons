package structs;

import java.lang.reflect.Array;

public class Queue<T extends Object> {
  private T[] arr;
  private int limit;
  private int size;

  public Queue(int limit){
    this.arr = (T[]) new Object[limit];
    this.limit = limit;
    this.size = 0;
  }


  public Queue() {
    this(10);
  }

  /**
   * Remove the head from the queue and shift everything by one
   * @return
   * @throws Exception
   */
  public T dequeue() throws Exception {
    return null;    
  }

  /**
   * Add an item to the queue
   * @param item queue to add
   */
  public void enqueue(T item){

  }

  /**
   * Extend the array
   */
  private void extend(){

  }

  public boolean isEmpty(){
    return size == 0;
  }

  @Override
  public String toString(){
    System.out.println(arr instanceof Object[]);
    StringBuilder str = new StringBuilder();
    str.append(size);
    for(int i=0; i<size; i++){
      str.append(" ");
      str.append(arr[i]);
    }
    return str.toString();
  }
}