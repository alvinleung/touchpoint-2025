const LEGACY_SPEAKERS = [
  {
    year: 2012,
    speakers: [
      { name: "Matt Walsh", company: "Crispin, Porter + Bogusky" },
      { name: "Matt Conway", company: "frog design" },
      { name: "Caterina Sanders", company: "Habanero" },
      { name: "Rock Leung", company: "SAP" },
      { name: "Marie-Claude Lavoie", company: "LVL" },
      { name: "Richard Z'Graggen", company: "LVL" },
      { name: "Ryan Betts", company: "Adobe" },
    ],
  },
  {
    year: 2013,
    speakers: [
      { name: "Matt Conway", company: "frog design" },
      { name: "Ric Ewing", company: "Digital Kitchen" },
      { name: "Alaa Mendili", company: "Digital Kitchen" },
      { name: "Tai Hubbert", company: "Digital Kitchen" },
      { name: "Alex Riegelman", company: "Crispin, Porter + Bogusky" },
      { name: "Kim Laama", company: "AKQA" },
      { name: "Michael Smith", company: "AKQA" },
      { name: "Don Chisholm", company: "Dossier" },
      { name: "Connor Lowe", company: "SAP" },
      { name: "Tracey Shaw", company: "Habanero" },
      { name: "Mami Shimada", company: "Habanero" },
      { name: "Ben Ng", company: "Habanero" },
      { name: "Adam Crandall", company: "Habanero" },
    ],
  },
  {
    year: 2014,
    speakers: [
      { name: "Travis Kirton", company: "Slant Design" },
      { name: "Jocelyn Lai", company: "R/GA" },
      { name: "Ryan Opina", company: "Engine Digital" },
      { name: "Michael Farrell", company: "Twitter" },
      { name: "Azmina Karimi", company: "Crispin, Porter + Bogusky" },
      { name: "Alex Beim", company: "Tangible Interaction" },
      { name: "Amy Ngai", company: "AxiomZen" },
    ],
  },
  {
    year: 2015,
    speakers: [
      { name: "Josh Hayward", company: "Digital Kitchen" },
      { name: "Alaa Mendili", company: "Digital Kitchen" },
      { name: "Warren Schramm", company: "Teague" },
      { name: "Charles Law", company: "Green Stone" },
      { name: "Christopher Marsh", company: "AKQA" },
      { name: "Margherita Porra", company: "Arithmetic" },
      { name: "Derek Chan", company: "R/GA" },
      { name: "Joanna Zander", company: "Lululemon" },
      { name: "Andrew Salituri", company: "Facebook" },
      { name: "Matt Turpin", company: "Facebook" },
      { name: "Adam Wilson", company: "Vision Critical" },
      { name: "Tamasin Reno", company: "Vision Critical" },
      { name: "Jeremy Bowen", company: "Microsoft" },
      { name: "Holger Kuehnle", company: "Microsoft" },
      { name: "Jon Bell", company: "Twitter" },
      { name: "Ryan Opina", company: "Engine Digital" },
    ],
  },
  {
    year: 2016,
    speakers: [
      { name: "Joshua Noble", company: "Teague" },
      { name: "Ryan Opina", company: "Engine Digital" },
      { name: "Raymond Lo", company: "AKQA" },
      { name: "Pat Smith", company: "Dossier" },
      { name: "Jackie Fok", company: "R/GA" },
      { name: "Demetre Arges", company: "Digital Kitchen" },
      { name: "Nick Chow", company: "Axiom Zen" },
      { name: "Kitty Bourne", company: "Telus Digital" },
      { name: "Julian Richards", company: "Telus Digital" },
      { name: "Matt Walsh", company: "Green Stone" },
      { name: "Simon Kwok", company: "Pivotal Labs" },
      { name: "Stephen Clements", company: "Junior" },
      { name: "Kevin Wick", company: "Frog Design" },
    ],
  },
  {
    year: 2017,
    speakers: [
      { name: "Chelsea Garber", company: "Inamoto & Co" },
      { name: "Trixie Calaquian", company: "Engine Digital" },
      { name: "David Choy", company: "SAP" },
      { name: "Terrence Ma", company: "R/GA" },
      { name: "Ronna Chisholm", company: "Dossier" },
      { name: "Felix Chang", company: "Artefact" },
      { name: "Kate Reid", company: "Make" },
      { name: "David Look", company: "Engine Digital" },
      { name: "Irene Go", company: "SAP" },
      { name: "Christine Poh", company: "Green Stone" },
      { name: "Mallory O'Connor", company: "Habanero" },
      { name: "Liam Thurston", company: "TWG" },
      { name: "Amy Ngai", company: "Axiom Zen" },
      { name: "Sean Cardiff", company: "Green Stone" },
    ],
  },
  {
    year: 2018,
    speakers: [
      { name: "Arman Nobari", company: "YouTube" },
      { name: "Katya Kostyukova", company: "Facebook" },
      { name: "Maheen Sohail", company: "Facebook" },
      { name: "Margaret Gray", company: "Metalab" },
      { name: "Dominic Wong", company: "Invoke" },
      { name: "Heather Chiang", company: "Finger Food" },
      { name: "Nick Facey", company: "Finger Food" },
      { name: "Robin Ashmore", company: "IBM" },
      { name: "Steve Winchell", company: "Inamoto & Co" },
      { name: "Sheryl Cababa", company: "Artefact" },
      { name: "Mallory O'Connor", company: "Habanero" },
      { name: "Scott Strathern", company: "Engine Digital" },
      { name: "Ariana De Ryss", company: "Green Stone" },
    ],
  },
  {
    year: 2019,
    speakers: [
      { name: "Amanda Poh", company: "Inamoto & Co" },
      { name: "Charles Law", company: "Green Stone" },
      { name: "Darlene Arriola", company: "WorkSafeBC" },
      { name: "Sean Wolcott", company: "Rationale" },
      { name: "Dan Nanasi", company: "Engine Digital" },
      { name: "Sheila Mackenzie", company: "Spatial Design" },
      { name: "Terrence Ma", company: "R/GA" },
      { name: "Michael Ellsworth", company: "Civilization" },
    ],
  },
  {
    year: 2020,
    speakers: [
      { name: "Cherihan Hassun", company: "Railyard Lab" },
      { name: "Ronna Chisholm", company: "Dossier" },
      { name: "Peter Pimentel", company: "Engine Digital" },
      { name: "Guramrit Singh", company: "Telus Digital" },
      { name: "Ed Prinsen", company: "Telus Digital" },
      { name: "Amy Ngai", company: "Asana" },
      { name: "Wesley Yun", company: "Asana" },
      { name: "Edwy Woo", company: "All Purpose" },
      { name: "Elan Asselstime", company: "All Purpose" },
      { name: "Hugh Knapp", company: "All Purpose" },
      { name: "Will Odom", company: "Everyday Design Studio" },
      { name: "Jordan Eshpeter", company: "Everyday Design Studio" },
      { name: "Armi Behzad", company: "Everyday Design Studio" },
    ],
  },
  {
    year: 2022,
    speakers: [
      { name: "Andrew Fung", company: "Clio" },
      { name: "Roxanne Henschke", company: "Engine Digital" },
      { name: "Robbie Sebullen", company: "Invoke Digital" },
      { name: "Robyn Goodridge", company: "Facebook" },
      { name: "Kaveh Hashtroodi", company: "City of Surrey" },
      { name: "Leah (Maestri) Evernden", company: "Microsoft" },
      { name: "Salathiel Wells", company: "SAP" },
      { name: "Sumeet Anand", company: "Google" },
      { name: "Dale Evernden", company: "Rival Technologies" },
    ],
  },
  {
    year: 2023,
    speakers: [
      { name: "Andrew Fung", company: "Evisort" },
      { name: "Ronna Chisholm", company: "Railyard Lab" },
      { name: "Sebastiano Boni", company: "Huawei" },
      { name: "Andrew Nip", company: "Frog Design" },
      { name: "Samantha Slinn", company: "Metalab" },
      { name: "Esther Park", company: "Sweetgreen" },
      { name: "Josh Chisholm", company: "Reddit" },
      { name: "Dominic Wong", company: "Invoke Digital" },
    ],
  },
  {
    year: 2024,
    speakers: [
      { name: "Dan Nanasi", company: "Microsoft" },
      { name: "Maheen Sohail", company: "Meta" },
      { name: "Connor Lowe", company: "Independent" },
      { name: "Marta Bernstein", company: "Studio Matthews" },
      { name: "Mark Strathern", company: "Archivio Boggeri" },
      { name: "Christopher Elawa", company: "Meta" },
      { name: "Armina Foroughi", company: "Google" },
      { name: "Matt Walsh", company: "Green Stone" },
    ],
  },
];

export default LEGACY_SPEAKERS;
