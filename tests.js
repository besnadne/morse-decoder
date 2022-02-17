
function decode (string) {
    arrOfpairs = string.split('').map(el =>{
        switch (el) {
            case '.' :
                el = '10';
                break;
            case '-':
                el = '11';
                break;
            case ' ':
                el = '**'
        }
        return el
    });
   return arrOfpairs
    
}

console.log(decode("-."))