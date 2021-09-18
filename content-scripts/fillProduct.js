console.log("RUNNING FILL PRODUCT SCRIPT");

const product = {
  title: "Grey Shirt",
  description: "A great grey shirt",
  price: "50",
};

function setNativeValue(element, value) {
  let lastValue = element.value;
  element.value = value;
  let event = new Event("input", { target: element, bubbles: true });
  // React 15
  event.simulated = true;
  // React 16
  let tracker = element._valueTracker;
  if (tracker) {
    tracker.setValue(lastValue);
  }
  element.dispatchEvent(event);
}

const fillProduct = async () => {
  //Fills form
  var title = document.getElementById("title");
  setNativeValue(title, product.title);

  var description = document.getElementById("description");
  setNativeValue(description, product.description);

  var price = document.getElementById("price");
  setNativeValue(price, product.price);

  var SaveDraft = document.getElementsByClassName("Button_button__1HmfN");
  SaveDraft.click();
};

//Please catch any errors
fillProduct();
