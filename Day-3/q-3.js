async function displayCountryDetails() {
    try {
        let response = await fetch('https://restcountries.com/v3.1/all');
        let countries = await response.json();
        
        countries.forEach(country => {
            console.log(`Name: ${country.name.common}`);
            console.log(`Region: ${country.region}`);
            console.log(`Sub-region: ${country.subregion}`);
            console.log(`Population: ${country.population}`);
            console.log('------------------------');
        });
    } catch (error) {
        console.error(error);
    }
}

displayCountryDetails();

