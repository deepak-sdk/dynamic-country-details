const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all", true);
xhr.responseType = "json";
xhr.onload = () => {
  const allcountrieshere = xhr.response;

  // a.   Get all the countries from Asia continent /region using Filter function
  let population = 200000;
  let populationMoreThan2lakhs = allcountrieshere.filter(
    (country) => country.population > population
  );
  console.log(populationMoreThan2lakhs);
  Object.entries(populationMoreThan2lakhs).forEach((entry) => {
    const [key, value] = entry;
    // console.log(value.flags.png);
    // console.log(value.name.common);
    // console.log(value.population);
    // console.log(value.region);

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
    countryName.textContent = `${value.name.common}`;

    const countryPopulation = document.createElement("p");
    countryPopulation.setAttribute("class", "country-population");
    countryPopulation.textContent = `${value.population}`;

    const countryRegion = document.createElement("p");
    countryRegion.setAttribute("class", "country-region");
    countryRegion.textContent = `${value.region}`;

    const countryCapital = document.createElement("p");
    countryCapital.setAttribute("class", "country-capital");
    countryCapital.textContent = `${value.capital}`;

    countryDetails.appendChild(countryName);
    countryDetails.appendChild(countryPopulation);
    countryDetails.appendChild(countryRegion);
    countryDetails.appendChild(countryCapital);
    // append to parent element in html

    // const countryCards = document.createElement("div");
    // countryCards.setAttribute("class", "countryCards");
    // countryCards.appendChild(countryCard);

    document.querySelector(".countryCards").append(countryCard);
  });
};
xhr.send();
