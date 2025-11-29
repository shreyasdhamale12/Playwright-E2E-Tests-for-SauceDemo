export function randomString(length =6){

    const chars = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for(let i=0;i<length;i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result.charAt(0).toUpperCase() + result.slice(1);
}

export function randomPostalCode(){
    return Math.floor(Math.random() * 900000).toString();
}