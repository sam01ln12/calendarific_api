calendar_get = (keyword, flag_code) => {
    let holidays = localStorage.getItem(keyword);
    let entry = JSON.parse(holidays);
    let countryName = entry[0].country.name;
    let flag_url = `https://www.worldometers.info/img/flags/${flag_code}-flag.gif`
    
    let holidaysNum = entry.length;

    let searchTable = document.querySelector(".body_of_table");
    let searchIndex = searchTable.childElementCount + 1;
    let newHoliday = render_data_to_table(searchIndex, countryName, holidaysNum, flag_url);
    searchTable.innerHTML += newHoliday;
}
