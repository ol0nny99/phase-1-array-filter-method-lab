// Code your solution here

function findMatching(collection, stringToMatch) {
const matchList = collection.filter (function (user){
    return user.toLowerCase() === stringToMatch.toLowerCase();
  });

  return matchList;
}

function fuzzyMatch(array, string) {
    const matchReturns = array.filter( function (user) {
        return user.startsWith(string);
    });

    return matchReturns;
}

function matchName(array, string) {

    const matchedReturn = array.filter( function (user) {
        return user.name === string;
    })
  
    return matchedReturn;
  }