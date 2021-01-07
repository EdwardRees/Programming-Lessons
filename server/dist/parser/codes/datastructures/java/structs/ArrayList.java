package structs;

public class ArrayList<T> implements List<T>{

  private T[] arr;
  private int limit;
  private int size;

  public ArrayList(int limit) {
    this.arr = (T[]) (new Object[limit]);
    this.limit = limit;
    this.size = 0;
  }

  public ArrayList(){
    this(10);
  }

  /** Double array size */
  public void extend() {
    this.limit *= 2;
    T[] arr2 = (T[]) (new Object[limit]);
    for (int i = 0; i < size; i++) {
      arr2[i] = arr[i];
    }
    arr = arr2;
  }

  public void add(T e){
    if(size == limit){
      extend();
    }
    arr[size++] = e;
  }

  public boolean contains(T e){
    for(T val : arr){
      if(val == e){
        return true;
      }
    }
    return false;
  }

  public boolean isEmpty(){
    return size == 0;
  }

  public T get(int index) throws IllegalStateException{
    if(index > size || index < 0 || isEmpty()){
      throw new IllegalStateException();
    }
    return arr[index];
  }
  
  public T remove(int index) throws IllegalStateException {
    if(index > size || index < 0 || isEmpty()){
      throw new IllegalStateException();
    }
    T temp = arr[index];
    for(int i=index; i<size - 1; i++){
      arr[i] = arr[i + 1];
    }
    size--;
    return temp;
  }

}