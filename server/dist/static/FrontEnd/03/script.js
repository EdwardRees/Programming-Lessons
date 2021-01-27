function toss() {
  const limit = 100;
  let val = parseInt(Math.random() * limit + 1);
  console.log(val);
  if (val % 2 == 0) {
    document.getElementById("coin").innerHTML =
      '<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gambling911.com%2Ffiles%2Fstyles%2Farticle_image%2Fpublic%2Fpublisher%2FSuper-Bowl-Coin-Toss-Heads-020316L.jpg%3Fitok%3DL4jga2uu&f=1&nofb=1" />';
  } else {
    document.getElementById("coin").innerHTML =
      '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51NyMaKLydL._QL70_.jpg&f=1&nofb=1">';
  }
}
