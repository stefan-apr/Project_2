USE SenSaison_db;

INSERT IGNORE INTO Observations
    (openId, pictureId, dateObs, timeObs, latitude, longitude, category, species, speciesSciName, speciesConfidence, firstConfidence, briefDescription, extendedDescription)
    VALUES ("12345", "12345001", "2018-12-11", "13:59:00", 48.0840, -121.9687, "weather", NULL, NULL, NULL, 3, "First frost", NULL),
    ("678910", "678910001", "2019-02-09", "06:29:00", 47.6062, -122.3321, "animal", "White-Crowned Sparrow", "Zonotrichia leucophrys", 5, 4, "First WCSP seen this spring", "Two male WCSP seen in backyard bird feeder early this morning"),
    ("678910", "678910002", "2017-09-15", "10:31:00", 35.0603, -83.3876, "plant", "White oak", "Quercus alba", 3, 2, "White oaks losing leaves", NULL),
    ("246810", "246810001", "2018-07-21", "07:50:00", 39.7817, -89.6501, "plant", "Low-bush blueberry", NULL, NULL, 4, "First blueberries", "Warm sunny day, first blueberries of the summer, birds feasting"),
    ("246810", "246810002", "2017-07-01", "06:42:00", 39.8732, -89.6730, "fungus", "Oyster mushrooms", "Pleurotus ostreatus", NULL, 1, "First oyster mushrooms", NULL),
    ("246810", "246810003", "2018-07-30", "17:20:00", 33.6891, -78.8867, "weather", NULL, NULL, NULL, 5, "First hurricane of the year hits town", NULL),
    ("13579", "13579001", "2017-04-03", "14:15:00", 39.0997, -94.5786, "weather", NULL, NULL, NULL, 5, "First tornado of the year", NULL),
    ("13579", "13579002", "2018-02-27", "07:13:00", 39.0465, -95.6850, "animal", "White-tailed deer", NULL, 5, 4, "Bucks losing their antlers", NULL),
    ("364789", "13579003", "2019-03-08", "10:27:00", 47.4230, -120.3110, "fungus", "Morel mushrooms", "Morchella spp.", 4, 2, "Found first morels of the season", NULL),
    ("13579", "13579004", "2018-11-27", "08:48:00", 37.6872, -97.3301, "land_water", NULL, NULL, NULL, 3, "Local lake frozen over", "The lake had previously had a few patches of ice. Completely froze over last night. Not solid enough to walk on."),
    ("241882", "13579005", "2019-04-21", "07:58:00", 37.8239, -96.2892, "animal", "Raccoon", NULL, 5, 3, "First raccoon kits", "Family of raccoons seen in the local park this morning, babies look very young");

INSERT IGNORE INTO Users
    (openId, firstName, lastName, email, issuer, username)
    VALUES ("678910", "Stefan", "Apreutesei", "sapreut@uw.edu", "google", "stefana"),
    ("246810", "Julie", "Mathews", "julie@mathews.com", "twitter", "juliem"),
    ("13759", "John", "Smith", "john@smith.com", "twitter", "johnsmith"),
    ("540884", "Jane", "Doe", "jane@doe.com", "facebook", "janedoe"),
    ("763781", "Bonnie", "Outlaw", "bonnie@outlaw.com", "google", "bonnieoutlaw"),
    ("037289", "Clyde", "Outlaw", "clyde@outlaw.com", "google", "clydeoutlaw"),
    ("364789", "Gwen", "Stefani", "gwen@stefani.com", "facebook", "gwenstefani"),
    ("241882", "Spider", "Man", "spider@man.com", "google", "spiderman");
    


/*  unhex(replace(uuid(),'-','')) */