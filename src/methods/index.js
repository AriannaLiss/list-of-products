export function newTask(){
    const newItem = document.querySelector("#new-item");
    newItem.classList.remove('hide');
}

export function hideInput(){
    document.querySelector("#new-item").classList.add('hide');
    document.querySelector("#new-item-value").value = '';
}
