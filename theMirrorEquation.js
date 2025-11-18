const customSplit = (str) => {
    let resultArray = [], tempString = '' 

    Array.from(str).forEach(char => {
        if (char !== ' ') {            
            tempString += char        
        } else if (tempString.trim()) {                       
            resultArray.push(tempString)
            tempString = ""             
        }
    })             
    
    if(tempString){                      
        resultArray.push(tempString)    
    }

    Array.from(resultArray).forEach((data, index) => {
        if (index % 2 === 0) {            
            resultArray[index] = Number(data)        
        }
    })
    return resultArray              
}

const reverseStringRecursive = (str) => {
    if (str === '') {
        return ''
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0)
    }
}

const theMirrorEquation = (str) => {
    if ((typeof str === 'string') === false) {
        return 'Input must be a string'
    } else {
        if (str.includes(' + ') === false && str.includes(' = ') === false) {
            return 'String should be an addition'
        } else {
            const a = customSplit(str)[0]
            const b = customSplit(str)[2]
            const c = customSplit(str)[4]

            if (c < 10) {
                return 'Result of the addition must be more than or equal 10'
            } else if ((a + b === c) === true) {
                return 'correct'
            } else if (
                (a + b === c) === false &&
                (c - b === reverseStringRecursive(a.toString())) === true
            ) {
                return 'a,' + reverseStringRecursive(a.toString())
            } else if (
                (a + b === c) === false &&
                (c - a === reverseStringRecursive(b.toString())) === true
            ) {
                return 'b,' + reverseStringRecursive(b.toString())
            } else if (
                (a + b === c) === false &&
                (c !== reverseStringRecursive(a.toString())) === true
            ) {
                return 'c,' + reverseStringRecursive(c.toString())
            } else {
                return 'no solution'
            }
        }   
    }
}

console.log(theMirrorEquation('12 + 34 = 64'))
console.log(theMirrorEquation('16 + 23 = 93'))
console.log(theMirrorEquation('15 + 51 = 66'))
console.log(theMirrorEquation('21 + 34 = 55'))