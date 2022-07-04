/*
In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/


//Primer intento

function permutations(str) {
    const s = str.split("")
    const res = permuRec("", s)
  
    return Array.from(new Set(res))
  }
  
  function permuRec (head, body) {
    
    if(body.length == 1)
      return [head + body[0]]
    
    let res = []
      
    for(let i = 0; i < body.length; i++) {
      const newBody = []
      for(let j = 0; j < body.length; j++) {
        if(i != j)
         newBody.push(body[j])
      }
      const sinHead = permuRec(body[i], newBody)
      res = res.concat(sinHead)
    }
    
    return res.map(e => head + e)
    
  }

  var setRes;

  function permutations(string) {    
      
      setRes = new Set()
      permuRec(string.length, string.split(""))
  
      return Array.from(setRes)
  }

// Con algoritmo de combinatoria de wikipedia

  function permuRec(n, A) {
  
      if (n == 1)
          setRes.add(A.join(""))
      else
          for (let i = 0; i < n; i++) {
  
              permuRec(n - 1, A)
              if (n%2 == 0) {
                  let aux = A[i]
                  A[i] = A[n-1]
                  A[n-1] = aux
              }
              else{
                  let aux = A[0]
                  A[0] = A[n-1]
                  A[n-1] = aux
              }
          } 
  }