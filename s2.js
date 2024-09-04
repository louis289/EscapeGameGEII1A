document.addEventListener('DOMContentLoaded', function () {
    const enigmesData = [
      {
        id: "Introduction",
        etap: 0,
        titre: "Introduction",
        contenu: "",
        video: "0622.mp4",
        navigation: [
          { label: "Suivant", id: "Introduction2" }
        ]
      }, {
        id: "Introduction2",
        etap: 0,
        titre: "Introduction",
        contenu: "Vous vous promeniez dans la forêt quand vous entendez des bruits bizarres. Vous vous mettez à courir et entendez un individu louche vous suivre. <br><br> Après vous être caché, vous vous croyez tiré d'affaire. Mais non. L'individu vous frappe par derrière. <br><br> Vous vous réveillez dans une cave sombre. <br> Il s'agit en fait de la maison d'un ancien électricien. <br> Grâce à vos faibles connaissances dans le domaine de l'électricité, vous allez devoir réussir à quitter la maison. <br> Pour ce faire, validez toutes les étapes dans le temps imparti en utilisant les compteurs en haut. <br> Êtes-vous prêt à relever le défi ?",
        navigation: [
          { label: "Suivant", id: "Cave de l'Électricien" },
          { label: "Précédent", id: "Introduction" }
        ]
      },
      {
        id: "Cave de l'Électricien",
        etap: 0,
        titre: "Cave de l'Électricien",
        contenu: "Vous etes dans la cave. Sur les murs, des formules électriques sont inscrites. Pour défaire les liens qui vous retiennent, vous devez brancher l'un des trois éléments : résistance, impédance ou condensateur fin de faire brûler la corde qui vous retient.",
        image: "enigme1.jpg",
        quiz: {
          question: "Quel est l'élément qui chauffera assez pour défaire vos liens ?",
          options: ["Résistance", "Impédance", "Condensateur"],
          reponse: "Résistance"
        },
        valid: 0,
        navigation: [
          { label: "Suivant", id: "Porte" },
          { label: "Précédent", id: "Introduction2" }
        ]
      },
      {
        id: "Porte",
        etap: 0,
        titre: "Porte",
        image: "OIG2.jpeg",
        contenu: "Vous rencontrez une porte verrouillée avec une étoile gravé dessus. Il s'agit d'un type de montage.",
        quizMulti: {
          question: "Comment faire un montage en étoile ?",
          optionsIMG: ["QuizMontage/Triangle.png", "QuizMontage/étoile.png"],
          reponse: ["QuizMontage/étoile.png"]
        },
        valid: 0,
        navigation: [
          { label: "Suivant", id: "cave" },
          { label: "Précédent", id: "Cave de l'Électricien" }
        ]
      },
      {
        id: "cave",
        etap: 0,
        titre: "Couloir et Ascenseur",
        image: "couloir.jpg",
        contenu: "Dans le couloir, vous trouvez un panneau de contrôle d'ascenseur endommagé. Vous devez le reparer.",
        quizMulti: {
          question: "Quels EPI faut-il faut mettre pour se proteger des risques éléctriques?",
          optionsIMG: ["EPI/casque.jpeg", "EPI/gants.jpeg", "EPI/gantsnonmdrrrr.jpeg", "EPI/masque.jpeg", "EPI/tapis.jpg", "EPI/visiere.jpg"],
          reponse: ["EPI/gants.jpeg", "EPI/tapis.jpg", "EPI/visiere.jpg"]
        },
        valid: 0,
        navigation: [
          { label: "Suivant", id: "Ascenseur" },
          { label: "Précédent", id: "Porte" }
        ]
      },
      {
        id: "Ascenseur",
        etap: 0,
        titre: "Ascenseur",
        image: "couloir.jpg",
        contenu: "",
        choix: {
          question: "Où voulez-vous aller ?",
          options: [
            { label: "Sous sol", id: "Sous sol" },
            { label: "Chambre", id: "chambre" },
            { label: "Labo", id: "Labo" },
            { label: "Cave", id: "cave" },
            { label: "Rez-de-chaussée", id: "Rez-de-chaussée" }
          ]
        },
        navigation: [
          { label: "Précédent", id: "cave" }
        ]
      },
      {
        id: "Sous sol",
        etap: 0,
        titre: "Batterie pour la Voiture",
        contenu: "Au sous-sol, vous trouvez une batterie de voiture. Vous devez effectuer un diagnostic avec un multimètre et identifier le problème. Après avoir réparé la batterie, vous pouvez sortir de la maison.",
        quiz: {
          question: "Comment devez-vous procéder ?",
          options: [
            "1) Mettre les EPI, vérifier la batterie au multimètre, enlever les EPI, brancher la batterie </br>",
            "2) Vérifier la batterie au multimètre, mettre les EPI, brancher la batterie, enlever les EPI </br>",
            "3) Mettre les EPI, brancher la batterie, vérifier la batterie au multimètre, enlever les EPI </br>",
            "4) Mettre les EPI, vérifier la batterie au multimètre, brancher la batterie, enlever les EPI </br>"
          ],
          reponse: "4) Mettre les EPI, vérifier la batterie au multimètre, brancher la batterie, enlever les EPI </br>"
  
        },
        valid: 0,
        navigation: [
          { label: "Suivant", id: "Ascenseur" },
          { label: "Précédent", id: "Ascenseur" }
        ]
      },
      {
        id: "chambre",
        etap: 0,
        titre: "Niveaux Supérieurs",
        image: "enigme3.jpg",
        contenu: "Dans la chambre au deuxième étage, vous renversez un vase d'eau sur un robot gardien. Vous récupérez son carnet de code : déphasage pi/2, Ampli 0.5, offset 3V. Ce code vous permet de sortir de la chambre. ",
        quizIMG: {
          question: "Quels sont les signaux correspondants, avec Ve(t) comme signal de base et Vs(t) comme signal modifié ?",
          optionsIMG: ["robot/faux1.jpg", "robot/vrais.jpg", "robot/faut2.jpg"],
          reponse: "robot/vrais.jpg",
  
        },
        valid: 0,
        navigation: [
          { label: "Suivant", id: "Ascenseur" },
          { label: "Précédent", id: "Ascenseur" }
        ]
      },
      {
        id: "Labo",
        etap: 0,
        titre: "Labo",
        contenu: "Vous pouvez tester la batterie !",
        navigation: [
          { label: "Suivant", id: "Ascenseur" },
          { label: "Précédent", id: "Ascenseur" }
        ],
        quizMulti: {
          question: "Comment mesurez vous la tension et le courant délivré par la batterie ?",
          optionsIMG: ["quiz/Anon.png", "quiz/Aoui.png", "quiz/Vnon.png", "quiz/Voui.png"],
          reponse: ["quiz/Aoui.png", "quiz/Voui.png"],
  
        },
        valid: 0
      },
      {
        id: "Voiture",
        etap: 0,
        titre: "Voiture",
        image: "voiture.jpg",
        contenu: "Vous etes dans la voiture. Malheureusement vous ne pouvez pas partir car elle n'est pas chargé. Chargez la completement en la branchant sur la batterie. Voici les indications que vous avez trouvé : </br>La voiture doit etre chargé a ... et la batterie fournie .... ",
        quizTime: {
          question: "Combien de temps doit charger la voiture?",
          reponse: 5 * 60
  
        },
        valid: 0,
        navigation: [
          { label: "Suivant", id: "fin" },
          { label: "Précédent", id: "exterieur" }
        ]
      },
      {
        id: "Rez-de-chaussée",
        etap: 7,
        titre: "Système d'Alarme",
        valid: 0,
        quiz: {
          question: "Calculez P",
          options: [
            "1)  P=U*I = 300W </br>",
            "2)  P=U*I*cos(phi) = 300W </br>",
            "3)  P=U*I = 150W </br>",
            "4)  P=U*I*cos(phi) = 150W </br>",
            "5)  P=U*I = 300VA </br>",
            "6)  P=U*I*cos(phi) = 300VA </br>",
            "7)  P=U*I = 150VA </br>",
            "8)  P=U*I*cos(phi) = 150VA </br>",
            "9)  P=U*I = 300VAR </br>",
            "10) P=U*I*cos(phi) = 300VAR </br>",
            "11) P=U*I = 150VAR </br>",
            "12) P=U*I*cos(phi) = 150VAR </br>"
          ],
          reponse: "4)  P=U*I*cos(phi) = 150W </br>"
  
        },
        contenu: "Avant de partir, vous devez désactiver le système d'alarme. Il y a un code dans sur le mure ''U=200, I=1.5A et Cos(phi) =0.5. P=...''.",
        navigation: [
          { label: "Suivant", id: "exterieur" },
          { label: "Précédent", id: "Ascenseur" }
        ]
      }, {
        id: "exterieur",
        etap: 0,
        titre: "Allez à la voiture",
        image: "vuem1.jpeg",
        contenu: "Vous devez vous echapper. Prenez la voiture !",
        navigation: [
          { label: "Suivant", id: "Voiture" },
          { label: "Précédent", id: "Rez-de-chaussée" }
        ]
      },
      {
        id: "fin",
        etap: 0,
        titre: "GAGNÉ",
        valid: 0,
  
        contenu: "Bravo vous avez relevé tous les defis et reussi a vous échapper !!!",
        navigation: [
          { label: "Suivant", id: "" },
          { label: "Précédent", id: "" }
        ]
  
      }
    ];
  
    const enigmesContainer = document.getElementById('enigmes-container');
    const precedentBtn = document.getElementById('precedent');
    const suivantBtn = document.getElementById('suivant');
    const musiqueHorreur = document.getElementById('musiqueHorreur');
    const compteurEtapes = document.createElement('div');
    compteurEtapes.id = 'compteur-etapes';
    document.getElementById('escape-game-container').insertBefore(compteurEtapes, enigmesContainer);
  
    let etapeActuelle = 0;
    let etapesValidees = enigmesData.filter(e => e.valid == 1).length;
    const totalEtapesValidables = enigmesData.filter(e => e.valid !== undefined).length;
  
    function mettreAJourCompteurEtapes() {
      compteurEtapes.textContent = `Étapes validées : ${etapesValidees} / ${totalEtapesValidables}`;
    }
  
    afficherEnigme(etapeActuelle);
  
    precedentBtn.addEventListener('click', function () {
  
      const enigme = enigmesData[etapeActuelle];
  
      const precedent = enigme.navigation.find(nav => nav.label === "Précédent");
      if (precedent) {
        const destinationIndex = enigmesData.findIndex(e => e.id === precedent.id);
        if (destinationIndex !== -1) {
          etapeActuelle = destinationIndex;
          afficherEnigme(etapeActuelle);
        }
      }
  
    });
  
    suivantBtn.addEventListener('click', function () {
      if (peutNaviguer()) {
        const enigme = enigmesData[etapeActuelle];
        if (enigme.navigation) {
          const suivant = enigme.navigation.find(nav => nav.label === "Suivant");
          if (suivant) {
            const destinationIndex = enigmesData.findIndex(e => e.id === suivant.id);
            if (destinationIndex !== -1) {
              etapeActuelle = destinationIndex;
              afficherEnigme(etapeActuelle);
            }
          }
        }
      } else {
        const enigme = enigmesData[etapeActuelle];
        if (enigme.etap === 0) {
          alert("Vous devez réussir le quiz avant de pouvoir avancer.");
  
        } else {
          alert("Vous aller dans les autres pieces de la maison avant de sortir.");
  
        }
      }
    });
  
  
    function afficherEnigme(numero) {
      const enigme = enigmesData[numero];
      let enigmeHTML = '<div class="enigme';
      if (enigme.image || enigme.video) {
        enigmeHTML += ' with-media';
      }
      enigmeHTML += '">';
      enigmeHTML += `
          <h2 class="enigme-center">${enigme.titre}</h2>
          ${enigme.image ? `<img src="${enigme.image}" alt="Enigme ${numero + 1}" class="enigme-image">` : ''}
          ${enigme.video ? `<video controls><source src="${enigme.video}" type="video/mp4"  alt="Enigme ${numero + 1}" class="enigme-image">Your browser does not support the video tag.</video>` : ''}
          <p>${enigme.contenu}</p>
          ${afficherQuiz(enigme, numero)}
          ${afficherQuizMulti(enigme, numero)}
          ${afficherQuizIMG(enigme, numero)}
          ${afficherQuizTime(enigme)}
          ${afficherChoix(enigme)}
          <p id="message"></p>
      </div>
      `;
      enigmesContainer.innerHTML = enigmeHTML;
  
      // Gérer la musique d'horreur
      if (enigme.video) {
        musiqueHorreur.pause();
      } else {
        musiqueHorreur.play();
      }
  
      // Ajouter gestionnaire d'événements pour le minuteur
      const demarrerBtn = document.getElementById('demarrer-timer');
      if (demarrerBtn) {
        demarrerBtn.addEventListener('click', function () {
          const tempsInput = document.getElementById('temps-input').value * 60;
          const compteurTemps = document.getElementById('min-temps');
          const resultatTemps = document.getElementById('resultatTemps');
          const reponseCorrecte = parseInt(enigme.quizTime.reponse);
          let tempsRestant = parseInt(tempsInput);
  
          if (isNaN(tempsRestant) || tempsRestant < 0) {
            alert("Veuillez entrer un nombre valide de secondes.");
            return;
          }
  
          // Afficher le temps initial dans le compteur
          compteurTemps.textContent = formatTemps(tempsRestant);
  
          const intervalId = setInterval(function () {
            if (tempsRestant > 0) {
              tempsRestant--;
              compteurTemps.textContent = formatTemps(tempsRestant);
            } else {
              clearInterval(intervalId);
              compteurTemps.textContent = 'Temps écoulé !';
  
              if (tempsInput == reponseCorrecte) {
                resultatTemps.textContent = 'Bravo ! C\'est exactement le bon temps.';
                enigme.valid = 1;
                etapesValidees = enigmesData.filter(e => e.valid == 1).length;;
                mettreAJourCompteurEtapes();
              } else {
                const reponseCorrecteMinutes = parseInt(reponseCorrecte);
                const tempsInputMinutes = parseInt(tempsInput);
  
                if (tempsInputMinutes > reponseCorrecteMinutes) {
                  resultatTemps.textContent = `Il fallait moins de temps (${reponseCorrecte / 10000}), mais c'est quand même réussi.`;
                  enigme.valid = 1;
                  etapesValidees = enigmesData.filter(e => e.valid == 1).length;;
                  mettreAJourCompteurEtapes();
                } else {
                  resultatTemps.textContent = 'Le temps est trop court. Réessayez.';
                }
              }
            }
          }, 1000);
        });
      }
    }
  
  
  
    
      // Fonction pour afficher le quiz
      function afficherQuiz(enigme, numero) {
        if (enigme.quiz) {
          const optionsHTML = enigme.quiz.options.map((option, index) => {
            const optionId = `option${numero}-${index}`;
            return `<input type="radio" id="${optionId}" name="reponse" value="${option}"><label for="${optionId}" class="option-label">${option}</label>`;
          }).join('');
          return `
                    <div class="quiz">
                        <p>${enigme.quiz.question}</p>
                        ${optionsHTML}
                        </br>
                        <button id="verifierReponse">Vérifier</button>
                        <p id="resultat"></p>
                    </div>
                `;
        } else {
          return '';
        }
      }
    
      // Fonction pour afficher le quiz multi-images
      function afficherQuizMulti(enigme, numero) {
        if (enigme.quizMulti) {
          const optionsHTML = enigme.quizMulti.optionsIMG.map((option, index) => {
            const optionId = `optionImg${numero}-${index}`;
            return `<input type="checkbox" id="${optionId}" name="reponseMulti" value="${option}"><label for="${optionId}" class="option-label"><img src="${option}" alt="Option ${index + 1}" class="quizimg"></label>`;
          }).join('');
          return `
                  <div class="quiz-multi">
                      <p>${enigme.quizMulti.question}</p>
                      ${optionsHTML}
                      </br>
                      <button id="verifierReponseMulti">Vérifier</button>
                      <p id="resultatMulti"></p>
                  </div>
              `;
        } else {
          return '';
        }
      }
    
      function afficherQuizIMG(enigme, numero) {
        if (enigme.quizIMG) {
          const optionsHTML = enigme.quizIMG.optionsIMG.map((option, index) => {
            const optionId = `optionImg${numero}-${index}`;
            return `<input type="radio" id="${optionId}" name="reponseIMG" value="${option}"><label for="${optionId}" class="option-label"><img src="${option}" alt="Option ${index + 1}" class="quizimglong"></label>`;
          }).join('');
          return `
                  <div class="quiz-multi">
                      <p>${enigme.quizIMG.question}</p>
                      ${optionsHTML}
                      </br>
                      <button id="verifierReponseIMG">Vérifier</button>
                      <p id="resultatMulti"></p>
                  </div>
              `;
        } else {
          return '';
        }
      }
    
      // Fonction pour afficher les choix
      function afficherChoix(enigme) {
        if (enigme.choix) {
          const choixHTML = enigme.choix.options.map(option => {
            return `<button class="choix-btn" data-destination="${option.id}">${option.label}</button>`;
          }).join('');
          return `
                  <div class="choix">
                      <p>${enigme.choix.question}</p>
                      ${choixHTML}
                  </div>
              `;
        } else {
          return '';
        }
      }
    
      // Fonction pour comparer deux tableaux
      function compareArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return arr1.every(value => arr2.includes(value));
      }
    
      // Fonction pour vérifier si la navigation est autorisée
      function peutNaviguer() {
        const enigme = enigmesData[etapeActuelle];
        if (enigme.valid === 0 || etapesValidees <= enigme.etap) {
          return false;
        }
        return true;
      }
    
      // Initialiser le compteur d'étapes
      mettreAJourCompteurEtapes();
  
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    let tempsRestant = 1200; // Temps en secondes (60 minutes)
  
    function mettreAJourCompteurTemps() {
      const minutes = Math.floor(tempsRestant / 60);
      const secondes = tempsRestant % 60;
      const formatMinutes = String(minutes).padStart(2, '0');
      const formatSecondes = String(secondes).padStart(2, '0');
      const compteurTemps = document.getElementById('compteur-temps');
      compteurTemps.textContent = `${formatMinutes}:${formatSecondes}`;
    }
  
    function decrementerTemps() {
      if (tempsRestant > 0) {
        tempsRestant--;
        mettreAJourCompteurTemps();
      } else {
        clearInterval(intervalId);
        alert("Temps écoulé ! Le jeu est terminé.");
      }
    }
  
    const intervalId = setInterval(decrementerTemps, 1000);
  
    // Ajouter le compteur de temps à la page
    const compteurTempsDiv = document.createElement('div');
    compteurTempsDiv.id = 'compteur-temps';
    document.getElementById('escape-game-container').insertBefore(compteurTempsDiv, enigmesContainer);
  
  });
  
  
  function afficherQuizTime(enigme) {
    if (enigme.quizTime) {
      const question = enigme.quizTime.question;
      const tempsRestant = enigme.quizTime.tempsRestant || 0; // Assure une valeur par défaut
      return `
        <div class="quiz-time">
          <p>${question} </br> </br><span id="min-temps">${formatTemps(tempsRestant)}</span></p>
          <input type="number" id="temps-input" min="1" placeholder="Entrez le temps (en minutes)">
          <button id="demarrer-timer">Démarrer le minuteur</button>
          <p id="resultatTemps"></p>
        </div>
      `;
    } else {
      return '';
    }
  }
  
  // Fonction utilitaire pour formater le temps en minutes:secondes
  function formatTemps(tempsEnSecondes) {
    const minutes = Math.floor(tempsEnSecondes / 60);
    const secondes = tempsEnSecondes % 60;
    return `${minutes}:${secondes < 10 ? '0' + secondes : secondes}`;
  }
  
  
  