function shit(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let sum2 = 0
    for (let i = 0; i < array.length; i++) {
        sum2 += 1/array[i];
    }
    let conc = ''
    for (let i = 0; i < array.length; i++) {
        conc += array[i];
    }
    console.log(sum)
    console.log(sum2)
    console.log(conc)
}

shit([2, 4, 8, 16])