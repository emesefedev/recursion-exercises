function fibonacci(n, l = [0, 1]) {
    if (n === 0) return {item: 0, list: l}
    if (n === 1) return {item: 1, list: l}
    
    const f = fibonacci(n - 1, l).item + fibonacci(n - 2, l).item
    l[n] = f
    
    return {item: f, list: l}
}

console.log(fibonacci(8))