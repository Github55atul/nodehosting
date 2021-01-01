const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submit Btn');
const city_Name = document.getElementById('city_Name');
const temp_real_value = document.getElementById('temp_real_value');
const temp_status = document.getElementById('temp_status');


const datahide = document.querySelector('.middle_layer');


const getinfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_Name.innerText = `plz write the name before search`;
        datahide.classList.add('data_hide');

    }
    else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=61ace3e5f00893507ff2de80cc168a54`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];


            city_Name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            datahide.classList.remove('data_hide');
        }

        catch {
            city_Name.innerText = `plz enter the city name properly`;
            datahide.classList.add('data_hide');

        }

    }
}

submitBtn.addEventListener('click', getinfo); 