var form = document.getElementById('addForm');
let itemList = document.getElementById("items")
let searchBar = document.getElementById("filter")
searchBar.addEventListener("keyup", filter)
form.addEventListener("submit", additem)
itemList.addEventListener("click", removeItem)
function additem(e) {
    e.preventDefault();
    let input = document.getElementById("item")
    let descriptionInput = document.getElementById("des")
    let newLi = document.createElement("li")
    newLi.classList.add("list-group-item")
    newLi.appendChild(document.createTextNode("Name of the item-  " + input.value + " , " + "description- " + descriptionInput.value))
    itemList.appendChild(newLi)

    let deleteBtn = document.createElement("button")
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.appendChild(document.createTextNode("X"))
    newLi.appendChild(deleteBtn)

    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    newLi.appendChild(editBtn)
}

function removeItem(e) {
    let answer = confirm("are you sure?")
    let li = e.target.parentElement
    answer ? itemList.removeChild(li) : ""

}
function filter(e) {
    let searchInput = e.target.value
    let list = document.getElementsByTagName("li")
    Array.from(list).forEach(item => {
        let text = item.firstChild.textContent
        text.indexOf(searchInput) != -1 ? item.style.display = "block" : item.style.display = "none"
    }
    )
}