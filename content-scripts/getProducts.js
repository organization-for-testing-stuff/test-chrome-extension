console.log("RUNNING GETPRODUCTS SCRIPT");

const getProducts = async () => {
  //Returns array of product objects
  console.log("inside function");
  let headersList = {
    Accept: "*/*",
    "User-Agent": "www.vinted.co.uk",
  };
  // page=1&per_page=82&
  fetch(
    "https://www.vinted.co.uk/api/v2/users/59783356/items?order=relevance¤cy=GBP",
    {
      method: "GET",
      headers: headersList,
    }
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      const TheData = JSON.parse(data);
      console.log(TheData);
    });
};

//Please catch any errors
getProducts().then((data) => {
  console.log(data);
});
