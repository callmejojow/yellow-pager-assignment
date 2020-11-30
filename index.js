// Yellow Pager Assignment
//Write a function that accepts a 10-character string of letters and returns a corresponding phone number string. If the input letter string is not exactly 10 characters, the function should return false instead.

function convertPhoneLetters(input) {
  if (input.length !== 10) return false;
  input = input.toLowerCase();
  let phoneNumber = '';
  for (let character of input) {
    switch (character) {
      case '0': phoneNumber += '0'; break;
      case '1': phoneNumber += '1'; break;
      case '2': phoneNumber += '2'; break;
      case '3': phoneNumber += '3'; break;
      case '4': phoneNumber += '4'; break;
      case '5': phoneNumber += '5'; break;
      case '6': phoneNumber += '6'; break;
      case '7': phoneNumber += '7'; break;
      case '8': phoneNumber += '8'; break;
      case '9': phoneNumber += '9'; break;


      case 'a': case 'b': case 'c': phoneNumber += '2'; break;
      case 'd': case 'e': case 'f': phoneNumber += '3'; break;
      case 'g': case 'h': case 'i': phoneNumber += '4'; break;
      case 'j': case 'k': case 'l': phoneNumber += '5'; break;
      case 'm': case 'n': case 'o': phoneNumber += '6'; break;
      case 'p': case 'q': case 'r': case 's': phoneNumber += '7'; break;
      case 't': case 'u': case 'v': phoneNumber += '8'; break;
      case 'w': case 'x': case 'y': case 'z': phoneNumber += '9'; break;

    
      default:
        return false;
    }
  }

  return phoneNumber;
}
convertPhoneLetters("abcdefghij");



  // // Another version goes like this below:

  // const textToKeypadNumber = (text) => {
  //   const phoneCharMap = {
  //     a: "2",
  //     b: "2",
  //     c: "2",
  //     d: "3",
  //     e: "3",
  //     f: "3",
  //     g: "4",
  //     h: "4",
  //     i: "4",
  //     j: "5",
  //     k: "5",
  //     l: "5",
  //     m: "6",
  //     n: "6",
  //     o: "6",
  //     p: "7",
  //     q: "7",
  //     r: "7",
  //     s: "7",
  //     t: "8",
  //     u: "8",
  //     v: "8",
  //     w: "9",
  //     x: "9",
  //     y: "9",
  //     z: "9",
  //     "+": "00",
  //     " ": ""
  //   };
  //   const _text = text.split("");
  //   return _text
  //     .map(char => {
  //       const number = phoneCharMap[char.toLowerCase()];
  //       if (number) return phoneCharMap[char.toLowerCase()];
  //       return char;
  //     })
  //     .join("");
  // }

  // textToKeypadNumber("Never");



