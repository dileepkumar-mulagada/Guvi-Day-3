async function displayCountryFlags() {
    try {
        let response = await fetch('https://restcountries.com/v3.1/all');
        let countries = await response.json();
        
        countries.forEach(country => {
            console.log(country.flags.png || country.flags.svg);
        });
    } catch (error) {
        console.error(error);
    }
}

displayCountryFlags();

