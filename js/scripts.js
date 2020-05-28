

class Calendar {
    constructor(url, api_key) {
        this.url = url;
        this.api_key = api_key;
    }

    //https://calendarific.com/api/v2/holidays?&api_key=ae861d1de3c14a0f8922e45f84bdae1dde18e9a0&country=US&year=2019


    search(keyword) {
        let url = `${this.url}?&api_key=${this.api_key}&country=${keyword}&year=2020`;
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
        
                    data=data.response.holidays;
                    document.querySelector("#main").innerHTML = "";


                    data.forEach(element => { 
                        if (element.locations == "All") {
                        document.querySelector("#main").innerHTML += render_data_to_dom(element)
                        calendar_storage(keyword, element);
                        calendar_get(keyword);

                    }
            
        });
            })
    }
    
}

render_data_to_dom = (data) => {
    
return ` <div class="col-md-6">
<div class="card mb-3 img_inline">
  <h3 class="card-header">Holiday</h3>
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
</div>
  <img class="card-img" src="https://www.worldometers.info/img/flags/${data.country.id}-flag.gif" alt="Card image">
  <div class="card-body">
    <p class="card-text">Description: ${data.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Type: ${data.type}</li>
    
    <li class="list-group-item">Date: ${data.date.datetime.day} . ${data.date.datetime.month} . ${data.date.datetime.year}</li>
  </ul>
</div>
</div>
`;
}

render_data_to_table = (data, index) => {
    return `
        <tr class = "info_row">

        <td>
            ${index}
        </td>
        <td>
            ${data}
        </td>
        <td>
            ${data.length}
        </td>
                                
        </tr>
    `;
}

