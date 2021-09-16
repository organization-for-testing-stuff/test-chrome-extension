console.log("RUNNING GETPRODUCTS SCRIPT");
// lessthanten
const getProducts = async () => {
  //Returns array of product objects
  console.log("inside function");
  let headersList = {
    Accept: "*/*",
    "User-Agent": "www.vinted.co.uk",
  };
  fetch(
    "https://www.vinted.co.uk/api/v2/users/59783356/items?per_page=82&order=relevance¤cy=GBP",
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
      var DataArray = [TheData.items]; // This array contains all the items sold by the user.
      console.log(DataArray);
      // console.log(TheData);
    });
};

//Please catch any errors
getProducts().then((data) => {
  console.log(data);
});
