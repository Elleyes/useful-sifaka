function spinalCase(str) {


  return str.replace(/([a-z])([A-Z])/g, '$1 $2').split(/(?:\s|_)/g).join("-").toLowerCase();

}
spinalCase("Teletubbies say Eh-oh");
