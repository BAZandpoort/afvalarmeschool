const handleClick = async () => {
    const element = document.getElementById('catpicture');
    const randomResponse = await fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'x-api-key': 'live_Qu8nmaSmgTnV8Gb989nrf9xS5rxeOUaJGelKBycCYQElHpPSdikt1vunfUI9b9xm'
        }
    }).then(response => response.json());
    element.src = randomResponse[0].url;
}