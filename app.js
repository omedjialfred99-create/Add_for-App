/**
 * DIAGNOSTIC COMMERCE - LOGIQUE APPLICATIVE INTERACTIVE
 * Conçu pour fonctionner 100% côté client (aucun serveur, zéro fuite de données, ultra-rapide).
 */

document.addEventListener("DOMContentLoaded", () => {
  // ================= DONNÉES DU QUESTIONNAIRE (7 QUESTIONS) =================
  const questions = [
    {
      id: 1,
      category: "💰 Caisse & Ventes",
      title: "À la fermeture, comment sais-tu si le montant en caisse correspond exactement à tes ventes du jour ?",
      hint: "Un écart de caisse non repéré au quotidien peut représenter une grosse somme à la fin du mois.",
      options: [
        {
          badge: "A",
          text: "Je vérifie rapidement ou de tête, mais il m'arrive d'avoir des écarts inexpliqués.",
          points: 0,
          category: "caisse"
        },
        {
          badge: "B",
          text: "Je recompte tout sur un cahier le soir, mais cela me prend beaucoup de temps et d'énergie.",
          points: 5,
          category: "caisse"
        },
        {
          badge: "C",
          text: "Chaque entrée et sortie est enregistrée au fur et à mesure, mon solde est clair et précis.",
          points: 10,
          category: "caisse"
        }
      ]
    },
    {
      id: 2,
      category: "📦 Stocks & Réassorts",
      title: "Comment sais-tu qu'un article commence à manquer dans tes rayons ou ta réserve ?",
      hint: "Une rupture de stock, c'est un client déçu qui part directement acheter chez ton voisin.",
      options: [
        {
          badge: "A",
          text: "Quand un client me le demande et que je constate que le rayon ou le carton est vide.",
          points: 0,
          category: "stock"
        },
        {
          badge: "B",
          text: "Je jette un coup d'œil régulier de tête pour évaluer ce qui semble diminuer.",
          points: 5,
          category: "stock"
        },
        {
          badge: "C",
          text: "J'ai un suivi régulier de mes quantités qui me permet d'anticiper mes commandes à temps.",
          points: 10,
          category: "stock"
        }
      ]
    },
    {
      id: 3,
      category: "📒 Crédits & Dettes clients",
      title: "Si des clients réguliers prennent des articles à crédit (payer plus tard), comment gères-tu cela ?",
      hint: "L'argent bloqué dehors chez les clients est l'une des causes principales des difficultés de trésorerie.",
      options: [
        {
          badge: "A",
          text: "C'est noté sur des bouts de papier ou de mémoire, et j'oublie parfois qui me doit quoi.",
          points: 0,
          category: "dettes"
        },
        {
          badge: "B",
          text: "J'ai un carnet dédié, mais c'est fastidieux à relire et je tarde souvent à relancer.",
          points: 5,
          category: "dettes"
        },
        {
          badge: "C",
          text: "Chaque crédit est enregistré avec la date et le montant, et mes relances sont ponctuelles.",
          points: 10,
          category: "dettes"
        }
      ]
    },
    {
      id: 4,
      category: "💳 Séparation des finances",
      title: "En cas d'urgence personnelle ou familiale, que fais-tu de l'argent de la caisse du commerce ?",
      hint: "Mélanger la poche personnelle et la caisse du commerce fausse la visibilité sur la santé réelle de l'activité.",
      options: [
        {
          badge: "A",
          text: "Je pioche directement dans la caisse sans forcément noter, car tout m'appartient.",
          points: 0,
          category: "finances"
        },
        {
          badge: "B",
          text: "Je prends ce qu'il faut en essayant de le noter sur un papier pour le restituer plus tard.",
          points: 5,
          category: "finances"
        },
        {
          badge: "C",
          text: "La caisse du commerce est strictement séparée de mes dépenses personnelles.",
          points: 10,
          category: "finances"
        }
      ]
    },
    {
      id: 5,
      category: "📈 Bénéfice réel",
      title: "Sais-tu exactement quel a été ton bénéfice net réel le mois dernier ?",
      hint: "Avoir de l'argent qui circule ne signifie pas forcément que le commerce génère un vrai profit.",
      options: [
        {
          badge: "A",
          text: "Pas précisément : tant que j'arrive à payer le loyer, réassortir et subvenir à mes besoins, je continue.",
          points: 0,
          category: "rentabilite"
        },
        {
          badge: "B",
          text: "J'ai une vague idée, mais je ne prends pas toujours en compte toutes les petites dépenses.",
          points: 5,
          category: "rentabilite"
        },
        {
          badge: "C",
          text: "Oui, je connais exactement mon chiffre d'affaires, mes coûts d'achat et ma marge nette.",
          points: 10,
          category: "rentabilite"
        }
      ]
    },
    {
      id: 6,
      category: "📦 Pertes & Invendus",
      title: "Comment gères-tu les produits abîmés, périmés ou cassés dans ton commerce ?",
      hint: "Les pertes non quantifiées réduisent silencieusement la rentabilité sans qu'on s'en aperçoive.",
      options: [
        {
          badge: "A",
          text: "Je jette ou donne ce qui est abîmé, sans calculer ce que cela représente en valeur.",
          points: 0,
          category: "stock"
        },
        {
          badge: "B",
          text: "Je sais que ça arrive, mais je n'ai pas de registre simple pour mesurer la perte mensuelle.",
          points: 5,
          category: "stock"
        },
        {
          badge: "C",
          text: "Chaque perte ou avarie est comptabilisée pour adapter mes achats futurs.",
          points: 10,
          category: "stock"
        }
      ]
    },
    {
      id: 7,
      category: "🤝 Délégation & Sérénité",
      title: "Si tu dois t'absenter pendant 3 jours, peux-tu confier ton commerce sereinement ?",
      hint: "Un commerce solide doit pouvoir fonctionner sans obliger le propriétaire à rester enchaîné au comptoir.",
      options: [
        {
          badge: "A",
          text: "Impossible : si je ne suis pas physiquement présent, les risques d'erreurs ou de disparitions sont trop forts.",
          points: 0,
          category: "delegation"
        },
        {
          badge: "B",
          text: "Je le confie à un proche de confiance, mais je dois passer des heures à tout contrôler à mon retour.",
          points: 5,
          category: "delegation"
        },
        {
          badge: "C",
          text: "Oui sereinement : les ventes sont consignées et un inventaire rapide me permet de faire le point.",
          points: 10,
          category: "delegation"
        }
      ]
    }
  ];

  // ================= ÉTAT DE L'APPLICATION =================
  let currentQuestionIndex = 0;
  let userAnswers = []; // Stocke les réponses : { questionId, points, category, optionIndex }

  // ================= ÉLÉMENTS DU DOM =================
  const screenWelcome = document.getElementById("screen-welcome");
  const screenQuiz = document.getElementById("screen-quiz");
  const screenLoading = document.getElementById("screen-loading");
  const screenResult = document.getElementById("screen-result");

  const btnStart = document.getElementById("btn-start");
  const btnPrev = document.getElementById("btn-prev-question");
  const quizStepLabel = document.getElementById("quiz-step-label");
  const progressBar = document.getElementById("progress-bar");
  const questionCategory = document.getElementById("question-category");
  const questionTitle = document.getElementById("question-title");
  const questionHint = document.getElementById("question-hint");
  const answersContainer = document.getElementById("answers-container");

  const loadingStatusText = document.getElementById("loading-status-text");

  const resultProfileTag = document.getElementById("result-profile-tag");
  const resultTitle = document.getElementById("result-title");
  const resultScoreNumber = document.getElementById("result-score-number");
  const scoreCircleIndicator = document.getElementById("score-circle-indicator");
  const resultSummaryLabel = document.getElementById("result-summary-label");
  const resultSummaryDesc = document.getElementById("result-summary-desc");
  const diagnosisPoints = document.getElementById("diagnosis-points");
  const btnShareWhatsapp = document.getElementById("btn-share-whatsapp");
  const btnRestart = document.getElementById("btn-restart");

  // ================= NAVIGATION ENTRE ÉCRANS =================
  function showScreen(screen) {
    [screenWelcome, screenQuiz, screenLoading, screenResult].forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Démarrer le quiz
  btnStart.addEventListener("click", () => {
    currentQuestionIndex = 0;
    userAnswers = [];
    showScreen(screenQuiz);
    renderQuestion(currentQuestionIndex);
  });

  // Recommencer le test
  btnRestart.addEventListener("click", () => {
    currentQuestionIndex = 0;
    userAnswers = [];
    showScreen(screenWelcome);
  });

  // Bouton retour question précédente
  btnPrev.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      userAnswers.pop(); // Retire la dernière réponse
      renderQuestion(currentQuestionIndex);
    } else {
      showScreen(screenWelcome);
    }
  });

  // ================= AFFICHAGE D'UNE QUESTION =================
  function renderQuestion(index) {
    const q = questions[index];
    const totalQuestions = questions.length;

    // Mise à jour de la topbar & barre de progression
    quizStepLabel.textContent = `Question ${index + 1} sur ${totalQuestions}`;
    const progressPercent = Math.round(((index + 1) / totalQuestions) * 100);
    progressBar.style.width = `${progressPercent}%`;

    // Visibilité du bouton retour
    btnPrev.style.visibility = index === 0 ? "hidden" : "visible";

    // Textes
    questionCategory.textContent = q.category;
    questionTitle.textContent = q.title;
    questionHint.textContent = q.hint || "";

    // Vider les anciennes options
    answersContainer.innerHTML = "";

    // Injecter les options cliquables
    q.options.forEach((opt, optIdx) => {
      const btnOpt = document.createElement("button");
      btnOpt.className = "answer-option";
      btnOpt.setAttribute("type", "button");
      btnOpt.innerHTML = `
        <span class="option-badge">${opt.badge}</span>
        <span class="option-text">${opt.text}</span>
      `;

      btnOpt.addEventListener("click", () => {
        handleAnswer(q, opt, optIdx);
      });

      answersContainer.appendChild(btnOpt);
    });
  }

  // ================= GESTION DU CLIC SUR UNE OPTION =================
  function handleAnswer(question, selectedOption, optionIndex) {
    userAnswers.push({
      questionId: question.id,
      points: selectedOption.points,
      category: selectedOption.category,
      optionIndex: optionIndex
    });

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion(currentQuestionIndex);
    } else {
      // Toutes les questions ont été répondues -> Écran d'analyse
      processResults();
    }
  }

  // ================= TRAITEMENT & ANIMATION DE CHARGEMENT =================
  function processResults() {
    showScreen(screenLoading);

    const steps = [
      "Vérification du suivi de la caisse...",
      "Évaluation de la gestion des stocks...",
      "Analyse du recouvrement des crédits...",
      "Génération de ton bilan personnalisé..."
    ];

    let stepIdx = 0;
    const interval = setInterval(() => {
      stepIdx++;
      if (stepIdx < steps.length) {
        loadingStatusText.textContent = steps[stepIdx];
      } else {
        clearInterval(interval);
        renderFinalResult();
      }
    }, 450);
  }

  // ================= CALCUL DU SCORE & AFFICHAGE FINAL =================
  function renderFinalResult() {
    showScreen(screenResult);

    // Calcul du score total (sur 70 max ramené à 100)
    const rawScore = userAnswers.reduce((sum, item) => sum + item.points, 0);
    const maxScore = questions.length * 10; // 70
    const finalPercent = Math.round((rawScore / maxScore) * 100);

    // Animation du score chiffré
    animateScoreCounter(finalPercent);

    // Animation du cercle SVG (circonférence = 2 * PI * 50 ≈ 314.15)
    const circumference = 314.15;
    const offset = circumference - (finalPercent / 100) * circumference;
    scoreCircleIndicator.style.strokeDashoffset = offset;

    // Détermination du profil & des recommandations
    let profileData = {};
    if (finalPercent < 45) {
      profileData = {
        tag: "Gestion au jour le jour",
        tagColor: "#ef4444",
        tagBg: "#fee2e2",
        circleColor: "#ef4444",
        title: "Le Navigateur Courageux",
        summaryLabel: "Visibilité à renforcer d'urgence",
        summaryDesc: "Tu portes beaucoup sur tes épaules, mais ton commerce subit des fuites silencieuses.",
        points: [
          {
            icon: "⚠️",
            text: "<strong>Angles morts sur la caisse :</strong> Sans enregistrement instantané de chaque mouvement, des sommes significatives peuvent disparaître sans explication."
          },
          {
            icon: "📉",
            text: "<strong>Argent dehors non sécurisé :</strong> Les dettes confiées à la mémoire ou à des carnets dispersés sont rarement recouvrées à 100%."
          },
          {
            icon: "📦",
            text: "<strong>Stocks imprévisibles :</strong> Découvrir les ruptures au moment où le client demande le produit fait perdre des ventes directes."
          }
        ]
      };
    } else if (finalPercent <= 75) {
      profileData = {
        tag: "Gestion intermédiaire",
        tagColor: "#d97706",
        tagBg: "#fef3c7",
        circleColor: "#f59e0b",
        title: "Le Gestionnaire Équilibré",
        summaryLabel: "Bonne volonté mais vulnérable",
        summaryDesc: "Tu es travailleur et attentif, mais tes méthodes manuelles te font perdre un temps précieux.",
        points: [
          {
            icon: "⏱️",
            text: "<strong>Perte de temps sur les carnets :</strong> Recompter la caisse et vérifier les dettes sur papier prend 45 min à 1h chaque jour qui pourraient servir à vendre."
          },
          {
            icon: "🔍",
            text: "<strong>Anticipation des réassorts :</strong> Tu évites les gros pièges, mais des produits dorment parfois en réserve pendant que d'autres manquent."
          },
          {
            icon: "💡",
            text: "<strong>Difficulté à déléguer :</strong> Tu dois encore trop vérifier derrière les autres pour avoir l'esprit tranquille quand tu t'absentes."
          }
        ]
      };
    } else {
      profileData = {
        tag: "Gestion maîtrisée",
        tagColor: "#059669",
        tagBg: "#dcfce7",
        circleColor: "#10b981",
        title: "Le Pilote de Commerce Organisé",
        summaryLabel: "Excellente rigueur de gestion",
        summaryDesc: "Tu possèdes la discipline des commerçants qui réussissent sur la durée.",
        points: [
          {
            icon: "🎯",
            text: "<strong>Rigueur remarquable :</strong> Tu distingues clairement la trésorerie personnelle de celle du magasin et gardes l'œil ouvert."
          },
          {
            icon: "🚀",
            text: "<strong>Prêt pour la vitesse supérieure :</strong> Avec une telle discipline, un outil numérique te permettrait de piloter plusieurs boutiques ou d'augmenter tes marges."
          },
          {
            icon: "📊",
            text: "<strong>Gain de sérénité :</strong> Tu as les bons réflexes pour déléguer sans crainte et sécuriser ton investissement."
          }
        ]
      };
    }

    // Application du profil dans le DOM
    resultProfileTag.textContent = profileData.tag;
    resultProfileTag.style.color = profileData.tagColor;
    resultProfileTag.style.backgroundColor = profileData.tagBg;
    scoreCircleIndicator.style.stroke = profileData.circleColor;

    resultTitle.textContent = `${profileData.title} (${finalPercent}%)`;
    resultSummaryLabel.textContent = profileData.summaryLabel;
    resultSummaryDesc.textContent = profileData.summaryDesc;

    // Rendu des points d'analyse
    diagnosisPoints.innerHTML = "";
    profileData.points.forEach(item => {
      const row = document.createElement("div");
      row.className = "diag-item";
      row.innerHTML = `
        <span class="diag-item-bullet">${item.icon}</span>
        <div>${item.text}</div>
      `;
      diagnosisPoints.appendChild(row);
    });

    // Configuration du partage WhatsApp
    setupWhatsappShare(finalPercent, profileData.title);
  }

  // ================= ANIMATION COMPTEUR DU SCORE =================
  function animateScoreCounter(targetScore) {
    let current = 0;
    const duration = 1000;
    const stepTime = 15;
    const totalSteps = duration / stepTime;
    const increment = targetScore / totalSteps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        resultScoreNumber.textContent = targetScore;
        clearInterval(timer);
      } else {
        resultScoreNumber.textContent = Math.round(current);
      }
    }, stepTime);
  }

  // ================= CONFIGURATION DU PARTAGE WHATSAPP =================
  function setupWhatsappShare(score, title) {
    const siteUrl = window.location.href.split('#')[0];
    const message = `J'ai fait le diagnostic de gestion de mon commerce : j'ai obtenu ${score}% (${title}) ! 📊 Et toi, comment gères-tu tes stocks et ta caisse ? Fais le test rapide ici : ${siteUrl}`;
    const encoded = encodeURIComponent(message);
    btnShareWhatsapp.onclick = () => {
      window.open(`https://wa.me/?text=${encoded}`, "_blank");
    };
  }
});
