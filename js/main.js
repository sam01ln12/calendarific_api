let url = 'https://calendarific.com/api/v2/holidays';
let api_key = 'ae861d1de3c14a0f8922e45f84bdae1dde18e9a0';


let client = new Calendar(url, api_key);

document.querySelector("#search").addEventListener('click', (e)=> {
    let keyword = document.querySelector(".Search_bar").value;
    client.search(keyword);
})
