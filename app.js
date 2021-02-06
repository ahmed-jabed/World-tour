fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))


const displayCountries = countries => {

    const countriesDiv = document.getElementById('countries');

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];

        const countryDiv = document.createElement('div');
        countryDiv.className = 'countries'

        // const h4 = document.createElement('h4');
        // h4.innerText = country.name;

        // const p = document.createElement('p');
        // p.innerText = country.capital;

        // const p2= document.createElement('p');
        // p2.innerText= country.population;

        // countryDiv.appendChild(h4)
        // countryDiv.appendChild(p)
        // countryDiv.appendChild(p2)

        const countryInfo = `
        <h4 class='country'> ${country.name}</h4>
        <p class='capital btn'> ${country.capital}</p>
        <button onclick="countryDetails('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);
        // console.log(country.name);
    }
}

const countryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryDetail(data[0]))
}

const renderCountryDetail = country => {
    // console.log(country);

    const countryDiv = document.getElementById('counrtyDetail');
    countryDiv.innerHTML = `
 <h1>${country.name}</h1>
 <p>${country.population}</p>
 <p>${country.region}</p>
 <img src="${country.flag}">
 `
}