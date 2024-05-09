let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    ul.appendChild(item);
    inp.value = "";

    let Delbtn = document.createElement("button")
    Delbtn.innerText = "Delete"
    Delbtn.classList.add("delete");

    item.appendChild(Delbtn);
})

ul.addEventListener("click", function (e) {
    if (e.target.nodeName == "BUTTON") {
        let Item = e.target.parentElement;
        Item.remove();
    }
})