const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.responseType = "json";
xhr.onload = () => {
  const allcountrieshere = xhr.response;

  // a.   Get all the countries from Asia continent /region using Filter function

  var Asia = allcountrieshere.filter((country) => country.region == "Asia");
  //   console.log(Asia);
  Object.entries(Asia).forEach((entry) => {
    const [key, value] = entry;
    // console.log(value.flags.png);
    // console.log(value.name.common);


    // create a new div element
    const countryCard = document.createElement("div");
    countryCard.setAttribute("class", "country-card");

    // child element countrycard container
    const flag = document.createElement("img");
    flag.src = value.flags.png;

    // add the img node to the countrycard container
    countryCard.appendChild(flag);

    // creating second-child container
    const countryDetails = document.createElement("div");
    countryDetails.setAttribute(
      "class",
      "country-details d-flex flex-wrap flex-column"
    );
    countryCard.appendChild(countryDetails);

    // adding element to countryDetail
    const countryName = document.createElement("h4");
    countryName.setAttribute("style","color:white");
    countryName.innerHTML = `${value.name.common}`;

    countryDetails.appendChild(countryName);


    

    // append to parent element in html
    document.querySelector(".countryCards").append(countryCard);
  });
};
xhr.send();
