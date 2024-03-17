
function getImageURL(name){
    return new URL(`../assets/${name}.png`, import.meta.url).href
}


function getImageRaiseURL(name1, name2){
    return new URL(`../assets/3bet-call-${name1}-vs-${name2}.png`, import.meta.url).href
}

export {getImageURL, getImageRaiseURL}