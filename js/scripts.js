

class Calendar {
    constructor(url, api_key) {
        this.url = url;
        this.api_key = api_key;
    }

    //https://calendarific.com/api/v2/holidays?&api_key=ae861d1de3c14a0f8922e45f84bdae1dde18e9a0&country=US&year=2019


    search(keyword, flag_code) {
        let url = `${this.url}?&api_key=${this.api_key}&country=${keyword}&year=${document.querySelector("#year_select").value}`;
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
        
                    data=data.response.holidays;
                    document.querySelector("#main").innerHTML = "";
                    calendar_storage(keyword, data);
                    calendar_get(keyword, flag_code);
                    


                    data.forEach(element => { 
                        if (element.locations == "All") {
                        document.querySelector("#main").innerHTML += render_data_to_dom(element, flag_code)
                        

                    }
            
        });
            })
    }
    
}

var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];


render_data_to_dom = (data, flag_code) => {
    var selectedMonthName = months[data.date.datetime.month - 1];
    
return ` <div class="col-md-6 card-container">
    <div class="card-flip">
    <div class = "card front">
    <div class="card mb-3 img_inline">
    <h3 class="card-header">${data.name}</h3>
      <img class="card-img" src="img/${selectedMonthName}.jpg" alt="Card image">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Type: </b> ${data.type}</li>
        
        <li class="list-group-item"><b>Date: </b> ${data.date.datetime.day} . ${data.date.datetime.month} . ${data.date.datetime.year}</li>
      </ul>
    </div>
    </div>

    <div class = "card back">
    <div class="card mb-3 img_inline">
      <div class="card-body">
        <p class="card-text"><b>Description: </b> ${data.description}</p>
      </div>
    </div>
    </div>


    </div>
    </div>
`;
}

let country_set = new Set();
let checker = 0

render_data_to_table = (searchIndex, countryName, holidaysNum, flag_url) => {
    checker++;
    country_set.add(countryName);
    if (checker==country_set.size) {

        return `
            <tr class = "info_row table-success">

            <th scope="row">${searchIndex}</th>
            <td class = "country_name">
                ${countryName}
            </td>
            <td>
                ${holidaysNum}
            </td>
            <td>
            <img class ="flag_image" src="${flag_url}" alt="Flag image">
            </td>
            </tr>
        `;
    }
    else{
        checker=country_set.size;
        return ''
    }
}

document.querySelector('.table').addEventListener('click', function(event) {
    if (event.target.className == 'country_name') {
      country_name = event.target.innerHTML.trim();
      let flag;
      for (let i = 0; i<countries.length; i++) {
          if (country_name == countries[i].name) {
              country_name = countries[i].code;
              flag = countries[i].flag_code;
              break;
          }
      }
    client.search(country_name, flag);
    }
  });
