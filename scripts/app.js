const cityForm = document.querySelector('form');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const image = document.querySelector('img.time')
const icon = document.querySelector('div.icon')

const updateUI = (data) => {

    const cityDets = data.cityDets;
    const weatherDets = data.weatherDets;


    data = `<h5 class="city my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weatherDets.WeatherText}</div>
        <div class="my-3 display-5">
        <span>${weatherDets.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
        </div>`

    details.innerHTML = data;

    const dayImg = `img/day.svg`
    const nightImg = `img/night.svg`
    if (weatherDets.IsDayTime)
    {
        image.setAttribute("src", dayImg);
    }
    else
    {
        image.setAttribute("src", nightImg);
    }

    icon.innerHTML = `<img src="img/icons/${weatherDets.WeatherIcon}.svg">`

    if (card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
    }
}

const updateCity = async (city) => {
    
    const cityDetails = await getCity (city);
    const weatherDetails = await getWeather (cityDetails.Key);

    console.log (cityDetails);
    console.log(weatherDetails);

    return {
        cityDets: cityDetails,
        weatherDets: weatherDetails
    };

}

cityForm.addEventListener ('submit', e=>{
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity (city)
    .then(data => updateUI (data))
    .catch(err => console.log(err))
})