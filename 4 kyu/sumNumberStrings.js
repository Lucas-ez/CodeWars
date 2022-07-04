/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) { 
  
    const trimZero = (cad) => {
        let c = cad.split("")
        for(let i = 0; i < c.length; i++) {
            if(c[i] === '0') {
                c[i] = ""
            } else {
                i = c.length
            }
        }
        return c.join("")
    }
    
    a = trimZero(a)
    b = trimZero(b)
    
    let mayor = b
    let menor = a
    
    if(a.length > b.length) {
        mayor = a
        menor = b
    }
    
    let res = []
    let carry = false
    let i = 0
    for(; i < menor.length ; i++) {
      let aux = parseInt(menor[menor.length-1-i]) + parseInt(mayor[mayor.length-1-i]) + carry
      res.unshift(aux%10)
      carry = aux > 9
    }
    
    for(;i < mayor.length; i++) {
      res.unshift(parseInt(mayor[mayor.length-1-i]) + carry)
      carry = false
    }
    
    if(carry)
      res.unshift(1)
    
    return res.join("")
  }