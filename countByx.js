// function that return multiples of x

const multiples = (n, x) => {
     let result = []

     for(let i = 1; i <= n; i++) {
        result.push(x*i)
     }
     console.log(result)
     return result
}

multiples(2,3)

