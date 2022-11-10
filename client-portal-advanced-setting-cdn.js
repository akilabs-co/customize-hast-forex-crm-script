//----  EN Text
if(getLang()===`gb`){ 
   //--1. HAST FOREX My Page Login
    setNewContent(".login-body > .login-title",  "HAST FOREX My Page Login"); 
}
//--- JP Text
if(getLang()===`jp`){
    //--1. HAST FOREXマイページログイン
     setNewContent(".login-body > .login-title",  "HAST FOREXマイページログイン"); 
}

//---- FUNCTIONS
function getLang(){
	const element = $("span.flag")[0].attributes[1].nodeValue;
        const url = element.split("//")[1];
       const lang = url.split("/")[3].split("?")[0].split(".png")[0];
       return lang;
}
function setNewContent(selector, newContent){
    const element = $(selector);
    const textToReplace = element.text();
     const newText = textToReplace.replace(textToReplace , newContent);
    console.log(newText);
    element.text(newText);
}