 // Fonction pour générer un problème aléatoire
        function generateProblem() {
            // Générer un nombre aléatoire entre 1 et 10
            let a = Math.floor(Math.random() * 10) + 1;
            let b = Math.floor(Math.random() * 10) + 1;
            let c = a * b;
            let res = document.getElementById("res");
            // Afficher le nombre aléatoire dans la page
            document.getElementById("problem").innerHTML = "<p>" + a + " x " + b + " = </p>";
        }
        // Sélectionnez l'élément sur lequel vous souhaitez écouter l'événement
        var bouton = document.getElementById("monBouton");
    
        // Ajoutez un écouteur d'événements
        bouton.addEventListener("click", function() {
            if res==c{
        alert("bonne reponse");
            }else{
                 alert("faux la reponse etait"+c);
            }
        });

        // Fonction pour recommencer
        function restart() {
            generateProblem(); // Régénérer le problème
            document.getElementById("result").innerHTML = ''; // Effacer les résultats précédents
        }

        // Appeler la fonction au chargement de la page pour générer le premier problème
        generateProblem();
