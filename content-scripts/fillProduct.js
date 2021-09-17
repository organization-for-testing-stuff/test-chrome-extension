console.log("RUNNING FILL PRODUCT SCRIPT");

const product = {
  title: "Grey Shirt",
  description: "A great grey shirt",
  price: "50",
};

const fillProduct = async () => {
  //Fills form
  document.getElementById("title").setAttribute("value", product.title);
  document
    .getElementById("description")
    .setAttribute("value", product.description);
  document.getElementById("description").innerHTML = product.description;
  document
    .getElementById("price")
    .setAttribute("value", "$" + product.price + "." + 00);

  document.getElementsByTagName("button")[0].click();
};

//Please catch any errors
fillProduct();
