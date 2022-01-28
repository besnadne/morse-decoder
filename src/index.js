const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    expr = expr.split('');
    
    const map = {
        '-': 10,
        '.': 11,
        ' ': '*'
    }
    for (let key in map) {
        expr.forEach(element => {
            if(element === key){
                arr.push(map[key])
            }
        });
    }
    arr = arr.join('').split('')
    while (arr.length < 10){
        if(arr[1] === '*'){
            arr.unshift(0+'')
        }else{
            arr.unshift('*')
        } 
    } 
  
   return arr.join('')
}

module.exports = {
    decode
}