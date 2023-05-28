function gameObject() {
    return {
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
            rebounds: 11,
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
            slamDunks: 12,
          },
        },
      },
    };
  }
  
  // Test the gameObject function
  const game = gameObject();
  console.log(game);

  // numPointsScored function
  function numPointsScored(playerName) {
    const game = gameObject();
  
    if (game.home.players[playerName]) {
      return game.home.players[playerName].points;
    }
    else if (game.away.players[playerName]) {
      return game.away.players[playerName].points;
    }
  else{
    return null; }
  }
  
  // Test the numPointsScored function
  console.log(numPointsScored("Alan Anderson")); //  22
  console.log(numPointsScored("Brendan Haywood")); //  6
  console.log(numPointsScored("sami")); //  null
  
  // shoeSize  function
  function shoeSize(playerName) {
    const game = gameObject();
  
    if (game.home.players[playerName]) {
      return game.home.players[playerName].shoe;
    }
     else if (game.away.players[playerName]) {
      return game.away.players[playerName].shoe;
    }
  else{
    return null; }
  }
  console.log(shoeSize("Brendan Haywood")); //  15
  console.log(shoeSize("Alan Anderson"));//16

  //teamColors function
  function teamColors(teamName) {
    const game = gameObject();
  
    if (game.home.teamName === teamName) {
      return game.home.colors;
    }
    else if (game.away.teamName === teamName) {
      return game.away.colors;
    }
  else{
    return null; 
}
  }
  console.log(teamColors("Charlotte Hornets"));//['Turquoise', 'Purple']
  console.log(teamColors("Brooklyn Nets"));//['Black', 'White']
  
  //teamNames function

  function teamNames() {
  const game = gameObject();
  return [game['home']['teamName'], game['away']['teamName']];
}
console.log(teamNames())//['Brooklyn Nets', 'Charlotte Hornets']

//playerNumbers function
function playerNumbers(teamName) {
  const game = gameObject();
  let numbers = [];

  if (game.home.teamName === teamName) {
    return numbers = Object.values(game.home.players).map((player) => player.number);
  }
  else if (game.away.teamName === teamName) {
    return numbers = Object.values( game.away.players).map((player) => player.number);
  }
else{
  return null; 
}
}
console.log(playerNumbers("Brooklyn Nets"));//[0, 30, 11, 1, 31]
console.log(playerNumbers("Charlotte Hornets"));//[4, 0, 2, 8, 33]

//playerStats function 
function playerStats(playerName) {
  const game = gameObject();

 
  if (game.home.players.hasOwnProperty(playerName)) {
    return game.home.players[playerName];
  }

  
  else if (game.away.players.hasOwnProperty(playerName)) {
    return game.away.players[playerName];
  }
else{ return null;}
 
}

console.log(playerStats("Bismak Biyombo"));
console.log(playerStats("Alan Anderson"));

/*function playerStats(playerName) {
  const game = gameObject();

  if (game.home.players[playerName]) {
    return game.home.players[playerName].shoe;
  }
   else if (game.away.players[playerName]) {
    return game.away.players[playerName].shoe;
  }
else{
  return null; }
}
console.log(playerStats("Brendan Haywood")); //  
console.log(playerStats("Alan Anderson"));//
*/
/*function playerNumbers(teamName) {
  const game = gameObject();
  let numbers = [];

  // Check if the team is the home team
  if (game.home.teamName === teamName) {
    const homePlayers = game.home.players;
    numbers = Object.values(homePlayers).map((player) => player.number);
  }

  // Check if the team is the away team
  if (game.away.teamName === teamName) {
    const awayPlayers = game.away.players;
    numbers = Object.values(awayPlayers).map((player) => player.number);
  }

  return numbers;
} */
  /*function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
  
  console.log(homeTeamName())*/

  function homeTeamName(){
    return gameObject()['home']['teamName']
  }
  
  console.log(homeTeamName())//Brooklyn Nets
  

  //Accessing Key Values and Iterating Through Objects
  let oo = { foo: 42, bar: 83, "key w/ spaces": true };
  console.log(oo["foo"]);//42
  console.log(oo["bar"]);//83
  console.log(oo["key w/ spaces"]);//true
  console.log(oo.foo);//42
console.log(oo.bar);//83

let oo1 = { foo: 42, bar: 83, baz: 79 };
for (let key in oo1) {
  let value = oo1[key];
  console.log("key:", key, "value:", value);
}
//key: foo value: 42
//key: bar value: 83
//key: baz value: 79

console.log(" Object.keys(oo) ", Object.keys(oo));//['foo', 'bar', 'key w/ spaces']
console.log(" Object.values(oo) ", Object.values(oo));//[42, 83, true]
console.log("Object.entries(oo) ", Object.entries(oo));// ['foo', 42]['bar', 83]['key w/ spaces', true]