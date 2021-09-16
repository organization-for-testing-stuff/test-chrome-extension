console.log("RUNNING FILL PRODUCT SCRIPT");

const product = {
  title: "Grey Shirt",
  description: "A great grey shirt",
  price: "50",
};

const fillProduct = async () => {
  //Fills form

  document.getElementById("title").defaultValue = product.title;
  document.getElementById("description").defaultValue = product.description;
  document.getElementById("price").value = "£" + product.price + ".00";
};

//Please catch any errors
fillProduct();
