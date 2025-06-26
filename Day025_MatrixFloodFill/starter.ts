/*
As part of a new feature in our image editing software, we need to implement a 'paint bucket'
feature that can fill a shape with a specific color, similar to what's available in programs like
Microsoft Paint or Adobe Photoshop. Besides the matrix that represents the pixels of the image (with
a value for each pixel representing its color), function's parameters are the coordinates of the 
pixel where the filling should start and the new color to be applied. The function should then
change the color of all pixels in the same shape that contains the starting pixel (note:
only pixels that originally have the same color as the starting pixel and are connected
to it, or to another pixel that has the same color and is connected as well).

In terms of complexity, we define that as: The method should require approximately O(n) running time,
where n is the number of pixels in the image. The space complexity should be approximately O(n) as
well (may vary depending on the depth of the recursion).

Task:

Given a two-dimensional integer matrix of values m representing the image, a coordinate as two
integer values x and y representing the starting point of the fill, and an integer newColor
representing the new color to be applied, implement the floodFill function to perform the color fill.

LeetCode Warm-ups:

1. Flood Fill (easy): https://leetcode.com/problems/flood-fill/

2. Surrounded Regions (medium): https://leetcode.com/problems/surrounded-regions/
*/

/**
* @param matrix: number[][] -- pixels of the image, where each pixel has a number representing its color
* @param x: number -- the x-coordinate of the starting position
* @param y: number -- the y-coordinate of the starting position
* @param newColor: number -- the new color to be applied
* @returns number[][] -- image after fill operation
*/

export function floodFill( matrix: number[][], x: number, y: number, newColor: number ): number[][] {

// TODO: implement code here

return matrix; 

}
