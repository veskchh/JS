function sameNumCheck(integer_i) {
    let integer = Array.from(String(integer_i), Number)
    let verdict = true
    let sum = 0
    for (let i = 1; i < integer.length; i++) { //check if all the same//
        if (integer[i] !== integer[i - 1]) {
            verdict = false
            break
        }
    }
    for (let i = 0; i < integer.length; i++) { //calculate sum of all numbers//
        sum += integer[i]
    }
    console.log(verdict)
    console.log(sum)
}


