function mergeSort(array) {
    const arrayLength = array.length
    if (arrayLength == 1) {
        return array
    }

    const arrayLeft = mergeSort(array.slice(0, arrayLength / 2))
    const arrayRight = mergeSort(array.slice(arrayLength / 2, arrayLength))

    const sorted = []
    while (arrayLeft.length > 0 && arrayRight.length > 0) {
        let lower = null
        if (arrayLeft[0] < arrayRight[0]) {
            lower = arrayLeft.shift()
        }
        else {
            lower = arrayRight.shift()
        }
        sorted.push(lower)
    }

    if (arrayLeft.length > 0) {
        sorted.push(arrayLeft)
    } else  if (arrayRight.length > 0) {
        sorted.push(arrayRight)
    }

    return sorted.flat()
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))