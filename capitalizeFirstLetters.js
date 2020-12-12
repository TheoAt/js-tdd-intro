//Function
function capitalizeFirstLetters(input) {
    const splitInput = input.split(' ');
    for(let i = 0; i < splitInput.length; i++)
        splitInput[i] = splitInput[i].charAt(0).toUpperCase() + splitInput[i].slice(1);
    return splitInput.join(' ');
}

module.exports = capitalizeFirstLetters;