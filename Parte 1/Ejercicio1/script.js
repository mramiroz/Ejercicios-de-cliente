document.addEventListener("DOMContentLoaded", function() {
	var tabla = document.getElementById("tabla");

	for(let i = 1; i <= 100; i++)
	{
		let tr = document.createElement("tr");
		for (let j = 1; j <= 100; j++)
		{
			let td = document.createElement("td");
			let result = i * j;
			if (result % 7 == 0)
				td.id = "green";
			else if (result % 11 == 0)
				td.id = "red";
			td.textContent = result;
			td.classList.add("cell");
			tr.appendChild(td);
		}
		tabla.appendChild(tr);
	}
});
