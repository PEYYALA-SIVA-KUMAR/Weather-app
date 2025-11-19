document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
    let city = document.getElementById("cityInput").value.trim();
    let apiKey = "5414d15e98967cfd8af04fd23dff281a"; // Your API Key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (city === "") {
        document.getElementById("weatherResult").innerHTML = "Please enter a city name!";
        return;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById("weatherResult").innerHTML = `
                    <p><strong>${data.name}, ${data.sys.country}</strong></p>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                `;
            } else {
                document.getElementById("weatherResult").innerHTML = "City not found! Please try again.";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("weatherResult").innerHTML = "Something went wrong. Try again later!";
        });
}
