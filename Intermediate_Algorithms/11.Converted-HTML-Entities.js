function convertHTML(str) {

//     if (str.includes('&')) {
//       return str.replace(/&/g, '&amp;');
//        }
//     if (str.includes('<')) {
//       return str.replace(/</g, '&lt;');
//     }
//     if (str.includes('>')) {
//       return str.replace(/>/g, '&gt;');
//     }
//     if (str.includes('"')) {
//       return str.replace(/"/g, '&quot;');
//     }
//     if (str.includes("'")) {
//       return str.replace(/'/g, '&apos;');
//     }


//   var arr = str.split("");

//   for (i=0; i<arr.length; i++){
//     switch (arr[i]) {
//       case '&':
//         arr[i] = '&amp;';
//         break;
//       case '<':
//         arr[i] = '&lt;';
//         break;
//       case '>':
//         arr[i] = '&gt;';
//         break;
//       case '"':
//         arr[i] = '&quot;';
//         break;
//       case "'":
//         arr[i] = '&apos;';
//         break;
//     }
//   }
//   return arr.join("");
// }


//REDO WITH REPLACE
return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
convertHTML("Dolce & Gabbana");
