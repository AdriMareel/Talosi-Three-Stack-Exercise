let clickedStack = 0;

//affichage des éléments présents dans les 3 stacks
function displayStackData(...remove){
	if(remove){
		document.getElementById("display-element-stack1").innerHTML = "";
		document.getElementById("display-element-stack2").innerHTML = "";
		document.getElementById("display-element-stack3").innerHTML = "";
	}
	for(let i = 0; i < threeStack.stack1.length; i++) {
		document.getElementById("display-element-stack1").innerHTML += threeStack.stack1[i].name + " ";
	}
	for(let i = 0; i < threeStack.stack2.length; i++) {
		document.getElementById("display-element-stack2").innerHTML += threeStack.stack2[i].name + " ";
	}
	for(let i = 0; i < threeStack.stack3.length; i++) {
		document.getElementById("display-element-stack3").innerHTML += threeStack.stack3[i].name + " ";
	}
}
displayStackData();


//enregistrement du numéro de la stack cliquée
document.getElementById("stack1-clicked").addEventListener("click", function() {
	clickedStack = 1;

	//couleur ajoutée aux boutons en fonction de la stack ciblée
	document.getElementById("stack1-clicked").classList.add("active");
	document.getElementById("stack3-clicked").classList.remove("active");
	document.getElementById("stack2-clicked").classList.remove("active");
});
document.getElementById("stack2-clicked").addEventListener("click", function() {
	clickedStack = 2;

	//couleur ajoutée aux boutons en fonction de la stack ciblée
	document.getElementById("stack2-clicked").classList.add("active");
	document.getElementById("stack3-clicked").classList.remove("active");
	document.getElementById("stack1-clicked").classList.remove("active");
});
document.getElementById("stack3-clicked").addEventListener("click", function() {
	clickedStack = 3;

	//couleur ajoutée aux boutons en fonction de la stack ciblée
	document.getElementById("stack3-clicked").classList.add("active");
	document.getElementById("stack2-clicked").classList.remove("active");
	document.getElementById("stack1-clicked").classList.remove("active");

});


//ajout d'un élément dans une stack
document.getElementById("add-element").addEventListener("click", function() {
    if(clickedStack == 0){
        console.log("on est là mon gars");
        document.getElementById("alert-text").innerHTML = "Veuillez sélectionner une stack";
        document.getElementById("alert").classList.add("shown");

        setTimeout(function(){
            document.getElementById("alert").classList.remove("shown");
            }, 3000);
        return;
    }

    if(document.getElementById("string-value").value === ""){
        document.getElementById("alert-text").innerHTML = "Veuillez rentrer une valeur";
        document.getElementById("alert").classList.add("shown");

        setTimeout(function(){
            document.getElementById("alert").classList.remove("shown");
            }, 3000);
        return;
    }

	if(clickedStack > 0 && clickedStack < 4){
		threeStack.push(clickedStack, { "name": document.getElementById("string-value").value });
		displayStackData(true);

		document.getElementById("string-value").value = "";
	}



});

//retrait d'un élément dans la stack
document.getElementById("remove-element").addEventListener("click", function() {
	if(clickedStack > 0 && clickedStack < 4){

		switch(clickedStack){
			case 1:
				if(threeStack.stack1.length === 0){
					document.getElementById("alert-text").innerHTML = "La stack 1 est vide";
					document.getElementById("alert").classList.add("shown");

					setTimeout(function(){
						document.getElementById("alert").classList.remove("shown");
					}, 4000);
				}
				break;
			case 2:
                if(threeStack.stack2.length === 0){
                    document.getElementById("alert-text").innerHTML = "La stack 2 est vide";
                    document.getElementById("alert").classList.add("shown");

                    setTimeout(function(){
                        document.getElementById("alert").classList.remove("shown");
                        }, 4000);
                }
				break;
			case 3:
                if(threeStack.stack3.length === 0){
                    document.getElementById("alert-text").innerHTML = "La stack 3 est vide";
                    document.getElementById("alert").classList.add("shown");

                    setTimeout(function(){
                        document.getElementById("alert").classList.remove("shown");
                        }, 4000);
                }
				break;
		}

		threeStack.pop(clickedStack);
		displayStackData(true);
	}
	else if(clickedStack == 0){
		document.getElementById("alert-text").innerHTML = "Veuillez sélectionner une stack";
		document.getElementById("alert").style.display = "block";

		setTimeout(function(){
			document.getElementById("alert").style.display = "none";
		}, 3000);
	}
});
