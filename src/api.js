function save(val){
    localStorage.setItem('items', JSON.stringify(val))
}

function load(){
    return JSON.parse(localStorage.getItem('items'))
}

export {save, load}