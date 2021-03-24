export function transformAddress (address){
    if(address == "" || address == null){
        return address
    }
    let first = address.slice(0,4)
    let last = address.slice(38,42)
    let newAddress = first + "..." + last
    return newAddress
}