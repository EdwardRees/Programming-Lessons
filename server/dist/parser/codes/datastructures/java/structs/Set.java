package structs;

public class Set<T> {
  private T[] arr;
  private int limit;
  private int size;
  
  public Set(int limit){
    this.arr = (T[])(new Object[limit]);
    this.limit = limit;
    this.size = 0;
  }

  public boolean add(T e) {
    if(size == limit){
      extend();
    }
    if(contains(e)){
      return false;
    } 
    arr[size++] = e;
    return true;
  }

  public boolean contains(T e){
    for(T el : arr){
      if(el == e){
        return true;
      }
    }
    return false;
  }

  private void extend(){
    limit *= 2;
    T[] arr2 = (T[]) new Object[limit];
    for(int i=0; i<size; i++){
      arr2[i] = arr[i];
    }
    arr = arr2;
  }

  public T remove(int index) throws IllegalStateException{
    if(index > limit || index < 0 || size == 0){
      throw new IllegalStateException();
    }
    T temp = arr[index];
    for(int i=index; i<size - 1; i++){
      arr[i] = arr[i + 1];
    }
    size--;
    return temp;
  }

  public T get(int index) throws IllegalStateException {
    if(index > limit || index < 0 || size == 0){
      throw new IllegalStateException();
    }
    return arr[index];
  }

  public void clear(){
    for(int i=0; i<size; i++){
      arr[i] = null;
    }
  }
}