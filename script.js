var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var bdelete = document.getElementsByClassName("delete");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(DltBtn());
	
	eventDelete();
	addDone();
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addDone() {
	for (let i = 0; i < ul.childElementCount; i++) {
		ul.children[i].addEventListener("click",liToggle);
	}
}

function liToggle() {
	 this.classList.toggle("done");
}

function eventDelete() {
	for (let i = 0; i < bdelete.length; i++) {
		bdelete[i].addEventListener("click",RemoveBtn);
	}
}

function addDeleteBtn() {
	for (let i = 0; i < ul.childElementCount; i++) {
		ul.children[i].appendChild(DltBtn());
	}
}

function RemoveBtn() {
	this.parentNode.remove();
}

function DltBtn() {
	var btnDelete = document.createElement("button");
	btnDelete.className="delete";
	btnDelete.appendChild(document.createTextNode("Delete"));
	return btnDelete;
}

addDeleteBtn();
eventDelete();
addDone();
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", addDone);
