
const apiKey = `0315b22b2648e03f501c8d190e210ebe`;
const searchItem = () =>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value ;

    searchInput.value = '';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => searchResults(data));
}

const searchResults = cities =>{
    const display = document.getElementById('search-results');

    display.textContent = '';

    const div = document.createElement('div');
    div.classList.add('row','bg-light', 'w-75', 'mx-auto', 'p-3', 'rounded-3', 'mt-5');
    div.innerHTML = `
    <div class="col-md-6 col-12">
              <div>
                <h4 class='text-uppercase'>${cities.name}</h4>
                <h6 class="text-muted">${cities.sys.country}</h6>
                <div class="d-flex justify-content-evenly py-3">
                  <img
                    src="http://openweathermap.org/img/wn/${cities.weather[0].icon}@2x.png"
                  />
                  <h1 class="" style="font-size: 60px">${cities.main.temp}&#x2103;</h1>
                </div>
                <h4 class="text-capitalize">${cities.weather[0].description}</h4>
              </div>
            </div>
            <div class="col-md-6 col-12 py-5">
              <div class="d-flex justify-content-between border-bottom">
                <p class="fs-5">Wind</p>
                <h5 class="text-warning ml-5">${cities.wind.speed} Km/h</h5>
              </div>
              <div class="d-flex justify-content-between border-bottom">
                <p class="fs-5">Max Temp</p>
                <h5 class="text-warning">${cities.main.temp_max}&#x2103;</h5>
              </div>
              <div class="d-flex justify-content-between">
                <p class="fs-5">Min Temp</p>
                <h5 class="text-warning">${cities.main.temp_min}&#x2103;</h5>
              </div>
            </div>
    `;
    
    display.appendChild(div);

}