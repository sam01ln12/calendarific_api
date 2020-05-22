function calendar_storage (keyword, data) {
    window.localStorage.setItem(keyword, JSON.stringify(data));
}
