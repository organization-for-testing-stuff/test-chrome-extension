console.log("RUNNING GETFEEDBACK SCRIPT");

const getFeedback = async () => {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "www.vinted.co.uk",
  };
  // page=1&per_page=82&
  fetch(
    "https://www.vinted.co.uk/api/v2/feedbacks?user_id=59783356&page=1&per_page=20",
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
getFeedback().then((data) => {
  console.log(data);
});
