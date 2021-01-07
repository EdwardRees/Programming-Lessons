package structs.graphs;


public interface Graph {

  public void addNode(Node node);
  
  public String getPath(String starting, String ending);
  
}