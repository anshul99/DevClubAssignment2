function add()
{
	var td = document.createElement("li");
	var input = document.getElementById("inpt").value;
	var t = document.createTextNode(input);
	td.appendChild(t);
	document.getElementById("list").appendChild(td);
	document.getElementById("inpt").value = "";
	var t = Date();
	var txt = document.createTextNode(t);
	document.getElementById("list").appendChild(txt);
}

document.addEventListener("click",function(event)
{
	if (event.target.tagName === "LI")
	{
		event.target.classList.toggle("checked");
	}
});
