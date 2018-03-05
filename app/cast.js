// utility function
function makeRouteFromName(name) {
  const firstSpacePos = name.indexOf(' ');
  const endPos = firstSpacePos < 6 ? 6 : firstSpacePos;
  // Using a RegEx Pattern to remove spaces from searchedCharacter
  // https://goo.gl/6e7TJ
  return name.replace(/\s/g,'').substring(0,endPos).toLowerCase();
}

// Constructor function
function Character(name, role, age, fp) {
    this.routeName = makeRouteFromName(name);
    this.name = name;
    this.role = role;
    this.age = parseFloat(age);
    this.forcePoints = parseFloat(fp);
  }
  
// Startup Data
// ===========================================================
const characters = [
  new Character('Yoda','Jedi Master', 900, 2000),
  new Character('Darth Maul','Sith Lord',200,1200),
  new Character('Obi Wan Kenobi','Jedi Master',55,1350)
];
 
module.exports = {
  characters: characters,
  find: function(rName) {
     return characters.find(c => c.routeName === rName);
  },
  add: function(c) { 
    characters.push(new Character(c.name, c.role, c.age, c.forcePoints));
  }
};
  
  