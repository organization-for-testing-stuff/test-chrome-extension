console.log("RUNNING GETFEEDBACK SCRIPT");
// perfectvintage
const getFeedback = async () => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "www.vinted.co.uk",
  };
  // page=1&per_page=82&
  fetch(
    "https://www.vinted.co.uk/api/v2/feedbacks?user_id=66773264&page=1&per_page=20",
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
      var DataArray = [TheData.user_feedbacks]; // This array contains all the items sold by the user.
      console.log(DataArray);
      // console.log(TheData);
    });
};

//Please catch any errors
getFeedback().then((data) => {
  console.log(data);
});
