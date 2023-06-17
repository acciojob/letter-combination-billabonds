function letterCombinations(input) {
  //Complete the function
	// let input = "234";

let table = {
    "2" : "abc",
    "3" : "def",
    "4" : "ghi",
    "5" : "jkl",
    "6" : "mno",
    "7" : "pqrs",
    "8" : "tuv",
    "9" : "wxyz"
}

let solution  = [];

function calculate(currIndex, updatedString){

    if(updatedString.length == input.length)
    {
        solution.push(updatedString);
        return ;
    }

    let currentchar = input[currIndex];

    for(let i = 0;i < table[currentchar].length ;i++)
    {
        calculate(currIndex+1, updatedString + table[currentchar][i]);
    }
}

calculate(0,"");

	return solution;

	
}

module.exports = letterCombinations;
