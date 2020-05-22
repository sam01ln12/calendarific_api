calendar_storage = (keyword, data)=> { 
    let holidays = calendar_get();
    holidays.push(JSON.stringify({country:keyword, data:data}));
    window.localStorage.setItem("id", holidays);

}


calendar_get =  () => {

    let holidays = localStorage.getItem("id");

    if(holidays == undefined) {
        holidays = [];
    } 
    else {
    holidays = holidays.split(",");
    }
    return holidays;

    //document.querySelector(".info-row").innerHTML += render_data_to_table(holidays);
}

