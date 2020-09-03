// Given two strings, find the overlap of the end of the first
//   string, and the beginning of the second string, if any. If 
//   there is no overlap, return an empty string
//
// Example:
//   firstString = 'I like t'
//   secondSTring =     'e turtles'
//   return             'e t'

//findOverlap('I like t', 'e turtles')

function findOverlap(firstString, secondString) {
    var firstStringArr = firstString.split('');
    var overlapString = '';
    var index = -1;
    var previousIndex = -1;
    firstStringArr.forEach(e => {
        index = secondString.indexOf(e);
        if (index == 0) {
            overlapString = e;
            previousIndex = 0;
        }

        if (previousIndex > -1 && previousIndex + 1 == index) {
            overlapString = `${overlapString}${e}`;
            previousIndex = index;
        }

    });
    return overlapString;
}