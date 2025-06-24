function multiProductOptimizer(products: Array<[string, number]>, target: number): Array<string>[] {
    
    let result: string[][] = []
    let bestSum = 0;
    let bestCount = 0;

    function getCombos(start: number, curProducts: string[], curTotal: number) {

        if ( curTotal > bestSum && curTotal <= target ) {

            bestSum = curTotal
            bestCount = curProducts.length
            result = [[...curProducts]]

        } else if ( curTotal == bestSum && curProducts.length > bestCount ) {

            bestCount = curProducts.length
            result = [[...curProducts]]

        } else if ( curTotal == bestSum && curProducts.length == bestCount ) {

            result.push([...curProducts])

        } 

        for ( let i = start; i < products.length; i++ ) {

            const [name, price] = products[i]
            const nextSum = curTotal + price
            
            if ( nextSum > target ) continue

            curProducts.push(name)
            getCombos(i, curProducts, nextSum)
            curProducts.pop()
        }

    }

    getCombos(0, [], 0)

    return result;
}

export default multiProductOptimizer;


