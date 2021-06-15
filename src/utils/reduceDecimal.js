export function reduceDecimal(number, countDecimal){
    var n = parseFloat(number)
    return n.toFixed(countDecimal)
}