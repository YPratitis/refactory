function checkLeapYear(year) {
    // 1904, 1908, 1912, 1916, 1920, 1924, 
    // 1928, 1932, 1936, 1940, 1944, 1948, 
    // 1952, 1956, 1960, 1964, 1968, 1972, 
    // 1976, 1980, 1984, 1988, 1992, 1996, 
    // 2000, 2004, 2008, 2012, 2016, 2020
    // const year = [1001, 1004]
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
const year = 2020;
// 1004, 1001

checkLeapYear(year);