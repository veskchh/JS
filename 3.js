function largestNum(num1, num2, num3) {
    let largestNm
    if (num1 > num2 && num1 > num3){
        largestNm = num1
    } else if (num2 > num1 && num2 > num3) {
        largestNm = num2
    } else {
        largestNm = num3
    }
    console.log('The largest number is ' + largestNm + '.')
}