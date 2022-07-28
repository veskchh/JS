function GDC(num1, num2) {
    if (num1 === 0) {
        return num2
    }
    while (num2) {
        if (num1 > num2) {
            num1 -= num2
        } else {
            num2 -= num1
        }
    }
    return num1
}

GDC()