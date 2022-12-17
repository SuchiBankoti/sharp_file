var form = document.getElementById('addForm');
let itemList = document.getElementById("items")
form.addEventListener("submit", additem)
function additem(e) {
    e.preventDefault();
    let input = document.getElementById("item")
    let newLi = document.createElement("li")
    newLi.classList.add("list-group-item")
    newLi.appendChild(document.createTextNode(input.value))
    itemList.appendChild(newLi)

    let deleteBtn = document.createElement("button")
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode("X"))
    newLi.appendChild(deleteBtn)

    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    newLi.appendChild(editBtn)
    console.log(input.value)
}
function removeItem() {

}