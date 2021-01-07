package structs;

public class BST<T> {

  class Node<T> {
    private Comparable<T> data;
    private Node<T> left;
    private Node<T> right;

    public Node(Comparable<T> data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }

    public Node<T> getRight() {
      return this.right;
    }

    public Node<T> getLeft() {
      return this.left;
    }

    public void setLeft(Node<T> left) {
      this.left = left;
    }

    public void setRight(Node<T> right) {
      this.right = right;
    }

    public void setData(Comparable<T> data) {
      this.data = data;
    }

    public Comparable<T> getData() {
      return this.data;
    }

  }

  private Node<T> head;

  public BST() {
    this.head = null;
  }

  public void add(T data) {
    if (this.head == null) {
      this.head = new Node<T>((Comparable<T>) data);
      return;
    }
    this.add(this.head, data);
  }

  public void add(Node<T> head, T data) {
    if (head.getData().compareTo(data) == -1) {
      if (head.getLeft() == null) {
        head.setLeft(new Node<T>((Comparable<T>) data));
        return;
      } else {
        if (head.getLeft().getData().compareTo(data) == -1) {
          add(head.getLeft(), data);
        }
      }
    } else if (head.getData().compareTo(data) == 1) {
      if (head.getRight() == null) {
        head.setRight(new Node<T>((Comparable<T>) data));
        return;
      } else {
        if (head.getRight().getData().compareTo(data) == 1) {
          add(head.getRight(), data);
        }
      }
    }
  }

  public boolean find(T item){
    return find(item, head);
  }

  public boolean find(T item, Node<T> node){
    if(node == null){
      return false;
    } 
    if(node.data == item){
      return true;
    } else if(node.getData().compareTo(item) == 1){
      return find(item, node.getRight());
    } else {
      return find(item, node.getLeft());
    }
  }
}