function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

daysInMonth(3, 2012)