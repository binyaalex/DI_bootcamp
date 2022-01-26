console.log(`1`)
// function mergeWords(firstword) {
// 	let firstWord = firstword
// 	function secondW(secondword = ``) {
// 		let secondWord = secondword
// 		let mergeWords1 = firstword + `` + secondWord
// 		console.log(mergeWords1)
// 	}
// 	return secondW
// 	console.log(mergeWords1)
// }

// function mergeWords(string) {
//  return function(nextString) {
//    if (nextString === undefined) {
//      return string;
//    } else {
//      return mergeWords(string + ' ' + nextString);
//    }
//  }
// }

const mergeWords = (string) => (nextString) => nextString === undefined ? string : mergeWords(string + ' ' + nextString); 
mergeWords('Hello')(`ass`);