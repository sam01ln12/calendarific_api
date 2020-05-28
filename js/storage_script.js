calendar_storage = (keyword, data)=> { 
    
    window.localStorage.setItem(keyword, JSON.stringify(data));

}


calendar_get = (keyword) => {
    let holidays = localStorage.getItem(keyword);
    let entry = JSON.parse(holidays);
    let countryName = entry[0].country.name;
    let holidaysNum = entry.length;

    let searchTable = document.querySelector(".body_of_table");
    let searchIndex = searchTable.childElementCount + 1;
    let newHoliday = render_data_to_table(searchIndex, countryName, holidaysNum);
    searchTable.innerHTML += newHoliday;
}

