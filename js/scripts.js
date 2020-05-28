

class Calendar {
    constructor(url, api_key) {
        this.url = url;
        this.api_key = api_key;
        this.state = {}
    }

    //https://calendarific.com/api/v2/holidays?&api_key=ae861d1de3c14a0f8922e45f84bdae1dde18e9a0&country=US&year=2019


    search(keyword) {
        let url = `${this.url}?&api_key=${this.api_key}&country=${keyword}&year=2020`;
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
        
                    data=data.response.holidays;

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
<div class="card mb-3">
  <h3 class="card-header">Holiday</h3>
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    
  </div>
  <img style="height: 200px; width: 100%; display: block;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image">
  <div class="card-body">
    <p class="card-text">Description: ${data.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Type: ${data.type}</li>
    <li class="list-group-item">Date: ${data.date.datetime.day} . ${data.date.datetime.month} . ${data.date.datetime.year}</li>
  </ul>
</div>
</div>`;
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

