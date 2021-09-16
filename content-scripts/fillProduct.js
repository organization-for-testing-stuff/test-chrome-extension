console.log("RUNNING FILL PRODUCT SCRIPT");

const product = {
  title: "Grey Shirt",
  description: "A great grey shirt",
  price: "50",
};

const fillProduct = async () => {
  //Fills form
  var title = document.getElementById("title");
  var input = title.getElementsByTagName("input")[0];
  input.value = product.title;

  document.getElementById("description").innerHTML = product.description;

  document.getElementById("price").innerHTML = product.price;
  document.getElementById("price").value = product.price;
};

//Please catch any errors
fillProduct();
