package structs;

public interface List<T> {
  public void add(T e);
  public boolean contains(T e);
  public T get(int index);
  public T remove(int index);
}
