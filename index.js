// Yellow Pager Assignment
//Write a function that accepts a 10-character string of letters and returns a corresponding phone number string. If the input letter string is not exactly 10 characters, the function should return false instead.

function letterConverter(str){
    if (str.length !== 10) {
      return false;
    }

    var arr = str.toLowerCase().split('');
    var num = '';

    for (var i = 0; i < arr.length; i++) {
      if( arr[i] === 'a' || arr[i] === 'b' || arr[i]==='c') {
        num += 2;
      } else if (arr[i] === 'd' || arr[i] === 'e' || arr[i] ==='f'){
        num += 3;
      } else if (arr[i] === 'g' || arr[i] === 'h' || arr[i] ==='i'){
        num += 4;
      } else if (arr[i] === 'j' || arr[i] === 'k' || arr[i] ==='l'){
        num += 5;
      } else if (arr[i] === 'm' || arr[i] === 'n' || arr[i] ==='o'){
        num += 6;
      } else if (arr[i] === 'p' || arr[i] === 'q' || arr[i] ==='r' || arr[i] ==='s'){
        num += 7;
      } else if (arr[i] === 't' || arr[i] === 'u' || arr[i] ==='v'){
        num += 8;
      }
      else if (arr[i] === 'w' || arr[i] === 'x' || arr[i] ==='y' || arr[i] === 'z'){
        num += 9;
      }
    }
    return num;
}

letterConverter("Jojowang");
