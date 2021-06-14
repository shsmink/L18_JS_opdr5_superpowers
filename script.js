const heroes = [
    {
      name: "Batman",
      publisher: "DC Comics",
      alter_ego: "Bruce Wayne",
      first_appearance: "Detective Comics #27",
      weight: "210"
    },
    {
      name: "Superman",
      publisher: "DC Comics",
      alter_ego: "Kal-El",
      first_appearance: "Action Comics #1",
      weight: "220"
    },
    {
      name: "Flash",
      publisher: "DC Comics",
      alter_ego: "Jay Garrick",
      first_appearance: "Flash Comics #1",
      weight: "195"
    },
    {
      name: "Green Lantern",
      publisher: "DC Comics",
      alter_ego: "Alan Scott",
      first_appearance: "All-American Comics #16",
      weight: "186"
    },
    {
      name: "Green Arrow",
      publisher: "DC Comics",
      alter_ego: "Oliver Queen",
      first_appearance: "All-American Comics #16",
      weight: "195"
    },
    {
      name: "Wonder Woman",
      publisher: "DC Comics",
      alter_ego: "Princess Diana",
      first_appearance: "The Incredible Hulk #180",
      weight: "165"
    },
    {
      name: "Blue Beetle",
      publisher: "DC Comics",
      alter_ego: "Dan Garret",
      first_appearance: "Mystery Men Comics #1",
      weight: "145"
    },
    {
      name: "Spider Man",
      publisher: "Marvel Comics",
      alter_ego: "Peter Parker",
      first_appearance: "Amazing Fantasy #15",
      weight: "167"
    },
    {
      name: "Captain America",
      publisher: "Marvel Comics",
      alter_ego: "Steve Rogers",
      first_appearance: "Captain America Comics #1",
      weight: "220"
    },
    {
      name: "Iron Man",
      publisher: "Marvel Comics",
      alter_ego: "Tony Stark",
      first_appearance: "Tales of Suspense #39",
      weight: "250"
    },
    {
      name: "Thor",
      publisher: "Marvel Comics",
      alter_ego: "Thor Odinson",
      first_appearance: "Journey into Myster #83",
      weight: "200"
    },
    {
      name: "Hulk",
      publisher: "Marvel Comics",
      alter_ego: "Bruce Banner",
      first_appearance: "The Incredible Hulk #1",
      weight: "1400"
    },
    {
      name: "Wolverine",
      publisher: "Marvel Comics",
      alter_ego: "James Howlett",
      first_appearance: "The Incredible Hulk #180",
      weight: "200"
    },
    {
      name: "Daredevil",
      publisher: "Marvel Comics",
      alter_ego: "Matthew Michael Murdock",
      first_appearance: "Daredevil #1",
      weight: "200"
    },
    {
      name: "Silver Surfer",
      publisher: "Marvel Comics",
      alter_ego: "Norrin Radd",
      first_appearance: "The Fantastic Four #48",
      weight: "unknown"
    }
  ];
  
// Opdracht 1 - Alle namen

  const heroNames = heroes.map(hero => {
    return hero.name;
  });

  console.log("Alle namen van de superhelden:", heroNames); // ['Batman', 'Superman', 'Flash', 'Green Lantern', 'Green Arrow', 'Wonder Woman', 'Blue Beetle', 'Spider Man', 'Captain America', 'Iron Man', 'Thor', 'Hulk', 'Wolverine', 'Daredevil', 'Silver Surfer']
  

// Opdracht 2 - Superhelden lichter dan 190 pond
  const lightHeroes = heroes.filter(hero => {
    return hero.weight < 190;
  });

  console.log("Alle superhelden die lichter zijn dan 190 pond:", lightHeroes.length);


// Opdracht 3 - Superhelden die 200 pond wegen
  
    const heavySuperHeroes = heroes.filter(hero => {
        return hero.weight == 200;
    });
    // Alternatief: const heavySuperHeroes = heroes.filter(hero => hero.weight == 200);
  
    const heavySuperHeroNames = heavySuperHeroes.map(hero => {
        return hero.name;
    });
    // Alternatief: const heavySuperHeroNames = heavySuperHeroes.map(hero => hero.name);
  
    console.log("Superhelden die 200 pond wegen:", heavySuperHeroNames); // ['Thor', 'Wolverine', 'Daredevil']
  
// Chaining:
    const heavySuperHeroNamesChained = heroes
        .filter(hero => hero.weight == 200)
        .map(hero => hero.name);

    console.log("Superhelden die 200 pond wegen:", heavySuperHeroNamesChained); // ['Thor', 'Wolverine', 'Daredevil']
  
// Opdracht 4 - Alle comics waarin de superhelden voor het eerst te zien waren
    const firstAppearance = heroes.map(hero => hero.first_appearance);
    console.log("Alle comics waarin de superhelden voor het eerst te zien waren:", firstAppearance); // ['Detective Comics #27', 'Action Comics #1', 'Flash Comics #1', 'All-American Comics #16', 'All-American Comics #16', 'The Incredible Hulk #180', 'Mystery Men Comics #1', 'Amazing Fantasy #15', 'Captain America Comics #1', 'Tales of Suspense #39', 'Journey into Myster #83', 'The Incredible Hulk #1', 'The Incredible Hulk #180', 'Daredevil #1', 'The Fantastic Four #48']
  

// Opdracht 5 - Alle superhelden van DC Comics en alle superhelden van Marvel Comics

    const DCComics = heroes.filter(hero => hero.publisher === "DC Comics");
    const marvelComics = heroes.filter(hero => hero.publisher === "Marvel Comics");
    console.log("Alle superhelden van DC Comics:", DCComics, "Alle superhelden van Marvel Comics:", marvelComics);
  

// Opdracht 6 - Het totaalgewicht van alle superhelden van DC Comics 

    const addedWeightDC = DCComics.map(hero => {
        return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
    }).reduce((weight1, weight2) => weight1 + weight2);
  
    console.log("Totaalgewicht van alle superhelden van DC Comics:", addedWeightDC);
  
  
// Opdracht 7 - Het totaalgewicht van alle superhelden van Marvel Comics 

    const addedWeightMarvel = marvelComics
        .map(hero => {
        return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
        })
        .reduce((weight1, weight2) => weight1 + weight2, 0);
 
    console.log("Totaalgewicht van alle superhelden van Marvel Comics:", addedWeightMarvel); // 2637
  

// Opdracht 8 (Bonus) - De zwaarste superheld

    const allHeroes = heroes.map(hero => {
        const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
        hero.weight = weight;
        return hero;
    });
  
    const heaviestHero = allHeroes.reduce(
        (currentHeaviestHero, currentHero) => {
        if (currentHero.weight > currentHeaviestHero.weight) {
            return currentHero;
        } else {
            return currentHeaviestHero;
        }
        },
        allHeroes[0]
    );
  
    console.log("De zwaarste superheld:", heaviestHero);