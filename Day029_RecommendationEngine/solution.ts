/*
Imagine you are a developer working for a company that runs an online shopping platform.
Your team has been tasked with implementing a recommendation system. Given a user's past purchase history,
the system should recommend a product that the user hasn't bought yet but is likely to buy.
The product would be picked from a list of products the user has previously viewed.

The data you have to work with includes a purchase history matrix and a viewed products matrix for each user.
The purchase history matrix is a 2D array where each row represents a product and each column represents a day.
If the user bought the product that day, the matrix element is 1, Else 0.
The viewed products matrix has the same structure but represents whether the user viewed a product that day.

Write a function 'recommend' that takes in these two matrices and returns the product id,
that appears most frequently in the viewed product matrix and is not in the purchase history.
If multiple products meet this criteria, return any.

Warm-up Questions:
1. Find All Numbers Disappeared in an Array (LeetCode Difficulty: Easy)
2. Set Matrix Zeroes (LeetCode Difficulty: Medium)

*/

export default function recommend(purchaseHistory: number[][], viewedProducts: number[][]): number {
    
    const purchases: Set<number> = new Set()
    for ( let day = 0; day < purchaseHistory.length; day++ ) {
        for ( let item = 0; item < purchaseHistory[day].length; item++ ) {
            if ( purchaseHistory[day][item] == 1 ) purchases.add(item)
        }
    }

    const viewed: Map<number, number> = new Map()
    for ( let day = 0; day < viewedProducts.length; day++ ) {
        for ( let item = 0; item < viewedProducts[day].length; item++ ) {
            if ( viewedProducts[day][item] == 1 ) {
                viewed.set(item, (viewed.get(item) || 0) + 1)
            }
        }
    }

    const viewCount: [number, number][] = []
    for ( const [item, count] of viewed.entries() ) viewCount.push([item, count])
    viewCount.sort((a, b) => b[1] - a[1])

    for ( const [item, _] of viewCount ) {
        if ( !purchases.has(item) ) {
            return item
        }
    }

    return -1;
}