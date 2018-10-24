window.onload;

document.getElementById("boundary1").addEventListener("mouseover", function loser()
	{

		document.getElementById("boundary1").classList.add("youlose");
	}
)

//exercise 2
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

let mazeend = document.getElementById("end");
mazeend.addEventListener("mouseover", function end()
		{
			if (document.getElementsByClassName("youlose").length === 0)
			{

				let wintext = document.createElement("h2");
				wintext.textContent = "You Win!";
				document.body.append(wintext);
				var status = document.createAttribute("id");
				status.value = "status";
				wintext.setAttributeNode(status);

			}
		}

	)

	//Excercise 4

	let mazereset = document.getElementById("start");
	mazereset.addEventListener("click", function reset()

		{
			var i = document.getElementsByClassName("boundary").length - 1;
			while (i >= 0)
			{
				document.querySelectorAll(".boundary")[i].classList.remove("youlose");
		 		i--;
		    }

		    	// When the user clicks the start icon, this code, it removes the status either you win or you lose
		   if (document.getElementsByTagName("div").innerHTML === `<h2 id = "status"> You Win </h2>` || `<h2 id = "status"> You Lose </h2>`)
		   			{
		   				var removeSatus = document.getElementById("status");
		   				removeSatus.parentNode.removeChild(removeSatus);
		   			}

		}

	)	
