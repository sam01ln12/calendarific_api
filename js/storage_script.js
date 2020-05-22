calendar_storage = (keyword, data)=> { 
    let holidays = calendar_get();
    holidays.push(JSON.stringify({country:data.country.name, data:data}));
    window.localStorage.setItem(keyword, holidays);

}


calendar_get =  (keyword) => {
    let i = 0;

    let holidays = localStorage.getItem(keyword);
    if(holidays == undefined) {
        holidays = [];
    } 
    else {
    let entry = JSON.parse(holidays)
    }
    document.querySelector(".body_of_table").innerHTML = render_data_to_table(holidays.slice(0, 1), ++i);
    return holidays;

    
}

