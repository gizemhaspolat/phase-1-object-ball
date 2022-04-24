function gameObject() {
  const teams = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 10,
        },
      },
    },
  };
  return teams;
}

// console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

// console.log(homeTeamName());

function numPointsScored(name) {
  let object = gameObject();
  let team = object["home"]["players"];
  let points = team[name]["points"];
  if (points === undefined) {
    let team = object["away"]["players"];
    let points = team[name]["points"];
    return points;
  }
  return points;
}

function shoeSize(name) {
  let object = gameObject();
  let team = object["home"]["players"];
  for (player in team) {
    if (player.toLowerCase() === name.toLowerCase()) {
      return team[player]["shoe"];
    }
  }
  team = object["away"]["players"];
  for (player in team) {
    if (player.toLowerCase() === name.toLowerCase()) {
      return team[player]["shoe"];
    }
  }
  return 0;
}

function teamColors(team) {
  let object = gameObject();
  let colors = object[team]["colors"];
  return colors;
}

function teamNames() {
  let object = gameObject();
  let names = [];
  for (team in object) {
    names.push(object[team]["teamName"]);
  }
  return names;
}

function playerNumbers(team) {
  let object = gameObject();
  let numbers = [];
  for (team in object) {
    let players = object[team]["players"];
    for (player in players) {
      numbers.push(players[player]["number"]);
    }
  }
  return numbers;
}

function playerStats(playerName) {
  let object = gameObject();
  for (team in object) {
    let players = object[team]["players"];
    debugger;
    return players[playerName];
  }
}

// console.log(playerStats("Alan Anderson"));

function bigShoeRebounds() {
  let object = gameObject();
  let biggestShoe = 0;
  let playerName = "";
  for (team in object) {
    let players = object[team]["players"];
    for (player in players) {
      if (players[player].shoe > biggestShoe) {
        biggestShoe = players[player].shoe;
        playerName = players[player];
      }
    }
  }
  return playerName.rebounds;
}

// console.log(bigShoeRebounds());

function mostPointsScored() {
  let object = gameObject();
  let mostPoints = 0;
  let playerName = "";
  for (team in object) {
    let players = object[team]["players"];
    for (player in players) {
      if (players[player].points > mostPoints) {
        mostPoints = players[player].points;
        playerName = player;
      }
    }
  }
  return playerName;
}

// console.log(mostPointsScored());

function winningTeam() {
  let object = gameObject();
  let homePoints = 0;
  let awayPoints = 0;
  for (team in object) {
    let players = object[team]["players"];
    for (player in players) {
      homePoints += players[player].points;
      awayPoints += players[player].points;
    }
  }
  if (homePoints > awayPoints) {
    return "home";
  } else {
    return "away";
  }
}

// console.log(winningTeam());

function playerWithLongestName() {
  let object = gameObject();
  let longestName = 0;
  let playerName = "";
  for (team in object) {
    let players = object[team]["players"];
    for (player in players) {
      if (player.length > longestName) {
        longestName = player.length;
        playerName = player;
      }
    }
  }
  return playerName;
}

// console.log(playerWithLongestName());

function doesLongNameStealATon() {
  let object = gameObject();
  let longestName = playerWithLongestName();
  let longestNamedPlayersSteals = 0;
  if (object["home"]["players"][longestName] !== undefined) {
    longestNamedPlayersSteals = object["home"]["players"][longestName];
  } else {
    longestNamedPlayersSteals = object["away"]["players"][longestName];
  }
  for (team in object) {
    let players = object[team]["players"];
    for (player in players) {
      if (players[player].steals > longestNamedPlayersSteals) {
        return false;
      } else {
        return true;
      }
    }
  }
}

console.log(doesLongNameStealATon());
