function run(event,textBox){
  const htmlCode=document.getElementById("html-code")
  const cssCode=document.getElementById("css-code")
  const jsCode=document.getElementById("js-code")
  const outputDoc=document.getElementById("output").contentDocument
   
  if(textBox.id=='html-code')
     htmlCode.value=pre_suggest(event.key,htmlCode)
  else if(textBox.id=='css-code')
     cssCode.value=pre_suggest(event.key,cssCode)
  else
     jsCode.value=pre_suggest(event.key,jsCode)
   
 
  page=output(htmlCode,cssCode,jsCode)
  outputDoc.write(page)
  outputDoc.close()
 

}

function pre_suggest(key,Code){
   let posOfCursor=Code.selectionStart,asciiOfLeft;
   if(key=='{' | key=='['){
       asciiOfLeft=key.charCodeAt()+2;
       Code.value=Code.value.slice(0,Code.selectionStart)+String.fromCharCode(asciiOfLeft)+Code.value.slice(Code.selectionStart)
   }
   else if(key=='('){
      asciiOfLeft=key.charCodeAt()+1;
      Code.value=Code.value.slice(0,Code.selectionStart)+String.fromCharCode(asciiOfLeft)+Code.value.slice(Code.selectionStart)
   }
   else if(key=='"' | key=='\'')
      Code.value=Code.value.slice(0,Code.selectionStart)+key+Code.value.slice(Code.selectionStart)
 
   Code.setSelectionRange(posOfCursor,posOfCursor) 

   return Code.value;
}


function output(html,css,js){
  const outputPage=html.value+"<style>"+css.value+"</style>"+"<script>"+js.value+"</script>"
  return outputPage;
}

