
import java.util.TreeSet;

import algorithms.Search;
import algorithms.Sort;
import structs.ArrayList;
import structs.LinkedList;
import structs.Queue;

public class Driver {

  private static String inString(boolean in, String term) {
    return in ? String.format("%s in list", term) : String.format("%s not in list", term);
  }

  private static void testAdd(LinkedList<String> l) {
    l.add("Hello");
    l.add("Bye");
    l.add("Hello");
    System.out.println(l);
  }

  private static void testContains(LinkedList<String> l) {
    System.out.println(inString(l.contains("Bye"), "Bye"));
    System.out.println(inString(l.contains("Hero"), "Hero"));
  }

  private static void testAddAll(LinkedList<String> l) {
    l.addAll(new TreeSet<String>() {
      {
        add("Hello");
        add("World");
      }
    });

    System.out.println(l);
  }

  private static void testRemoveHeadWithNext(LinkedList<String> l) {
    l.add("Hello");
    l.add("Bye");
    l.add("World");
    String removed = l.remove(0);
    System.out.printf("Removed at %d is %s; causing the list to have a size of %d elements%n", 0, removed, l.size());
    System.out.println(l);
  }

  private static void testRemoveHead() {
    LinkedList<String> l = new LinkedList<>();
    l.add("Hello");
    l.remove(0);
    System.out.println(l.isEmpty() ? "Successful removal of head" : "Failed");
  }

  private static void testRemoveMiddle() {
    LinkedList<String> l = new LinkedList<>();
    l.add("Hello");
    l.add("Bye");
    l.add("World");
    l.remove(1);
    System.out.println(l.size() == 2 && !l.contains("Bye") ? "Successful" : "Failed");
  }

  private static void testClear() {
    LinkedList<String> l = new LinkedList<>();
    l.addAll(new TreeSet<String>() {
      {
        add("Hello");
        add("John");
        add("Bye");
      }
    });
    l.clear();
    System.out.println(l.isEmpty() ? "Successful clear" : "Failed clear");
  }

  private static void testLinkedList() {
    LinkedList<String> l = new LinkedList<>();
    testAdd(l);
    testContains(l);
    testAddAll(l);

    testRemoveHeadWithNext(new LinkedList<String>());
    System.out.println();
    testRemoveHead();
    testRemoveMiddle();
    testClear();
  }

  private static boolean isPrime(int n) {
    for (int i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  private static Integer[] generatePrimes(int lim) {
    Integer[] primes = new Integer[lim];
    int count = 0;
    for (int i = 1; i < 100; i++) {
      if (isPrime(i)) {
        primes[count++] = i;
      }
      if (count == lim)
        break;
    }
    return primes;
  }

  private static void testQueue() {
    Queue<String> q = new Queue<String>();
    q.enqueue("Hello world");
    System.out.println(q);
  }

  private static void testAlgorithms() {
    Integer[] primes = generatePrimes(10);
    System.out.println(Search.linearSearch(primes, 29));

    Integer[] nums = new Integer[] { 1, 3, 2, 5, 9, -1 };
    // Sort.sequentialSort(nums);
    // Sort.bubbleSort(nums);
    Sort.insertionSort(nums);
    for(int num: nums){
      System.out.printf("%d ",num);
    }
    System.out.println();
  }

  private static void testArrayList() {
    ArrayList<String> list = new ArrayList<>();
    list.add("Hello");
    list.add("World");
    System.out.println(list.contains("Hello"));
    System.out.println(list.contains("There"));
    list.remove(0);
    System.out.println(list.get(0));

  }

  public static void main(String[] args) {
    testLinkedList();
    // testArrayList();
    // testQueue();
    // testAlgorithms();
  }
}