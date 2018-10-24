window.onload;

document.getElementById("boundary1").addEventListener("mouseover", function loser()
	{

		document.getElementById("boundary1").classList.add("youlose");
	}
)


for ( var x = 0; x < document.getElementsByClassName("boundary").length - 1; x++)
		{

			document.getElementsByClassName("boundary")[x].addEventListener("mouseover", function loser2()
					{
						for (var y = 0; y < document.getElementsByClassName("boundary").length - 1; y++)
						{

						document.querySelectorAll("div.boundary")[y].classList.add("youlose");

						}

							let losetext = document.createElement("h2");
							losetext.textContent = "You Lose!";
						  document.body.append(losetext);
						  var status = document.createAttribute("id");
							status.value = "status";
							losetext.setAttributeNode(status);


					})
		}

//Excercise 3
