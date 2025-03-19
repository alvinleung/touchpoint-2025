const LEGACY_SPEAKERS = [
  {
    year: 2012,
    talks: [
      { speakers: "Matt Walsh", company: "Crispin, Porter + Bogusky" },
      { speakers: "Matt Conway", company: "frog design" },
      { speakers: "Caterina Sanders", company: "Habanero" },
      { speakers: "Rock Leung", company: "SAP" },
      { speakers: "Marie-Claude Lavoie, Richard Z'Graggen", company: "LVL" },
      { speakers: "Ryan Betts", company: "Adobe" }
    ]
  },
  {
    year: 2013,
    talks: [
      { speakers: "Matt Conway", company: "frog design" },
      { speakers: "Ric Ewing, Alaa Mendili, Tai Hubbert", company: "Digital Kitchen" },
      { speakers: "Alex Riegelman", company: "Crispin, Porter + Bogusky" },
      { speakers: "Kim Laama, Michael Smith", company: "AKQA" },
      { speakers: "Don Chisholm", company: "Dossier" },
      { speakers: "Connor Lowe", company: "SAP" },
      { speakers: "Tracey Shaw, Mami Shimada, Ben Ng, Adam Crandall", company: "Habanero" }
    ]
  },
  {
    year: 2014,
    talks: [
      { speakers: "Travis Kirton", company: "Slant Design" },
      { speakers: "Jocelyn Lai", company: "R/GA" },
      { speakers: "Ryan Opina", company: "Engine Digital" },
      { speakers: "Michael Farrell", company: "Twitter" },
      { speakers: "Azmina Karimi", company: "Crispin, Porter + Bogusky" },
      { speakers: "Alex Beim", company: "Tangible Interaction" },
      { speakers: "Amy Ngai", company: "AxiomZen" }
    ]
  },
  {
    year: 2015,
    talks: [
      { speakers: "Josh Hayward, Alaa Mendili", company: "Digital Kitchen" },
      { speakers: "Warren Schramm", company: "Teague" },
      { speakers: "Charles Law", company: "Green Stone" },
      { speakers: "Christopher Marsh", company: "AKQA" },
      { speakers: "Margherita Porra", company: "Arithmetic" },
      { speakers: "Derek Chan", company: "R/GA" },
      { speakers: "Joanna Zander", company: "Lululemon" },
      { speakers: "Andrew Salituri, Matt Turpin", company: "Facebook" },
      { speakers: "Adam Wilson, Tamasin Reno", company: "Vision Critical" },
      { speakers: "Jeremy Bowen, Holger Kuehnle", company: "Microsoft" },
      { speakers: "Jon Bell", company: "Twitter" },
      { speakers: "Ryan Opina", company: "Engine Digital" }
    ]
  },
  {
    year: 2016,
    talks: [
      { speakers: "Joshua Noble", company: "Teague" },
      { speakers: "Ryan Opina", company: "Engine Digital" },
      { speakers: "Raymond Lo", company: "AKQA" },
      { speakers: "Pat Smith", company: "Dossier" },
      { speakers: "Jackie Fok", company: "R/GA" },
      { speakers: "Demetre Arges", company: "Digital Kitchen" },
      { speakers: "Nick Chow", company: "Axiom Zen" },
      { speakers: "Kitty Bourne, Julian Richards", company: "Telus Digital" },
      { speakers: "Matt Walsh", company: "Green Stone" },
      { speakers: "Simon Kwok", company: "Pivotal Labs" },
      { speakers: "Stephen Clements", company: "Junior" },
      { speakers: "Kevin Wick", company: "Frog Design" }
    ]
  },
  {
    year: 2017,
    talks: [
      { speakers: "Chelsea Garber", company: "Inamoto & Co" },
      { speakers: "Trixie Calaquian, David Look", company: "Engine Digital" },
      { speakers: "David Choy, Irene Go", company: "SAP" },
      { speakers: "Terrence Ma", company: "R/GA" },
      { speakers: "Ronna Chisholm", company: "Dossier" },
      { speakers: "Felix Chang", company: "Artefact" },
      { speakers: "Kate Reid", company: "Make" },
      { speakers: "Christine Poh, Sean Cardiff", company: "Green Stone" },
      { speakers: "Mallory O'Connor", company: "Habanero" },
      { speakers: "Liam Thurston", company: "TWG" },
      { speakers: "Amy Ngai", company: "Axiom Zen" }
    ]
  },
  {
    year: 2018,
    talks: [
      { speakers: "Arman Nobari", company: "YouTube" },
      { speakers: "Katya Kostyukova, Maheen Sohail", company: "Facebook" },
      { speakers: "Margaret Gray", company: "Metalab" },
      { speakers: "Dominic Wong", company: "Invoke" },
      { speakers: "Heather Chiang, Nick Facey", company: "Finger Food" },
      { speakers: "Robin Ashmore", company: "IBM" },
      { speakers: "Steve Winchell", company: "Inamoto & Co" },
      { speakers: "Sheryl Cababa", company: "Artefact" },
      { speakers: "Mallory O'Connor", company: "Habanero" },
      { speakers: "Scott Strathern", company: "Engine Digital" },
      { speakers: "Ariana De Ryss", company: "Green Stone" }
    ]
  },
  {
    year: 2019,
    talks: [
      { speakers: "Amanda Poh", company: "Inamoto & Co" },
      { speakers: "Charles Law", company: "Green Stone" },
      { speakers: "Darlene Arriola", company: "WorkSafeBC" },
      { speakers: "Sean Wolcott", company: "Rationale" },
      { speakers: "Dan Nanasi", company: "Engine Digital" },
      { speakers: "Sheila Mackenzie", company: "Spatial Design" },
      { speakers: "Terrence Ma", company: "R/GA" },
      { speakers: "Michael Ellsworth", company: "Civilization" }
    ]
  },
  {
    year: 2020,
    talks: [
      { speakers: "Cherihan Hassun", company: "Railyard Lab" },
      { speakers: "Ronna Chisholm", company: "Dossier" },
      { speakers: "Peter Pimentel", company: "Engine Digital" },
      { speakers: "Guramrit Singh, Ed Prinsen", company: "Telus Digital" },
      { speakers: "Amy Ngai, Wesley Yun", company: "Asana" },
      { speakers: "Edwy Woo, Elan Asselstime, Hugh Knapp", company: "All Purpose" },
      { speakers: "Will Odom, Jordan Eshpeter, Armi Behzad", company: "Everyday Design Studio" }
    ]
  },
  {
    year: 2022,
    talks: [
      { speakers: "Andrew Fung", company: "Clio" },
      { speakers: "Roxanne Henschke", company: "Engine Digital" },
      { speakers: "Robbie Sebullen", company: "Invoke Digital" },
      { speakers: "Robyn Goodridge", company: "Facebook" },
      { speakers: "Kaveh Hashtroodi", company: "City of Surrey" },
      { speakers: "Leah (Maestri) Evernden", company: "Microsoft" },
      { speakers: "Salathiel Wells", company: "SAP" },
      { speakers: "Sumeet Anand", company: "Google" },
      { speakers: "Dale Evernden", company: "Rival Technologies" }
    ]
  },
  {
    year: 2023,
    talks: [
      { speakers: "Andrew Fung", company: "Evisort" },
      { speakers: "Ronna Chisholm", company: "Railyard Lab" },
      { speakers: "Sebastiano Boni", company: "Huawei" },
      { speakers: "Andrew Nip", company: "Frog Design" },
      { speakers: "Samantha Slinn", company: "Metalab" },
      { speakers: "Esther Park", company: "Sweetgreen" },
      { speakers: "Josh Chisholm", company: "Reddit" },
      { speakers: "Dominic Wong", company: "Invoke Digital" }
    ]
  },
  {
    year: 2024,
    talks: [
      { speakers: "Dan Nanasi", company: "Microsoft" },
      { speakers: "Maheen Sohail", company: "Meta" },
      { speakers: "Connor Lowe", company: "Invisible Dynamics" },
      { speakers: "Marta Bernstein", company: "Studio Matthews" },
      { speakers: "Mark Strathern", company: "Archivio Boggeri" },
      { speakers: "Christopher Elawa", company: "Meta" },
      { speakers: "Armina Foroughi", company: "Google" },
      { speakers: "Matt Walsh", company: "Green Stone" }
    ]
  }
];

export default LEGACY_SPEAKERS;
