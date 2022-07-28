function yesterday(year, month, day) {
    let my_date = new Date(year, month - 1, day);
    my_date.setDate(my_date.getDate() - 1)
    console.log(`${my_date.getFullYear()}-${my_date.getMonth() + 1}-${my_date.getDate()}`)
}

yesterday(2016, 10, 1)