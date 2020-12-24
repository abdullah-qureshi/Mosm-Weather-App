const key = '9GZib7CuJ9POkWKeYgecL21vq5hvntcm';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch (base+query);
    const data = await response.json();

    return data[0];
}

const getWeather = async (cityKey) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${key}`;

    const response = await fetch (base+query);
    const data = await response.json();

    return data[0];
}
