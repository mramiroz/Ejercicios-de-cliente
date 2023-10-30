var i = 0;

function add()
{
	let task = document.getElementById("task").value;
	let option = document.getElementById("dia").value;
	let newtask = document.createElement("li");
	let button = document.createElement("button");
	
	if (option == "manana")
	{
		let manana = document.getElementById("manana_list");
		newtask.textContent = task;
		manana.appendChild(newtask);
	}
	else
	{
		let tarde = document.getElementById("tarde_list");
		newtask.textContent = task;
		tarde.appendChild(newtask);
	}
	button.textContent = "Borrar";
	button.value = i;
	button.id = i;
	newtask.id = i;
	button.onclick = function()
	{
		borrar(button.id);
	}
	newtask.appendChild(button);
	i++;
}

function borrar(id)
{
	let task = document.getElementById(id);
	task.parentNode.removeChild(task);
}