/*
Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
*/

function spiralize (n) {
    let mat = new Array(n);
    for(let i = 0; i < n; i++)
        mat[i] = new Array(n).fill(0);

    let startToRight = 0
    let endToRight = n-1

    let startToBottom = 0
    let endToBottom = n-1

    let startToLeft = n-1
    let endToLeft = 0
    
    let startToTop = n-1
    let endToTop = 2

    let cambio = 3

    while(cambio > 2) {
        cambio = 0

        // hacia derecha
        for(let j = startToRight; j <= endToRight; j++) {
            mat[endToTop-2][j] = 1
            cambio++
        }
        endToRight-=2

        //hacia abajo
        if(cambio > 2) {
            cambio = 0
            for(let i = startToBottom; i <= endToBottom; i++) {
                mat[i][endToRight+2] = 1
                cambio++
            }
            endToBottom -= 2
        }

        //hacia izquierda
        if(cambio > 2) {
            cambio = 0
            for(let j = startToLeft; j >= endToLeft; j--) {
                mat[endToBottom+2][j] = 1
                cambio++
            }
            endToLeft +=2
        }
        
        //hacia arriba
        if(cambio > 2) {
            cambio = 0
            for(let i = startToTop; i >= endToTop; i--) {
                mat[i][endToLeft-2] = 1
                cambio++
            }
            endToTop +=2
        }
        
        startToRight = endToLeft-2
        startToBottom = endToTop-2
        startToLeft = endToRight
        startToTop = endToBottom
        
    }

  return mat;
}