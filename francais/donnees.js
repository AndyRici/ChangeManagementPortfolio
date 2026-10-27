/*
  Cahier de français — données des exercices.

  Pour ajouter du contenu :
  - un exercice à trou :   f("Question avec ___", ["réponse", "variante acceptée"], "explication")
  - un QCM :               c("Question ___", ["option1", "option2"], "bonne option", "explication")
  - une erreur du cahier : ajouter un objet dans CARNET (voir le modèle plus bas).
  Les explications sont en portugais.
*/
(function () {
  function f(q, a, why) { return { q: q, a: [].concat(a), why: why || "" }; }
  function c(q, options, a, why) { return { type: "choix", q: q, options: options, a: [a], why: why || "" }; }
  var DEM = ["ce", "cet", "cette", "ces"];
  var PDEM = ["celui", "celle", "ceux", "celles"];

  var THEMES = [
    /* ------------------------------------------------------------ A2 */
    {
      id: "demonstratifs", niveau: "A2",
      titre: "Les adjectifs démonstratifs",
      resume: "ce, cet, cette, ces — h muet et h aspiré",
      rappel:
        '<table class="tbl"><tr><th>ce</th><td>masculin + consoante ou <b>h aspiré</b></td><td>ce mur, ce tableau, ce hall, ce haricot, ce héros</td></tr>' +
        '<tr><th>cet</th><td>masculin + vogal ou <b>h muet</b></td><td>cet immeuble, cet avion, cet hôtel, cet hôpital</td></tr>' +
        '<tr><th>cette</th><td>feminino</td><td>cette maison, cette femme, cette fleur</td></tr>' +
        '<tr><th>ces</th><td>plural (masc. e fem.)</td><td>ces murs, ces‿avions (liaison z), ces‿hommes, ces | héros (sem liaison)</td></tr></table>' +
        '<p>O <b>h aspiré</b> não se pronuncia, mas bloqueia a liaison e a elisão: <i>le héros, ce hall</i>. O <b>h muet</b> se comporta como vogal: <i>l\'hôtel, cet hôtel</i>.</p>',
      consigne: "Choisis le bon démonstratif.",
      exercices: [
        c("___ tableau", DEM, "ce", "Masculino + consoante."),
        c("___ immeuble", DEM, "cet", "Masculino + vogal → cet."),
        c("___ hôtel", DEM, "cet", "Hôtel tem h muet → cet."),
        c("___ haricot", DEM, "ce", "Haricot tem h aspiré → ce (e « les | haricots », sem liaison)."),
        c("___ fleur", DEM, "cette", "Fleur é feminino."),
        c("___ héros", DEM, "ce", "Héros tem h aspiré → ce héros."),
        c("___ hommes", DEM, "ces", "Plural → ces (com liaison: ces‿hommes)."),
        c("___ avion", DEM, "cet", "Masculino + vogal."),
        c("___ hall", DEM, "ce", "Hall tem h aspiré."),
        c("___ hôpital", DEM, "cet", "H muet → cet."),
        c("___ ami", DEM, "cet", "Ami é masculino e começa com vogal."),
        c("___ amie", DEM, "cette", "Amie é feminino → cette (a pronúncia é igual a cet)."),
        c("___ écharpe", DEM, "cette", "Écharpe é feminino."),
        c("___ appareil photo", DEM, "cet", "Appareil é masculino + vogal.")
      ]
    },
    {
      id: "pronoms-demonstratifs", niveau: "A2",
      titre: "Les pronoms démonstratifs",
      resume: "celui, celle, ceux, celles + -ci / -là",
      rappel:
        '<table class="tbl"><tr><th>celui</th><td>masculino singular</td><th>ceux</th><td>masculino plural</td></tr>' +
        '<tr><th>celle</th><td>feminino singular</td><th>celles</th><td>feminino plural</td></tr></table>' +
        '<p><b>-ci</b> = perto (este aqui) · <b>-là</b> = longe (aquele lá).<br>celui-ci = este aqui · celui-là = aquele · celle-ci = esta aqui · celle-là = aquela.</p>' +
        '<p>Também se usam com <b>de</b>, <b>qui</b>, <b>que</b>, <b>dont</b>: <i>celui de Paul, ceux qui travaillent</i>.</p>',
      consigne: "Choisis le bon pronom.",
      exercices: [
        c("Quel stylo tu veux ? — ___-ci.", PDEM, "celui", "Stylo é masculino singular."),
        c("Tu préfères quelle robe ? — ___-là, la rouge.", PDEM, "celle", "Robe é feminino singular."),
        c("Ces livres sont à toi ? — Non, ce sont ___ de Paul.", PDEM, "ceux", "Livres: masculino plural."),
        c("Je n'aime pas ces chaussures, je préfère ___ que tu portes.", PDEM, "celles", "Chaussures: feminino plural."),
        c("Mon appartement est petit ; ___ de ma sœur est grand.", PDEM, "celui", "Appartement: masculino singular."),
        c("Regarde ces deux maisons : ___-ci est ancienne.", PDEM, "celle", "Maison: feminino singular."),
        c("Les étudiants qui ont réussi sont ___ qui ont travaillé.", PDEM, "ceux", "Étudiants: masculino plural."),
        c("Ce film est ___ dont je t'ai parlé.", PDEM, "celui", "Film: masculino singular."),
        c("Quelles valises ? — ___ de Clara.", PDEM, "celles", "Valises: feminino plural.")
      ]
    },
    {
      id: "presentatifs", niveau: "A2",
      titre: "Les présentatifs",
      resume: "c'est, ce sont — négation et question",
      rappel:
        '<table class="tbl"><tr><th>singular</th><td>c\'est un / le stylo · c\'est une / la vaisselle</td></tr>' +
        '<tr><th>plural</th><td>ce sont des / les légumes</td></tr>' +
        '<tr><th>negação</th><td>ce n\'est pas un mur · ce ne sont pas des enfants</td></tr>' +
        '<tr><th>pergunta</th><td>est-ce que c\'est une fleur ? · est-ce que ce sont des enfants ?</td></tr></table>' +
        '<p>Com o verbo <b>être</b>, o artigo <i>un / des</i> não vira <i>de</i> na negação: <i>Ce ne sont pas <b>des</b> enfants.</i></p>',
      consigne: "Transforme ou complète.",
      exercices: [
        f("Mets à la forme négative : « C'est un mur. »", ["Ce n'est pas un mur."], "ce + ne + est → ce n'est pas."),
        f("Pose la question avec est-ce que : « C'est une fleur. »", ["Est-ce que c'est une fleur ?"]),
        f("Mets à la forme négative : « Ce sont des enfants. »", ["Ce ne sont pas des enfants."], "Com être, mantém-se « des »."),
        f("Pose la question avec est-ce que : « Ce sont des enfants. »", ["Est-ce que ce sont des enfants ?"]),
        c("___ des légumes.", ["C'est", "Ce sont"], "Ce sont", "Plural → ce sont."),
        c("Qu'est-ce que c'est ? — ___ un livre.", ["C'est", "Ce sont"], "C'est"),
        c("C'est la ___ de ma grand-mère.", ["vasselle", "vaisselle"], "vaisselle", "Ortografia: vai-sselle (louça)."),
        f("Mets à la forme négative : « C'est une fleur. »", ["Ce n'est pas une fleur."])
      ]
    },
    {
      id: "possessifs", niveau: "A2",
      titre: "Adjectifs et pronoms possessifs",
      resume: "mon / ma / mes, le mien, la sienne, les leurs…",
      rappel:
        '<table class="tbl"><tr><th>je</th><td>mon, ma, mes</td><td>le mien, la mienne, les miens, les miennes</td></tr>' +
        '<tr><th>tu</th><td>ton, ta, tes</td><td>le tien, la tienne, les tiens, les tiennes</td></tr>' +
        '<tr><th>il / elle</th><td>son, sa, ses</td><td>le sien, la sienne, les siens, les siennes</td></tr>' +
        '<tr><th>nous</th><td>notre, nos</td><td>le / la nôtre, les nôtres</td></tr>' +
        '<tr><th>vous</th><td>votre, vos</td><td>le / la vôtre, les vôtres</td></tr>' +
        '<tr><th>ils / elles</th><td>leur, leurs</td><td>le / la leur, les leurs</td></tr></table>' +
        '<p><b>Atenção:</b> son / sa / ses concordam com o <b>objeto</b>, não com o dono. <i>La montre de Paul → <b>sa</b> montre → la sienne.</i> Os lunettes de Tania → <b>ses</b> lunettes → <b>les siennes</b> (uma dona = sien, não leur).</p>' +
        '<p>Feminino com vogal usa <b>mon / ton / son</b>: <i>mon amie, son école</i>.</p>' +
        '<p>Modelo: <i>C\'est un livre. C\'est le livre de Michel. C\'est à lui. C\'est son livre. C\'est le sien.</i></p>',
      consigne: "Complète avec le bon possessif.",
      exercices: [
        f("C'est ton livre ou mon livre ? — C'est ___ (= mon livre).", ["le mien"]),
        f("Ce n'est pas mon stylo, c'est ___ (= ton stylo).", ["le tien"]),
        f("Ta maison est grande, ___ (= notre maison) est petite.", ["la nôtre"], "Pronome: nôtre com acento circunflexo."),
        f("Mes enfants et ___ (= leurs enfants) jouent ensemble.", ["les leurs"]),
        f("Ce sont tes clés ? — Oui, ce sont ___.", ["les miennes"], "Clés é feminino plural."),
        f("Paul a sa voiture et Marie a ___.", ["la sienne"]),
        c("C'est la montre de ma sœur. C'est ___ montre.", ["son", "sa"], "sa", "Montre é feminino; o gênero da dona não importa."),
        c("C'est la cravate de papa. C'est ___ cravate.", ["son", "sa"], "sa", "Cravate é feminino → sa, mesmo sendo do pai."),
        c("Ce sont les clés de maman. Ce sont ___ clés.", ["sa", "ses", "leurs"], "ses", "Plural, uma dona → ses."),
        f("Ce sont les lunettes de Tania. Ce sont les ___.", ["siennes"], "Uma dona (Tania) → sien(ne)s, não leurs."),
        f("Ce sont les carnets des enfants. Ce sont les ___.", ["leurs"], "Vários donos → leur(s)."),
        f("C'est le cahier de Camille. C'est à ___.", ["elle"], "À + pronome tônico."),
        c("Elle aime ___ école.", ["son", "sa"], "son", "Feminino começando por vogal → son."),
        f("Vos idées sont bonnes, mais ___ (= nos idées) sont meilleures.", ["les nôtres"])
      ]
    },
    {
      id: "toniques", niveau: "A2",
      titre: "Les pronoms toniques",
      resume: "moi, toi, lui, elle, nous, vous, eux, elles",
      rappel:
        '<table class="tbl"><tr><th>je</th><td>moi</td><th>nous</th><td>nous</td></tr><tr><th>tu</th><td>toi</td><th>vous</th><td>vous</td></tr>' +
        '<tr><th>il / elle</th><td>lui / elle</td><th>ils / elles</th><td>eux / elles</td></tr></table>' +
        '<p>Usos: para insistir (<i>Moi, je préfère le café</i>), depois de preposição (<i>avec toi, chez eux, à lui</i>), depois de c\'est (<i>c\'est moi</i>) e com <b>penser à / s\'intéresser à + pessoa</b> (<i>je pense à lui</i>).</p>',
      consigne: "Complète avec le pronom tonique.",
      exercices: [
        f("Qui veut du gâteau ? — ___ ! (je)", ["moi"]),
        f("Je pense à Paul. → Je pense à ___.", ["lui"]),
        f("Elle pense à ses parents. → Elle pense à ___.", ["eux"]),
        f("Il pense à ses sœurs. → Il pense à ___.", ["elles"]),
        f("Tu viens avec ___ ? (nous)", ["nous"]),
        f("Chez ___ (ils), on mange tard.", ["eux"]),
        f("C'est ___ qui as appelé ? (tu)", ["toi"]),
        f("Il est plus grand que ___ (je).", ["moi"]),
        f("Michel s'intéresse à Lisa. → Il s'intéresse à ___.", ["elle"], "S'intéresser à + pessoa → pronome tônico, não lui.")
      ]
    },
    {
      id: "present", niveau: "A2",
      titre: "Le présent",
      resume: "1er, 2e groupe et irréguliers fréquents",
      rappel:
        '<table class="tbl"><tr><th>parler</th><td>je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent</td></tr>' +
        '<tr><th>finir</th><td>je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent</td></tr>' +
        '<tr><th>être</th><td>suis, es, est, sommes, êtes, sont</td></tr><tr><th>avoir</th><td>ai, as, a, avons, avez, ont</td></tr>' +
        '<tr><th>aller</th><td>vais, vas, va, allons, allez, vont</td></tr><tr><th>faire</th><td>fais, fais, fait, faisons, faites, font</td></tr>' +
        '<tr><th>venir</th><td>viens, viens, vient, venons, venez, viennent</td></tr><tr><th>prendre</th><td>prends, prends, prend, prenons, prenez, prennent</td></tr>' +
        '<tr><th>pouvoir</th><td>peux, peux, peut, pouvons, pouvez, peuvent</td></tr><tr><th>vouloir</th><td>veux, veux, veut, voulons, voulez, veulent</td></tr>' +
        '<tr><th>devoir</th><td>dois, dois, doit, devons, devez, doivent</td></tr></table>',
      consigne: "Conjugue au présent.",
      exercices: [
        f("Nous ___ (finir) à six heures.", ["finissons"]),
        f("Ils ___ (finir) leur travail.", ["finissent"]),
        f("Vous ___ (parler) bien français.", ["parlez"]),
        f("Nous ___ (être) très heureux de te revoir.", ["sommes"]),
        f("Que ___ (faire)-vous dans cette situation ?", ["faites"], "Vous faites — nunca « faisez ». Erro do teu exame."),
        f("Ils ___ (faire) les courses.", ["font"]),
        f("Demain, ils ___ (aller) au musée.", ["vont"]),
        f("Ils ___ (venir) de Colombie.", ["viennent"]),
        f("Ils ___ (prendre) le métro.", ["prennent"]),
        f("Je ne ___ (pouvoir) pas t'aider.", ["peux"]),
        f("Ils ___ (vouloir) rester.", ["veulent"]),
        f("Vous ___ (devoir) rendre vos copies.", ["devez"]),
        f("Il ___ (vouloir) terminer avant midi.", ["veut"]),
        f("Nous ne ___ (savoir) pas pourquoi elle est partie.", ["savons"])
      ]
    },

    /* ------------------------------------------------------------ B1 */
    {
      id: "passe-compose", niveau: "B1",
      titre: "Le passé composé : être ou avoir",
      resume: "verbes de mouvement, accord, monter l'escalier",
      rappel:
        '<p><b>Être</b> + aller, venir, arriver, partir, tomber, rester, naître, mourir, entrer, rentrer, retourner, monter, descendre, sortir, passer, devenir, revenir… + <b>todos os pronominais</b> (elle s\'est couchée).</p>' +
        '<p>Com être, o particípio concorda com o sujeito: <i>Ils sont arrivé<b>s</b>, elles sont arrivé<b>es</b>.</i></p>' +
        '<p><b>Monter, descendre, sortir, passer, rentrer, retourner</b> usam <b>avoir</b> quando têm objeto direto:<br>' +
        '<i>Elle est montée.</i> (sujeito) · <i>Elle <b>a</b> monté l\'escalier.</i> (sujeito + objeto)<br><i>Ils sont sortis.</i> · <i>Ils <b>ont</b> sorti leurs chiens.</i></p>' +
        '<p>Particípios: allé, venu, arrivé, parti, tombé, resté, né, mort, entré, monté, descendu, sorti, passé, retourné.</p>',
      consigne: "Choisis ou complète.",
      exercices: [
        c("Elle ___ montée.", ["est", "a"], "est", "Sem objeto → être."),
        c("Elle ___ monté l'escalier.", ["est", "a"], "a", "Com objeto direto (l'escalier) → avoir, sem concordância."),
        f("Ils sont ___ (arriver).", ["arrivés"]),
        f("Elles sont ___ (arriver).", ["arrivées"]),
        f("Elle s'est ___ (coucher) tard.", ["couchée"]),
        f("Je suis ___ (naître) en 1990. (une femme parle)", ["née"]),
        c("Ils ___ leurs chiens.", ["sont sortis", "ont sorti"], "ont sorti", "Sortir + objeto (leurs chiens) → avoir. Erro do teu exercício."),
        c("Elle ___ la poubelle au local poubelle.", ["est descendue", "a descendu"], "a descendu", "Descendre + objeto → avoir."),
        c("Elles ___ à gauche.", ["n'ont pas tourné", "ne sont pas tournées"], "n'ont pas tourné", "Tourner não é verbo de movimento com être → avoir."),
        c("Ils ___ les tables.", ["sont retournés", "ont retourné"], "ont retourné", "Retourner + objeto (= virar) → avoir."),
        f("Il faut travailler. → Il ___ travailler.", ["a fallu"]),
        f("Elle passe chez moi. → Elle est ___ chez moi.", ["passée"]),
        f("Ils restent chez nous. → Ils sont ___ chez nous.", ["restés"])
      ]
    },
    {
      id: "present-passe-compose", niveau: "B1",
      titre: "Du présent au passé composé",
      resume: "20 phrases de ton cahier à transformer",
      rappel:
        '<p>Passos: 1) être ou avoir? 2) particípio certo (irregulares: eu, fait, pu, voulu, dû, fallu, pris, mis, né) 3) concordância se for être.</p>' +
        '<p>Na inversão, o pronome vai depois do auxiliar: <i>Peuvent-ils partir ? → <b>Ont-ils pu</b> partir ?</i> · <i>Quand faut-il ? → Quand <b>a-t-il</b> fallu ?</i></p>' +
        '<p><b>Se laver les mains</b>: o objeto direto é « les mains », depois do verbo → <b>sem concordância</b>: <i>elles se sont lavé les mains</i>.</p>',
      consigne: "Mets la phrase au passé composé.",
      exercices: [
        f("Ils vont chez nous.", ["Ils sont allés chez nous."]),
        f("Elles ont deux maisons.", ["Elles ont eu deux maisons.", "Elles ont eu 2 maisons."]),
        f("Nous faisons la vaisselle.", ["Nous avons fait la vaisselle."]),
        f("Vous allez où ?", ["Vous êtes allé où ?", "Vous êtes allée où ?", "Vous êtes allés où ?", "Vous êtes allées où ?", "Où êtes-vous allé ?", "Où êtes-vous allés ?", "Où êtes-vous allée ?", "Où êtes-vous allées ?"]),
        f("D'où venez-vous ?", ["D'où êtes-vous venu ?", "D'où êtes-vous venue ?", "D'où êtes-vous venus ?", "D'où êtes-vous venues ?"]),
        f("Pourquoi ils ne font rien ?", ["Pourquoi ils n'ont rien fait ?", "Pourquoi n'ont-ils rien fait ?"], "« Rien » fica entre o auxiliar e o particípio."),
        f("Peuvent-ils partir ?", ["Ont-ils pu partir ?"]),
        f("Veulent-elles rester ?", ["Ont-elles voulu rester ?"]),
        f("Ils doivent manger.", ["Ils ont dû manger."], "Dû leva acento circunflexo."),
        f("Quand faut-il partir ?", ["Quand a-t-il fallu partir ?"], "a-t-il: o t evita o encontro de vogais."),
        f("Que prennent-ils au déjeuner ?", ["Qu'ont-ils pris au déjeuner ?"]),
        f("Que mettez-vous dans la salade ?", ["Qu'avez-vous mis dans la salade ?"]),
        f("Ils se réveillent tôt.", ["Ils se sont réveillés tôt."]),
        f("Vous descendez quelle rue ?", ["Vous avez descendu quelle rue ?", "Quelle rue avez-vous descendue ?"], "Descendre + objeto (la rue) → avoir."),
        f("Ils montent à quel étage ?", ["Ils sont montés à quel étage ?", "À quel étage sont-ils montés ?"]),
        f("Comment se lavent-elles les mains ?", ["Comment se sont-elles lavé les mains ?"], "Objeto direto (les mains) depois do verbo → lavé, sem concordância."),
        f("Ils naissent en quelle année ?", ["Ils sont nés en quelle année ?", "En quelle année sont-ils nés ?"]),
        f("Vous restez chez eux ?", ["Vous êtes resté chez eux ?", "Vous êtes restée chez eux ?", "Vous êtes restés chez eux ?", "Vous êtes restées chez eux ?"]),
        f("Ils passent chez Paul ?", ["Ils sont passés chez Paul ?"]),
        f("Vous sortez les meubles ?", ["Vous avez sorti les meubles ?"], "Sortir + objeto → avoir.")
      ]
    },
    {
      id: "imparfait", niveau: "B1",
      titre: "Imparfait ou passé composé",
      resume: "durée, répétition, ambiance vs action ponctuelle",
      rappel:
        '<p><b>Formação</b>: radical de <i>nous</i> no presente + ais, ais, ait, ions, iez, aient. <i>Nous marchons → je marchais, nous marchions, ils marchaient.</i> Exceção: être → j\'étais.</p>' +
        '<table class="tbl"><tr><th>Imparfait</th><td>cenário de um filme: duração, descrição, hábito/repetição, ambiente, sentimentos<br><i>Quand j\'étais petite, j\'étais un peu timide. Tous les samedis, j\'allais à la bibliothèque. Il faisait chaud.</i></td></tr>' +
        '<tr><th>Passé composé</th><td>evento/ação pontual, com começo e fim: <i>tout à coup, soudain, un jour</i><br><i>Tout à coup, j\'ai raté une marche.</i></td></tr></table>' +
        '<p>Truque: <i>« Je dormais quand soudain j\'ai entendu un cri »</i> — o cenário (imparfait) é interrompido pelo evento (passé composé).</p>',
      consigne: "Choisis le bon temps.",
      exercices: [
        c("Quand j'___ petite, j'étais un peu timide.", ["étais", "ai été"], "étais", "Descrição de um período."),
        c("Quand j'étais étudiante, tous les samedis j'___ à la bibliothèque.", ["allais", "suis allée"], "allais", "Repetição → imparfait."),
        c("Je dormais quand soudain ___ un cri.", ["j'entendais", "j'ai entendu"], "j'ai entendu", "Soudain = evento pontual. Erro do teu exercício."),
        c("J'ai pris mon parapluie parce qu'___ depuis le matin.", ["il pleuvait", "il a plu"], "il pleuvait", "Depuis le matin = situação que dura."),
        c("Une voiture a renversé la dame alors qu'elle ___ la rue.", ["traversait", "a traversé"], "traversait", "Ação em andamento (alors que) → imparfait."),
        c("J'étais dans mon bain quand le téléphone ___.", ["sonnait", "a sonné"], "a sonné", "Evento que interrompe."),
        c("J'ai fermé la fenêtre parce qu'il ___ froid.", ["faisait", "a fait"], "faisait"),
        c("J'étais fatiguée. ___ mal à la tête.", ["J'étais", "J'avais"], "J'avais", "Avoir mal à la tête — com avoir, não être."),
        c("Tout à coup, le téléphone ___.", ["sonnait", "a sonné"], "a sonné"),
        c("L'année dernière, chaque matin, nous ___ le petit-déjeuner au café.", ["prenions", "avons pris"], "prenions", "Chaque matin = hábito → imparfait."),
        f("nous ___ (marcher, imparfait)", ["marchions"]),
        f("ils ___ (marcher, imparfait)", ["marchaient"]),
        f("nous ___ (finir, imparfait)", ["finissions"])
      ]
    },
    {
      id: "plus-que-parfait", niveau: "B1",
      titre: "Le plus-que-parfait",
      resume: "une action passée avant une autre action passée",
      rappel:
        '<p><b>Formação</b>: être / avoir no imparfait + particípio passado. <i>J\'avais fini, elle était partie.</i></p>' +
        '<p>Indica uma ação que aconteceu <b>antes</b> de outra no passado: <i>Quand Paul est arrivé, Marie s\'était déjà réveillée.</i></p>' +
        '<p><b>Concordância</b>: com avoir, se o objeto direto vem antes, o particípio concorda. <i>La lettre que j\'avais envoy<b>ée</b> · les bagages qu\'ils avaient laissé<b>s</b>.</i></p>' +
        '<p>Negação: <i>elle <b>n\'</b>avait <b>pas</b> arrosé les plantes.</i></p>',
      consigne: "Complète au plus-que-parfait.",
      exercices: [
        f("Quand Paul est arrivé, Marie s'___ déjà réveillée.", ["était"]),
        f("Quand Albert est rentré, Lisa ___ déjà partie.", ["était"]),
        f("Quand tu m'as appelé, j'___ déjà déjeuné.", ["avais"]),
        f("Quand ils sont arrivés, l'immeuble ___ déjà été démoli.", ["avait"]),
        f("Bernard a répondu à la lettre que j'___ (envoyer) en février.", ["avais envoyée"], "La lettre (fem.) vem antes → envoyée."),
        f("J'ai revu les amis que nous ___ (connaître) en Grèce.", ["avions connus"], "Les amis vem antes → connus."),
        f("Hier soir, je n'ai plus retrouvé l'endroit où j'___ (garer) ma voiture.", ["avais garé"]),
        f("Elle a raté le train parce qu'elle ___ (se lever) trop tard.", ["s'était levée"]),
        f("Hier, la femme de ménage ___ (ne pas arroser) les plantes.", ["n'avait pas arrosé"], "Negação: n'avait pas + particípio."),
        f("Ils m'ont rendu le livre que je leur ___ (prêter).", ["avais prêté"]),
        c("Quand il m'a vu, il m'___.", ["embrassait", "a embrassé", "avait embrassé"], "a embrassé", "Depois (après) da chegada → passé composé. Erro do teu exercício.")
      ]
    },
    {
      id: "futur", niveau: "B1",
      titre: "Futur simple et futur antérieur",
      resume: "je serai, j'aurai fini — quand + futur",
      rappel:
        '<p><b>Futur simple</b>: infinitivo + ai, as, a, ons, ez, ont. Irregulares: être → ser-, avoir → aur-, aller → ir-, faire → fer-, venir → viendr-, pouvoir → pourr-, vouloir → voudr-, devoir → devr-, voir → verr-, savoir → saur-, falloir → faudr-.</p>' +
        '<p><b>Futur antérieur</b>: être / avoir no futur simple + particípio. Ação futura que acontece <b>antes</b> de outra ação futura.<br>' +
        '<i>Quand j\'<b>aurai fini</b> mon repas, je t\'<b>appellerai</b>.</i></p>' +
        '<p>Em francês, depois de <b>quand / dès que</b> com sentido futuro, usa-se o futuro (não o presente como em português): <i>Revenez me voir quand vous <b>aurez terminé</b>.</i></p>',
      consigne: "Conjugue.",
      exercices: [
        f("je ___ (être, futur)", ["serai"]),
        f("nous ___ (avoir, futur)", ["aurons"]),
        f("ils ___ (aller, futur)", ["iront"]),
        f("Nous ___ (faire, futur) l'exercice n° 3.", ["ferons"], "Faire → fer-. Erro do teu exercício (faisons)."),
        f("il ___ (venir, futur)", ["viendra"]),
        f("vous ___ (vouloir, futur)", ["voudrez"]),
        f("je t'___ (appeler, futur)", ["appellerai"]),
        f("Quand j'___ (finir) mon repas, je t'appellerai.", ["aurai fini"]),
        f("Quand Ana se ___ (réveiller), nous mangerons.", ["sera réveillée"]),
        f("Quand ils ___ (arriver), nous mettrons la table.", ["seront arrivés"]),
        f("Téléphonez-moi quand vous ___ (réfléchir) à ma proposition.", ["aurez réfléchi"], "Particípio de réfléchir: réfléchi."),
        f("Quand on ___ (remplacer) le pétrole par l'énergie solaire, la couche d'ozone se reconstituera.", ["aura remplacé"]),
        f("Quand on aura interrompu la destruction des forêts, la nature ___ (revivre).", ["revivra"]),
        c("Dès que tu ___ tes devoirs, tu pourras sortir.", ["auras fini", "finiras"], "auras fini")
      ]
    },
    {
      id: "cod", niveau: "B1",
      titre: "Les pronoms COD",
      resume: "me, te, le, la, nous, vous, les — et l'accord",
      rappel:
        '<p>O COD substitui um complemento <b>sem preposição</b>: <i>j\'appelle Marie → je l\'appelle</i>.</p>' +
        '<p>Posição: antes do verbo conjugado, antes do auxiliar no passé composé, antes do infinitivo com aller / pouvoir: <i>je vais l\'appeler</i>.</p>' +
        '<p><b>Concordância</b>: no passé composé com avoir, o particípio concorda com o COD que vem antes: <i>Marie → je l\'ai appelé<b>e</b> · Marie et Lisa → je les ai appelé<b>es</b></i>. Só acontece com o pronome direto.</p>',
      consigne: "Réponds avec un pronom COD.",
      exercices: [
        f("Tu appelles Marie ? — Oui, …", ["Oui, je l'appelle."]),
        f("Tu as appelé Marie ? — Oui, …", ["Oui, je l'ai appelée."], "Concordância com l' (Marie)."),
        f("Tu as appelé Marie et Lisa ? — Non, …", ["Non, je ne les ai pas appelées."]),
        f("Tu vas appeler Marie ? — Oui, …", ["Oui, je vais l'appeler."]),
        f("Tu vas appeler Marie et Lisa ? — Non, …", ["Non, je ne vais pas les appeler."]),
        f("Tu regardes la télé ? — Oui, …", ["Oui, je la regarde."]),
        f("Elle a pris les clés ? — Oui, …", ["Oui, elle les a prises."]),
        f("Tu as fait la vaisselle ? — Oui, …", ["Oui, je l'ai faite."]),
        f("Elle va repasser les chemises ? — Non, …", ["Non, elle ne va pas les repasser."], "Les chemises (artigo definido) → les, não en."),
        f("Avez-vous éteint les lumières ? — Non, …", ["Non, je ne les ai pas éteintes.", "Non, nous ne les avons pas éteintes."])
      ]
    },
    {
      id: "coi", niveau: "B1",
      titre: "Les pronoms COI",
      resume: "me, te, lui, nous, vous, leur",
      rappel:
        '<p>O COI substitui <b>à + pessoa</b>: <i>je téléphone à Lisa → je lui téléphone</i>.</p>' +
        '<table class="tbl"><tr><th>lui</th><td>masc. e fem. singular</td></tr><tr><th>leur</th><td>masc. e fem. plural — <b>nunca leva s</b></td></tr></table>' +
        '<p><b>leur</b> (pronome) ≠ <b>leurs</b> (possessivo): <i>Ils écrivent à leur<b>s</b> parents → ils <b>leur</b> écrivent.</i></p>' +
        '<p>Sem concordância do particípio com o COI: <i>je lui ai écrit</i>.</p>' +
        '<p>Exceção: <b>penser à, s\'intéresser à + pessoa</b> → pronome tônico: <i>je pense à lui</i>.</p>',
      consigne: "Réponds avec un pronom COI.",
      exercices: [
        f("Tu téléphones à Lisa ? — Oui, …", ["Oui, je lui téléphone."]),
        f("Ils écrivent à leurs parents ? — Oui, …", ["Oui, ils leur écrivent."]),
        f("Tes parents te téléphonent tous les jours ? — Oui, …", ["Oui, ils me téléphonent tous les jours."]),
        f("Tu dis bonjour à tes voisins ? — Oui, …", ["Oui, je leur dis bonjour."], "Leur sem s."),
        f("Élise a écrit à sa mère ? — Non, …", ["Non, elle ne lui a pas écrit."]),
        f("Tu parles à ton professeur ? — Oui, …", ["Oui, je lui parle."]),
        c("Ils ___ écrivent (à leurs parents).", ["leur", "leurs"], "leur", "Pronome → leur."),
        c("Ils écrivent à ___ parents.", ["leur", "leurs"], "leurs", "Possessivo plural → leurs."),
        f("Tu penses à Paul ? — Oui, …", ["Oui, je pense à lui."], "Penser à + pessoa → tônico."),
        f("Qui a répondu au prof ? — Personne ne ___ a répondu.", ["lui"])
      ]
    },
    {
      id: "en-y", niveau: "B1",
      titre: "Les pronoms EN et Y",
      resume: "j'en ai besoin, j'y vais, il y en a",
      rappel:
        '<table class="tbl"><tr><th>EN</th><td>substitui <b>de + coisa</b> e quantidades (du, de la, des, un, beaucoup de): <i>j\'ai besoin de ce livre → j\'en ai besoin · il y a du soleil → il y en a</i></td></tr>' +
        '<tr><th>Y</th><td>substitui <b>à + coisa</b> ou um lugar: <i>je vais à Paris → j\'y vais · je pense à ce projet → j\'y pense</i></td></tr></table>' +
        '<p>Y não serve para pessoas: <i>je pense à Paul → je pense à <b>lui</b></i>.</p>' +
        '<p>Posições: <i>il n\'y en a pas eu</i> (passé composé) · <i>il va y en avoir</i> (futur proche) · <i>je ne vais pas y aller</i>.</p>' +
        '<p>Artigo definido (le, la, les) → COD, não en: <i>ces problèmes → les</i>.</p>',
      consigne: "Réponds avec en ou y.",
      exercices: [
        f("Tu as besoin de ce livre ? — Oui, …", ["Oui, j'en ai besoin."]),
        f("Tu as eu besoin de ce livre ? — Non, …", ["Non, je n'en ai pas eu besoin."]),
        f("Tu vas avoir besoin de ce livre ? — Non, …", ["Non, je ne vais pas en avoir besoin."]),
        f("Il y a du soleil aujourd'hui ? — Oui, …", ["Oui, il y en a."]),
        f("Il y a eu du soleil hier ? — Non, …", ["Non, il n'y en a pas eu."]),
        f("Il va y avoir du soleil demain ? — Oui, …", ["Oui, il va y en avoir."]),
        f("Tu vas à Paris ? — Oui, …", ["Oui, j'y vais."]),
        f("Tu es allée à Paris ? — Non, …", ["Non, je n'y suis pas allée.", "Non, je n'y suis pas allé."]),
        f("Tu vas aller à Paris ? — Non, …", ["Non, je ne vais pas y aller."]),
        f("Elles voyagent au Brésil ? — Non, …", ["Non, elles n'y voyagent pas."]),
        f("Tu t'intéresses à ce projet ? — Oui, …", ["Oui, je m'y intéresse."]),
        f("Tu t'es intéressée à ce projet ? — Non, …", ["Non, je ne m'y suis pas intéressée.", "Non, je ne m'y suis pas intéressé."]),
        f("Vous allez vous servir de cette machine ? — Non, …", ["Non, je ne vais pas m'en servir.", "Non, nous n'allons pas nous en servir."]),
        f("Buvez-vous de la bière ? — Non, …", ["Non, nous n'en buvons pas.", "Non, je n'en bois pas."]),
        f("Avez-vous moulu du café ? — Non, …", ["Non, je n'en ai pas moulu.", "Non, nous n'en avons pas moulu."])
      ]
    },
    {
      id: "conditionnel", niveau: "B1",
      titre: "Le conditionnel présent et passé",
      resume: "je voudrais, j'aurais dû, au cas où",
      rappel:
        '<p><b>Présent</b>: radical do futur simple + terminações do imparfait: <i>je serais, j\'aurais, nous pourrions, ils iraient</i>.</p>' +
        '<p><b>Passé</b>: être / avoir no conditionnel présent + particípio: <i>j\'aurais été, je serais allée, je me serais réveillée</i>.</p>' +
        '<p>Usos: polidez (<i>vous pourriez m\'aider ?</i>), conselho (<i>tu devrais</i>), arrependimento (<i>j\'aurais aimé, j\'aurais dû</i>), hipótese, e depois de <b>au cas où</b>: <i>Appelez-moi au cas où vous auriez un problème.</i></p>' +
        '<p><b>sinon</b> + conditionnel passé: <i>Je ne savais pas qu\'il y avait une fête, sinon je serais allée.</i></p>',
      consigne: "Conjugue au conditionnel.",
      exercices: [
        f("je ___ (être, conditionnel présent)", ["serais"]),
        f("nous ___ (avoir, conditionnel présent)", ["aurions"]),
        f("Tu ___ (vouloir) un café ?", ["voudrais"]),
        f("Vous ___ (pouvoir) m'aider, s'il vous plaît ?", ["pourriez"]),
        f("À ta place, je ___ (partir) plus tôt.", ["partirais"]),
        f("Tu ___ (devoir, passé) me le dire.", ["aurais dû"]),
        f("Bien sûr, on ___ (connaître) tout le monde.", ["connaîtrait"]),
        f("Avertissez-moi au cas où vous ___ (quitter) votre appartement.", ["quitteriez"]),
        f("Achète une pizza, au cas où il y ___ (avoir) des invités.", ["aurait"]),
        f("Je ne savais pas qu'il y avait une fête, sinon je ___ (aller).", ["serais allée", "serais allé"]),
        f("J'ai oublié l'anniversaire de Marie, sinon je lui ___ (donner) un cadeau.", ["aurais donné"]),
        f("Je ne savais pas que vous n'aimiez pas le fromage, sinon je ne vous en ___ (servir).", ["aurais pas servi"], "Ne … pas em volta do auxiliar: je ne vous en aurais pas servi.")
      ]
    },

    /* ------------------------------------------------------------ B2 */
    {
      id: "pronominaux", niveau: "B2",
      titre: "Passé composé des verbes pronominaux",
      resume: "se sont parlé ou se sont appelés ?",
      rappel:
        '<p>Todos os pronominais usam <b>être</b>. A concordância depende do papel do <b>se</b>:</p>' +
        '<table class="tbl"><tr><th>se = COD</th><td>concorda: <i>s\'appeler qqn, se regarder, s\'aimer, se détester</i> → <i>ils se sont appelé<b>s</b>, elles se sont regardé<b>es</b></i></td></tr>' +
        '<tr><th>se = COI</th><td>não concorda: <i>parler <b>à</b>, écrire <b>à</b>, téléphoner <b>à</b></i> → <i>ils se sont parlé, ils se sont écrit, elles se sont téléphoné</i></td></tr>' +
        '<tr><th>objeto depois</th><td>não concorda: <i>elles se sont lavé <b>les mains</b>, ils se sont fait un café</i></td></tr></table>' +
        '<p>Pergunta-teste: « on parle <b>à</b> quelqu\'un ? » Se tem <b>à</b>, não concorda.</p>',
      consigne: "Mets au passé composé.",
      exercices: [
        f("Ils se parlent.", ["Ils se sont parlé."], "Parler à → se é COI → sem concordância."),
        f("Ils s'écrivent.", ["Ils se sont écrit."], "Écrire à → sem concordância."),
        f("Elles se téléphonent.", ["Elles se sont téléphoné."]),
        f("Ils s'appellent.", ["Ils se sont appelés."], "Appeler qqn → se é COD → concorda."),
        f("Elles se regardent.", ["Elles se sont regardées."]),
        f("Elles s'aiment.", ["Elles se sont aimées."]),
        f("Ils se détestent.", ["Ils se sont détestés."]),
        f("Ils se font un café.", ["Ils se sont fait un café."]),
        f("Ils se lavent les pieds.", ["Ils se sont lavé les pieds."], "Objeto (les pieds) depois → lavé, sem s. Erro do teu exercício."),
        f("Elles se brossent les dents.", ["Elles se sont brossé les dents."]),
        f("Elle se déshabille.", ["Elle s'est déshabillée."]),
        f("Elles rentrent dans la salle.", ["Elles sont rentrées dans la salle."]),
        f("Elles rentrent leurs mots de passe.", ["Elles ont rentré leurs mots de passe."], "Rentrer + objeto → avoir.")
      ]
    },
    {
      id: "irreguliers", niveau: "B2",
      titre: "Verbes irréguliers difficiles",
      resume: "bouillir, moudre, vaincre, résoudre, émouvoir…",
      rappel:
        '<table class="tbl"><tr><th>infinitif</th><th>il / ils (présent)</th><th>nous</th><th>participe</th></tr>' +
        '<tr><td>bouillir</td><td>bout / bouillent</td><td>bouillons</td><td>bouilli</td></tr>' +
        '<tr><td>coudre</td><td>coud / cousent</td><td>cousons</td><td>cousu</td></tr>' +
        '<tr><td>moudre</td><td>moud / moulent</td><td>moulons</td><td>moulu</td></tr>' +
        '<tr><td>émouvoir</td><td>émeut / émeuvent</td><td>émouvons</td><td>ému</td></tr>' +
        '<tr><td>vaincre</td><td>vainc / vainquent</td><td>vainquons</td><td>vaincu</td></tr>' +
        '<tr><td>convaincre</td><td>convainc / convainquent</td><td>convainquons</td><td>convaincu</td></tr>' +
        '<tr><td>interrompre</td><td>interrompt / interrompent</td><td>interrompons</td><td>interrompu</td></tr>' +
        '<tr><td>résoudre</td><td>résout / résolvent</td><td>résolvons</td><td>résolu</td></tr>' +
        '<tr><td>dissoudre</td><td>dissout / dissolvent</td><td>dissolvons</td><td>dissous, dissoute</td></tr>' +
        '<tr><td>conclure</td><td>conclut / concluent</td><td>concluons</td><td>conclu</td></tr>' +
        '<tr><td>inclure</td><td>inclut / incluent</td><td>incluons</td><td><b>inclus</b>, incluse</td></tr>' +
        '<tr><td>distraire</td><td>distrait / distraient</td><td>distrayons</td><td>distrait</td></tr>' +
        '<tr><td>joindre / peindre / éteindre</td><td>joint, peint, éteint / joignent, peignent, éteignent</td><td>joignons…</td><td>joint, peint, éteint</td></tr>' +
        '<tr><td>fuir</td><td>fuit / fuient</td><td>fuyons</td><td>fui</td></tr>' +
        '<tr><td>s\'asseoir</td><td>s\'assied (s\'assoit) / s\'asseyent</td><td>nous asseyons</td><td>assis</td></tr>' +
        '<tr><td>cuire / luire</td><td>cuit, luit</td><td>cuisons</td><td>cuit, lui</td></tr></table>' +
        '<p>Não confunda: <b>l\'eau bout</b> (bouillir) ≠ <i>il boit</i> (boire).</p>',
      consigne: "Conjugue au présent ou donne le participe passé.",
      exercices: [
        f("L'eau ___ (bouillir) depuis plusieurs minutes.", ["bout"], "Bouillir → bout. « Boit » é do verbo boire. Erro do teu exame."),
        f("Ma grand-mère ___ (coudre) ses vêtements à la main.", ["coud"]),
        f("Le meunier ___ (moudre) le blé.", ["moud"]),
        f("Ce film m'___ (émouvoir) profondément.", ["émeut"], "Il émeut (com t). Erro do teu exercício: « émeus »."),
        f("Les soldats ___ (vaincre) leurs ennemis.", ["vainquent"]),
        f("Il ___ (convaincre) le jury.", ["convainc"], "Il convainc — sem s e sem t. Erro do teu exercício."),
        f("Elle ___ (interrompre) la réunion.", ["interrompt"]),
        f("Ce spectacle ___ (distraire) les spectateurs.", ["distrait"], "Ortografia: dis-trait."),
        f("Nous ___ (inclure) tous les détails.", ["incluons"]),
        f("Ils ___ (conclure) un accord.", ["concluent"]),
        f("Ils ___ (résoudre) le problème.", ["résolvent"]),
        f("Nous nous ___ (s'asseoir) sur un banc.", ["asseyons", "assoyons"]),
        f("Les oiseaux ___ (fuir) à notre approche.", ["fuient"]),
        f("Nous ___ (joindre) les documents.", ["joignons"]),
        f("J'___ (éteindre) la lumière.", ["éteins"]),
        f("Participe passé de dissoudre (masc.) :", ["dissous"]),
        f("Participe passé de inclure (masc.) :", ["inclus"], "Inclus com s (mas conclu sem s)."),
        f("Participe passé de émouvoir :", ["ému"]),
        f("Participe passé de moudre :", ["moulu"]),
        f("Participe passé de coudre :", ["cousu"])
      ]
    },
    {
      id: "voix-passive", niveau: "B2",
      titre: "La voix passive",
      resume: "sujet + être + participe + par…",
      rappel:
        '<p><b>Estrutura</b>: sujeito + <b>être</b> (no tempo do verbo ativo) + particípio + par + agente. O particípio concorda com o sujeito.</p>' +
        '<table class="tbl"><tr><th>présent</th><td>Le rapport <b>est</b> écrit par Andy.</td></tr><tr><th>passé composé</th><td>Le rapport <b>a été</b> écrit.</td></tr>' +
        '<tr><th>imparfait</th><td>Le rapport <b>était</b> écrit.</td></tr><tr><th>futur</th><td>Le rapport <b>sera</b> écrit.</td></tr></table>' +
        '<p>Só existe voz passiva se o verbo tiver <b>objeto direto</b>. Dormir, rire, fuir, bouillir, suffire, arriver, tomber… não têm voz passiva.</p>' +
        '<p>Para distinguir: <i>Elle est partie</i> = passé composé (ninguém « partiu ela »). <i>Elles ont été vues</i> = voz passiva.</p>',
      consigne: "Mets à la voix passive ou complète.",
      exercices: [
        f("Andy écrit le rapport.", ["Le rapport est écrit par Andy."]),
        f("Andy a écrit le rapport.", ["Le rapport a été écrit par Andy."]),
        f("Andy écrira le rapport.", ["Le rapport sera écrit par Andy."]),
        f("La police a arrêté les voleurs.", ["Les voleurs ont été arrêtés par la police."]),
        f("Ma grand-mère a fait ce gâteau.", ["Ce gâteau a été fait par ma grand-mère."]),
        f("Les lumières ___ (éteindre, passé composé) avant le départ.", ["ont été éteintes"]),
        f("Une longue lettre ___ (écrire, passé composé) au maire.", ["a été écrite"]),
        f("Le médicament ___ (dissoudre, passé composé) dans l'eau.", ["a été dissous"]),
        f("Un chapitre ___ (inclure, passé composé) dans le rapport.", ["a été inclus"]),
        f("Une porte ___ (ouvrir, passé composé) malgré le froid.", ["a été ouverte"]),
        f("La vérité ___ (dire, passé composé) enfin.", ["a été dite"]),
        c("« Elle est partie. »", ["voix passive", "passé composé"], "passé composé", "Partir não tem objeto direto."),
        c("« Elles ont été vues. »", ["voix passive", "passé composé"], "voix passive"),
        c("« Les voyageurs ont attendu longtemps. »", ["voix passive", "voix active"], "voix active")
      ]
    },
    {
      id: "ordre-pronoms", niveau: "B2",
      titre: "L'ordre des pronoms doubles",
      resume: "je le lui donne, il m'en envoie",
      rappel:
        '<p class="ordre">sujet + <b>me / te / nous / vous</b> + <b>le / la / les</b> + <b>lui / leur</b> + <b>y</b> + <b>en</b> + verbe</p>' +
        '<p><i>Il m\'en envoie · je le lui donne · je te la prête · je la leur ai demandée · elle ne l\'y a pas accompagnée.</i></p>' +
        '<p>Passé composé: pronomes antes do <b>auxiliar</b>: <i>je <b>le lui ai</b> promis</i> (nunca « j\'ai le lui promis »). Negação: <i>je ne le leur ai pas dit</i>.</p>' +
        '<p>Com aller / pouvoir + infinitivo: pronomes antes do <b>infinitivo</b>: <i>je ne peux pas <b>te le</b> dire · je vais <b>leur en</b> offrir</i>.</p>',
      consigne: "Réponds en remplaçant les compléments par des pronoms.",
      exercices: [
        f("Il t'envoie des lettres ? — Oui, …", ["Oui, il m'en envoie."]),
        f("Tu donnes le livre à Paul ? — Oui, …", ["Oui, je le lui donne."]),
        f("Tu me prêtes ta voiture ? — Oui, …", ["Oui, je te la prête."]),
        f("Elle a accompagné sa sœur à l'école ? — Non, …", ["Non, elle ne l'y a pas accompagnée."]),
        f("Tu vas offrir des cadeaux à tes parents ? — Oui, …", ["Oui, je vais leur en offrir."]),
        f("Ils t'en ont donné un ? — Non, …", ["Non, ils ne m'en ont pas donné."]),
        f("Tu le leur as dit ? — Non, …", ["Non, je ne le leur ai pas dit."]),
        f("Vous lui en avez parlé ? — Oui, …", ["Oui, je lui en ai parlé.", "Oui, nous lui en avons parlé."]),
        f("Tu peux me le dire ? — Non, …", ["Non, je ne peux pas te le dire."]),
        f("Il va vous le raconter ? — Oui, …", ["Oui, il va nous le raconter.", "Oui, il va me le raconter."]),
        f("Tu le lui as promis ? — Oui, …", ["Oui, je le lui ai promis."]),
        f("Bruno t'a parlé de ce projet ? — Oui, …", ["Oui, il m'en a parlé."]),
        f("Léonard a emmené sa fille au cirque ? — Oui, …", ["Oui, il l'y a emmenée."]),
        f("Maxime t'a raconté ses vacances ? — Non, …", ["Non, il ne me les a pas racontées."]),
        f("Tu as demandé l'adresse à Lydie et Roland ? — Oui, …", ["Oui, je la leur ai demandée."]),
        f("Vous pouvez acheter un dictionnaire à votre fils ? — Oui, …", ["Oui, je peux lui en acheter un.", "Oui, nous pouvons lui en acheter un."]),
        f("Tu me conduiras à la gare ? — Oui, …", ["Oui, je t'y conduirai."]),
        f("Tu me conseilles ce film ? — Non, …", ["Non, je ne te le conseille pas."]),
        f("Vous parlerez à vos collègues de ce débat ? — Non, …", ["Non, nous ne leur en parlerons pas.", "Non, je ne leur en parlerai pas."]),
        f("Tes parents t'ont offert un collier ? — Oui, …", ["Oui, ils m'en ont offert un."]),
        f("Ton ami t'a donné les références ? — Non, …", ["Non, il ne me les a pas données."]),
        f("Ils ont joint Marie au café ? — Oui, …", ["Oui, ils l'y ont jointe."])
      ]
    },
    {
      id: "hypotheses", niveau: "B2",
      titre: "Les hypothèses avec si",
      resume: "si + présent / imparfait / plus-que-parfait",
      rappel:
        '<table class="tbl"><tr><th>possível (futuro)</th><td>si + <b>présent</b> → <b>futur simple</b><br><i>S\'il pleut demain, nous ne pourrons pas sortir.</i></td></tr>' +
        '<tr><th>irreal no presente</th><td>si + <b>imparfait</b> → <b>conditionnel présent</b><br><i>Si j\'étais brésilien, j\'habiterais à Bahia.</i></td></tr>' +
        '<tr><th>irreal no passado</th><td>si + <b>plus-que-parfait</b> → <b>conditionnel passé</b><br><i>Si j\'avais su que Lisa était malade, je serais allée la voir.</i></td></tr></table>' +
        '<p><b>Regra de ouro</b>: nunca conditionnel nem futur logo depois de <b>si</b>. « Si j\'aurais » está sempre errado.</p>' +
        '<p>Pronominais no conditionnel passé usam être: <i>je ne <b>me serais</b> pas énervé</i>.</p>',
      consigne: "Conjugue le verbe.",
      exercices: [
        f("Si j'étais brésilien, j'___ (habiter) à Bahia.", ["habiterais"]),
        f("Si j'___ (avoir) plus d'argent, je voyagerais plus souvent.", ["avais"]),
        f("S'il pleut demain, nous ne ___ (pouvoir) pas sortir.", ["pourrons"], "Futur: nous pourrons (com s). Erro do teu exercício."),
        f("Si vous venez ce soir, nous vous ___ (préparer) un bon repas.", ["préparerons"]),
        f("Si tu m'___ (inviter), j'accepterais volontiers.", ["invitais"]),
        f("Si tu m'invitais, j'___ (accepter) volontiers.", ["accepterais"], "Conditionnel: -rais (com s). « accepterai » é futuro."),
        f("Si vous faisiez plus d'efforts, vous ___ (réussir).", ["réussiriez"]),
        f("Si vous ___ (prendre) le train, vous arriveriez plus tôt.", ["preniez"], "Depois de si: imparfait, nunca conditionnel."),
        f("Si on avait vu le panneau, on n'___ (tourner) pas à gauche.", ["aurait"], "Tourner usa avoir: on n'aurait pas tourné."),
        f("Si tu m'avais dit la vérité, je ne m'___ (s'énerver) pas.", ["serais"], "Pronominal → être: je ne me serais pas énervé(e)."),
        f("S'ils étaient partis plus tôt, ils n'___ (rater) pas l'avion.", ["auraient"]),
        f("Si vous vous étiez inscrits avant juillet, vous ___ (obtenir) une réduction.", ["auriez obtenu"]),
        f("Si elles s'étaient souvenues de l'adresse, elles ___ (venir).", ["seraient venues"]),
        f("Si j'___ (pouvoir) revenir en arrière, je changerais ma décision.", ["pouvais"]),
        c("Si j'___ le temps, je voyagerais.", ["avais", "aurais"], "avais", "Nunca conditionnel depois de si."),
        f("Demain, s'il ___ (faire) beau, on ira à la plage.", ["fait"])
      ]
    },
    {
      id: "discours-indirect", niveau: "B2",
      titre: "Le discours indirect au passé",
      resume: "il a dit qu'il était, qu'il allait, qu'il viendrait",
      rappel:
        '<p>Quando o verbo introdutor está no passado (<i>il a dit que, on m\'a dit que</i>), os tempos recuam:</p>' +
        '<table class="tbl"><tr><th>direto</th><th>indireto</th></tr>' +
        '<tr><td>présent — <i>il est malade</i></td><td>imparfait — <i>qu\'il était malade</i></td></tr>' +
        '<tr><td>passé composé — <i>on a volé</i></td><td>plus-que-parfait — <i>qu\'on avait volé</i></td></tr>' +
        '<tr><td>futur proche — <i>il va prendre</i></td><td><b>allait</b> + infinitif — <i>qu\'il allait prendre</i></td></tr>' +
        '<tr><td>futur simple — <i>il y aura</i></td><td>conditionnel présent — <i>qu\'il y aurait</i></td></tr>' +
        '<tr><td>venir de — <i>je viens de rentrer</i></td><td><i>qu\'il venait de rentrer</i></td></tr></table>' +
        '<p>Os pronomes e possessivos também mudam: <i>je → il / elle, mon père → son père, nous → vous</i>.</p>',
      consigne: "Complète au discours indirect.",
      exercices: [
        f("« L'ascenseur est en panne. » → On m'a dit qu'il ___ en panne.", ["était"]),
        f("« Il y a du couscous à la cantine. » → On m'a dit qu'il y ___ du couscous.", ["avait"]),
        f("« On a volé le vélo du professeur. » → On m'a dit qu'on ___ le vélo du professeur.", ["avait volé"], "Passé composé → plus-que-parfait. (voler ≠ vouloir)"),
        f("« La secrétaire a démissionné. » → On m'a dit qu'elle ___.", ["avait démissionné"]),
        f("« M. Bidois va prendre sa retraite. » → On m'a dit qu'il ___ prendre sa retraite.", ["allait"], "Futur proche → allait + infinitivo."),
        f("« L'école va fermer cet été. » → On m'a dit qu'elle ___ cet été.", ["allait fermer"]),
        f("« Nous ferons une fête. » → On m'a dit que vous ___ une fête.", ["feriez"]),
        f("« Il y aura un orchestre. » → On m'a dit qu'il y ___ un orchestre.", ["aurait"], "Futur → conditionnel: il y aurait."),
        f("« Je suis dans le train. » → Elle a dit qu'elle ___ dans le train.", ["était"]),
        f("« Je reviendrai mardi. » → Elle a dit qu'elle ___ mardi.", ["reviendrait"]),
        f("« Je viens de rentrer. » → Il a dit qu'il ___ de rentrer.", ["venait"]),
        f("« J'ai perdu mes lunettes. » → Il a dit qu'il ___ ses lunettes.", ["avait perdu"]),
        f("« Je rappellerai. » → Il a dit qu'il ___.", ["rappellerait"])
      ]
    },
    {
      id: "subjonctif", niveau: "B2",
      titre: "Le subjonctif présent et passé",
      resume: "il faut que tu finisses, je crains qu'elle se soit blessée",
      rappel:
        '<p><b>Présent</b>: radical de <i>ils</i> no presente + e, es, e, ions, iez, ent: <i>ils finissent → que je finisse</i>. Irregulares: être (sois, soit, soyons, soyez, soient), avoir (aie, aies, ait, ayons, ayez, aient), faire (fasse), aller (aille), pouvoir (puisse), savoir (sache), vouloir (veuille).</p>' +
        '<p><b>Passé</b>: être / avoir no subjonctif + particípio: <i>que tu aies pris, qu\'il soit sorti</i>. Pronominais → être: <i>qu\'ils se soient trompés</i>.</p>' +
        '<p>Depois de: il faut que, vouloir que, souhaiter que, douter que, craindre que, être content / surpris / fâché que, il est possible / peu probable que, avant que, pourvu que, jusqu\'à ce que, quoique, bien que.</p>',
      consigne: "Mets le verbe au subjonctif.",
      exercices: [
        f("Il faut que tu ___ (finir) ton travail.", ["finisses"]),
        f("Je doute qu'elle ___ (venir) ce soir.", ["vienne"]),
        f("Nous souhaitons que vous ___ (être) prêts.", ["soyez"]),
        f("Pourvu que nous ___ (avoir) assez de temps.", ["ayons"]),
        f("Mes parents veulent que je ___ (faire) attention.", ["fasse"]),
        f("Il faut que vous ___ (avoir) vos livres.", ["ayez"]),
        f("Je suis content qu'il ___ (réussir).", ["réussisse"]),
        f("Je suis surpris que tu ___ (prendre, passé) cette décision.", ["aies pris"]),
        f("Il est possible qu'ils ___ (se tromper, passé).", ["se soient trompés"], "Pronominal → être + concordância. Erro do teu exercício."),
        f("Je crains que Marie ___ (se blesser, passé).", ["se soit blessée"], "Pronominal → être."),
        f("Il est peu probable que vous ___ (voir, passé) la différence.", ["ayez vu"], "Vous → ayez (sem i)."),
        f("Je suis fâché qu'ils ne ___ (répondre, passé) pas à mon message.", ["aient"], "Ne + aient + pas + répondu."),
        f("Elle regrette que vous ___ (arriver, passé) en retard.", ["soyez arrivé", "soyez arrivée", "soyez arrivés", "soyez arrivées"]),
        f("Avant qu'il ne ___ (sortir, passé), je lui ai parlé.", ["soit sorti"])
      ]
    },
    {
      id: "gerondif-adverbes", niveau: "B2",
      titre: "Gérondif, adjectif verbal et adverbes",
      resume: "en lisant, fatigant, patiemment",
      rappel:
        '<p><b>Gérondif</b> = en + radical de <i>nous</i> + <b>-ant</b>: duas ações simultâneas. <i>nous parlons → en parlant · nous finissons → en finissant</i>. Irregulares: <b>en étant, en ayant, en sachant</b>.</p>' +
        '<p><b>Adjectif verbal</b>: concorda como adjetivo: <i>une personne convaincante, une lumière brillante</i>. Às vezes a grafia muda: <i>fatiguant</i> (verbo) → <b>fatigant</b> (adjetivo), <i>convainquant</i> → <b>convaincant</b>.</p>' +
        '<p><b>Advérbios</b>: feminino do adjetivo + -ment: <i>heureuse → heureusement, complète → complètement</i>. Adjetivo terminado em vogal: masculino + ment (<i>simple → simplement</i>).<br>' +
        '<b>-ant → -amment</b> (bruyant → bruyamment) · <b>-ent → -emment</b> (patient → patiemment). Pronúncia igual: [amã].</p>',
      consigne: "Complète.",
      exercices: [
        f("Il marche en ___ (réfléchir).", ["réfléchissant"]),
        f("Elle s'est endormie en ___ (regarder) la télé.", ["regardant"]),
        f("Tu as appris en ___ (pratiquer).", ["pratiquant"], "Ortografia francesa: pratiquant (qu), não « practicant »."),
        f("Il a progressé en ___ (lire).", ["lisant"]),
        f("en ___ (être)", ["étant"]),
        f("en ___ (savoir)", ["sachant"]),
        f("Une personne ___ (convaincre).", ["convaincante"]),
        f("Un enfant ___ (fatiguer).", ["fatigant"], "Adjetivo: fatigant (sem u)."),
        f("Un spectacle ___ (surprendre).", ["surprenant"]),
        f("heureuse → ___", ["heureusement"]),
        f("précise → ___", ["précisément"]),
        f("apparent → ___", ["apparemment"]),
        f("suffisant → ___", ["suffisamment"], "Su-ffisamment (com u)."),
        f("négligent → ___", ["négligemment"], "-ent → -emment (dois m)."),
        f("bruyant → ___", ["bruyamment"]),
        f("patient → ___", ["patiemment"])
      ]
    }
  ];

  /*
    CARNET : erreurs relevées dans tes exercices corrigés.
    Modèle : { date: "20/10/26", theme: "ordre-pronoms", q: "…", mine: "ta réponse", correct: "la bonne réponse", alt: [], why: "…" }
  */
  var CARNET = [
    { date: "20/10/26", theme: "ordre-pronoms", q: "Tu peux me le dire ? — Non, …", mine: "Non, je ne m'en peux pas te dire.", correct: "Non, je ne peux pas te le dire.", why: "Com pouvoir + infinitivo, os pronomes vão antes do infinitivo. « le » (isso) é COD, não en." },
    { date: "20/10/26", theme: "ordre-pronoms", q: "Il va vous le raconter ? — Non, …", mine: "Non, il ne vas pas me le raconter.", correct: "Non, il ne va pas nous le raconter.", alt: ["Non, il ne va pas me le raconter."], why: "Il va (sem s). Vous (plural) → nous na resposta." },
    { date: "20/10/26", theme: "ordre-pronoms", q: "Tu le lui as promis ? — Oui, …", mine: "Oui, j'ai le lui promis.", correct: "Oui, je le lui ai promis.", why: "No passé composé os pronomes ficam antes do auxiliar." },
    { date: "20/10/26", theme: "ordre-pronoms", q: "Tu le leur as dit ? — Non, …", mine: "Non, je ne le leur pas dit.", correct: "Non, je ne le leur ai pas dit.", why: "Faltou o auxiliar « ai ». Ordem: ne + pronomes + auxiliar + pas + particípio." },
    { date: "20/10/26", theme: "ordre-pronoms", q: "Vous lui en avez parlé ? — Non, …", mine: "Non, je ne lui en pas parlé.", correct: "Non, je ne lui en ai pas parlé.", why: "Mesmo erro: não esqueça o auxiliar." },
    { date: "", theme: "en-y", q: "Allez-vous résoudre ces problèmes ? — Oui, …", mine: "J'en résoudre.", correct: "Oui, je vais les résoudre.", why: "« Ces problèmes » é COD definido → les (en é para du, de la, des). Com aller + infinitivo, o pronome vai antes do infinitivo." },
    { date: "", theme: "cod", q: "Avez-vous éteint les lumières ? — Non, …", mine: "Non, je n'en étein pas.", correct: "Non, je ne les ai pas éteintes.", alt: ["Non, nous ne les avons pas éteintes."], why: "Les lumières → les. COD antes de avoir → concordância: éteintes." },
    { date: "", theme: "ordre-pronoms", q: "Ils ont joint Marie au café ? — Oui, …", mine: "Oui, ils l'y ont joint.", correct: "Oui, ils l'y ont jointe.", why: "L' = Marie (feminino) antes de avoir → jointe." },
    { date: "", theme: "cod", q: "Elle va repasser les chemises ? — Non, …", mine: "Non, elle ne va pas en repasser.", correct: "Non, elle ne va pas les repasser.", why: "Artigo definido (les chemises) → les. En substitui o indefinido (des chemises)." },
    { date: "", theme: "coi", q: "Tu dis bonjour à tes voisins ? — Oui, …", mine: "Oui, je leurs dis bonjour.", correct: "Oui, je leur dis bonjour.", why: "O pronome leur nunca leva s. Leurs com s é o possessivo." },
    { date: "", theme: "coi", q: "Élise a écrit à sa mère ? — Non, …", mine: "Non, elle ne lui pas écrit.", correct: "Non, elle ne lui a pas écrit.", why: "Faltou o auxiliar « a »." },
    { date: "", theme: "cod", q: "Ils vont monter la rue Saint-Denis ? — Oui, …", mine: "Oui, ils y vont monter.", correct: "Oui, ils vont la monter.", why: "Monter la rue: « la rue » é COD (sem preposição) → la, antes do infinitivo." },
    { date: "", theme: "ordre-pronoms", q: "Elle a accompagné sa sœur à l'école ? — Non, …", mine: "Non, elle ne l'y va pas.", correct: "Non, elle ne l'y a pas accompagnée.", why: "Mantenha o tempo da pergunta (passé composé) e faça a concordância com l' (sa sœur)." },
    { date: "", theme: "ordre-pronoms", q: "Maxime t'a raconté ses vacances ? — Non, …", mine: "Non, elle ne m'a pas raconté.", correct: "Non, il ne me les a pas racontées.", why: "Maxime → il. Ses vacances → les, e o particípio concorda: racontées." },
    { date: "", theme: "ordre-pronoms", q: "Tu as demandé l'adresse à Lydie et Roland ? — Oui, …", mine: "Oui, je leur ont demandé.", correct: "Oui, je la leur ai demandée.", why: "Je → ai (não ont). L'adresse → la, antes de leur. Concordância: demandée." },
    { date: "", theme: "ordre-pronoms", q: "Vous parlerez à vos collègues de ce débat ? — Non, …", mine: "Nous n'allons pas leur parlez.", correct: "Non, nous ne leur en parlerons pas.", alt: ["Non, je ne leur en parlerai pas."], why: "Mantenha o futur simple. De ce débat → en (depois de leur)." },
    { date: "", theme: "ordre-pronoms", q: "Tes parents t'ont offert un collier ? — Oui, …", mine: "Ils m'a l'offert.", correct: "Oui, ils m'en ont offert un.", why: "Un collier (indefinido) → en … un. Ils → ont." },
    { date: "", theme: "ordre-pronoms", q: "Ton ami t'a donné les références ? — Non, …", mine: "Il ne me les donné pas.", correct: "Non, il ne me les a pas données.", why: "Faltou o auxiliar. Les références antes de avoir → données." },
    { date: "", theme: "passe-compose", q: "Ils sortent leurs chiens. → passé composé", mine: "Ils sont sortis leurs chiens.", correct: "Ils ont sorti leurs chiens.", why: "Sortir + objeto direto → avoir." },
    { date: "", theme: "passe-compose", q: "Elle descend la poubelle. → passé composé", mine: "Elle est descendue la poubelle.", correct: "Elle a descendu la poubelle.", why: "Descendre + objeto direto → avoir." },
    { date: "", theme: "passe-compose", q: "Elles ne tournent pas à gauche. → passé composé", mine: "Elles ne sont pas tournées à gauche.", correct: "Elles n'ont pas tourné à gauche.", why: "Tourner usa avoir." },
    { date: "", theme: "pronominaux", q: "Ils se lavent les pieds. → passé composé", mine: "Ils se sont lavés les pieds.", correct: "Ils se sont lavé les pieds.", why: "O objeto direto (les pieds) vem depois → sem concordância." },
    { date: "", theme: "pronominaux", q: "Ils se parlent. → passé composé", mine: "Ils s'est parlé.", correct: "Ils se sont parlé.", why: "Ils → se sont. Parler à → sem concordância." },
    { date: "", theme: "imparfait", q: "Je dormais quand soudain ___ un cri. (entendre)", mine: "j'entendais", correct: "j'ai entendu", why: "Soudain = ação pontual → passé composé." },
    { date: "", theme: "imparfait", q: "J'ai pris mon parapluie parce qu'il ___ depuis le matin. (pleuvoir)", mine: "a plu", correct: "pleuvait", why: "Situação que dura (depuis le matin) → imparfait." },
    { date: "", theme: "imparfait", q: "Une voiture a renversé la dame alors qu'elle ___ la rue. (traverser)", mine: "a traversé", correct: "traversait", why: "Ação em andamento quando o evento acontece → imparfait." },
    { date: "", theme: "imparfait", q: "J'étais dans mon bain quand le téléphone ___. (sonner)", mine: "sonnait", correct: "a sonné", why: "O evento que interrompe → passé composé." },
    { date: "", theme: "imparfait", q: "J'étais fatiguée. ___ mal à la tête.", mine: "J'étais", correct: "J'avais", why: "Avoir mal à la tête." },
    { date: "", theme: "imparfait", q: "Chaque matin, nous ___ (prendre) le petit-déjeuner au café.", mine: "avons pris", correct: "prenions", why: "Chaque matin = hábito → imparfait." },
    { date: "", theme: "plus-que-parfait", q: "Bernard a répondu à la lettre que j'___ (envoyer).", mine: "avais envoyé", correct: "avais envoyée", why: "La lettre (COD feminino) vem antes → envoyée." },
    { date: "", theme: "plus-que-parfait", q: "Quand il m'a vu, il m'___ (embrasser). (après)", mine: "embrassait", correct: "a embrassé", why: "Ação pontual depois de outra → passé composé." },
    { date: "", theme: "futur", q: "Nous ___ (faire, futur) l'exercice n° 3.", mine: "faisons", correct: "ferons", why: "Futur de faire: fer- + ons." },
    { date: "", theme: "futur", q: "Téléphonez-moi quand vous ___ (réfléchir) à ma proposition.", mine: "aurez réfléchissé", correct: "aurez réfléchi", why: "Particípio de réfléchir: réfléchi (verbos em -ir do 2º grupo → -i)." },
    { date: "", theme: "present", q: "Que ___ (faire)-vous dans cette situation ?", mine: "fatez", correct: "faites", why: "Vous faites, vous êtes, vous dites: as três exceções em -tes." },
    { date: "", theme: "irreguliers", q: "L'eau ___ (bouillir) depuis plusieurs minutes.", mine: "boit", correct: "bout", why: "Bouillir → bout. Boit é do verbo boire." },
    { date: "", theme: "irreguliers", q: "Ce film m'___ (émouvoir) profondément.", mine: "émeus", correct: "émeut", why: "3ª pessoa: il émeut (com t)." },
    { date: "", theme: "irreguliers", q: "Il ___ (convaincre) le jury.", mine: "convaincs", correct: "convainc", why: "Il convainc: sem s (o s é para je / tu)." },
    { date: "", theme: "irreguliers", q: "Ce spectacle ___ (distraire) les spectateurs.", mine: "destrait", correct: "distrait", why: "Ortografia: dis-trait." },
    { date: "", theme: "discours-indirect", q: "« On a volé le vélo du professeur. » → On m'a dit qu'on ___ le vélo.", mine: "voulait", correct: "avait volé", why: "Voler (roubar) ≠ vouloir. Passé composé → plus-que-parfait." },
    { date: "", theme: "discours-indirect", q: "« M. Bidois va prendre sa retraite. » → On m'a dit qu'il ___ sa retraite.", mine: "prendre", correct: "allait prendre", why: "Futur proche → allait + infinitivo." },
    { date: "", theme: "discours-indirect", q: "« L'école va fermer cet été. » → On m'a dit qu'elle ___ cet été.", mine: "fermait", correct: "allait fermer", why: "Futur proche → allait + infinitivo." },
    { date: "", theme: "discours-indirect", q: "« Il y aura un orchestre. » → On m'a dit qu'il y ___ un orchestre.", mine: "avait", correct: "aurait", why: "Futur simple → conditionnel présent." },
    { date: "", theme: "hypotheses", q: "Si vous ___ (prendre) le train, vous arriveriez plus tôt.", mine: "prendrait", correct: "preniez", why: "Depois de si: imparfait, nunca conditionnel." },
    { date: "", theme: "hypotheses", q: "Si tu m'invitais, j'___ (accepter) volontiers.", mine: "accepterai", correct: "accepterais", why: "Si + imparfait → conditionnel (-rais)." },
    { date: "", theme: "hypotheses", q: "Si vous faisiez plus d'efforts, vous ___ (réussir).", mine: "réussirez", correct: "réussiriez", why: "Si + imparfait → conditionnel présent." },
    { date: "", theme: "hypotheses", q: "S'il pleut demain, nous ne ___ (pouvoir) pas sortir.", mine: "pourron", correct: "pourrons", why: "Nous → -ons (com s)." },
    { date: "", theme: "hypotheses", q: "Si on avait vu le panneau, on ne ___ pas ___ à gauche. (tourner)", mine: "serait pas tourné", correct: "n'aurait pas tourné", why: "Tourner usa avoir: on n'aurait pas tourné." },
    { date: "", theme: "subjonctif", q: "Il est possible qu'ils ___ (se tromper, passé).", mine: "aient trompé", correct: "se soient trompés", why: "Pronominal → être + concordância." },
    { date: "", theme: "subjonctif", q: "Je crains que Marie ___ (se blesser, passé).", mine: "ait blessé", correct: "se soit blessée", why: "Pronominal → être + concordância." },
    { date: "", theme: "subjonctif", q: "Il est peu probable que vous ___ (voir, passé) la différence.", mine: "ayiez vu", correct: "ayez vu", why: "Vous ayez (sem i)." },
    { date: "", theme: "possessifs", q: "C'est la montre de ma sœur. C'est ___ montre.", mine: "son", correct: "sa", why: "Concorda com montre (feminino)." },
    { date: "", theme: "possessifs", q: "Ce sont les lunettes de Tania. Ce sont les ___.", mine: "leurs", correct: "siennes", why: "Uma só dona → sien(ne)s." },
    { date: "", theme: "gerondif-adverbes", q: "suffisant → ___", mine: "siffisamment", correct: "suffisamment", why: "Ortografia: su-ffi-samment." },
    { date: "", theme: "gerondif-adverbes", q: "négligent → ___", mine: "négligement", correct: "négligemment", why: "-ent → -emment (dois m)." },
    { date: "", theme: "gerondif-adverbes", q: "Tu as appris en ___ (pratiquer).", mine: "practicant", correct: "pratiquant", why: "Radical de nous pratiquons → pratiqu-ant." }
  ];

  window.CAHIER = { themes: THEMES, carnet: CARNET };
})();
