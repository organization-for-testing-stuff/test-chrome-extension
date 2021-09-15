console.log("RUNNING GETPRODUCTS SCRIPT");

const getProducts = async () => {
  //Returns array of product objects
  console.log("inside function");
  let headersList = {
    Accept: "*/*",
    "User-Agent": "www.vinted.co.uk",
  };

  fetch(
    "https://www.vinted.co.uk/api/v2/users/59783356/items?page=1&per_page=20&order=relevance¤cy=GBP",
    {
      method: "GET",
      headers: headersList,
    }
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      //   console.log(Object.keys(data.items).length);
      console.log(data.items);
    });
};

//Please catch any errors
getProducts().then((data) => {
  console.log(data);
});
