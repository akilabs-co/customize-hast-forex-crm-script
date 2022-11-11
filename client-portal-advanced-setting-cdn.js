switch(getLang()){
  case `gb`:
    //--1. HAST FOREX My Page Login
    setNewContent(getLang(), ".login-body > .login-title",  "HAST FOREX My Page Login"); 
    break;
  case `jp`:
    //--1. HAST FOREXマイページログイン
    setNewContent(getLang(), ".login-body > .login-title",  "HAST FOREXマイページログイン");
    break;
  default:
    break;
} 

//---- FUNCTIONS
function getLang(){
  const element = $("span.flag")[0].attributes[1].nodeValue;
  const url = element.split("//")[1];
  const lang = url.split("/")[3].split("?")[0].split(".png")[0];
  return lang;
}

function setNewContent(lang, selector, newContent){
  const element = $(selector);
  const textToReplace = element.text();
  const newText = textToReplace.replace(textToReplace , newContent);  
  element.text(newText);
}