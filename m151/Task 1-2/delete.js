export function deleteAddress(adrs, id){
    let retAdrs
    adrs.forEach(element => {
        element =! id ? retAdrs.push(adrs) : adrs.pop();
    });
    return retAdrs;
}