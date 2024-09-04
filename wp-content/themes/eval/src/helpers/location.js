// this function sends a request out to the ipapi API to get user info to display the city and on the header

function getUserLocation() {
    const header = document.getElementById('user-location');

    if (header) {
        const locationElement = document.createElement('h1')
        let locationText = document.createTextNode('');

        try {
            fetch('https://ipapi.co/json')
            .then(async res => {
                const parsedRes = await res.json();
                console.log(parsedRes)

                locationText = document.createTextNode(`Our gutters available in ${parsedRes.city}, ${parsedRes.region_code}`)
                locationElement.appendChild(locationText);
            })
        } catch {
            locationText = document.createTextNode('Our gutters available in your area.');
            locationElement.appendChild(locationText);
        }

        locationElement.classList.add('header__text')
        header.appendChild(locationElement);
    }
}


jQuery(document).ready(function() 
{
    getUserLocation();

});

