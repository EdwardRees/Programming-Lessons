package structs.graphs;

public class DirectedGraph implements Graph {

  class DirectedNode implements Node {

    private DirectedNode neighbor;

    @Override
    public Node getNeighbor() {
      return neighbor;
    }
    
  }

  @Override
  public void addNode(Node node) {
    // TODO Auto-generated method stub

  }

  @Override
  public String getPath(String starting, String ending) {
    // TODO Auto-generated method stub
    return null;
  }
  
}