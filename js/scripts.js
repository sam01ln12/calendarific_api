

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
    return `
        <div class="col-md-6">
        <p><strong>Name : </strong> <small class = "holiday_name">${data.name}</small></p>
        <p><strong>Description : </strong> <small class = "desc">${data.description}</small></p>
        <p><strong>Country : </strong> <small class = "country">${data.country.name}</small></p>
        <p><strong>Date : </strong> <small class = "date">${data.date.datetime.day} . ${data.date.datetime.month} . ${data.date.datetime.year}</small></p>
        <p><strong>Type : </strong> <small class = "holiday_type">${data.type}</small></p>
        <hr>
        </div> `;
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

