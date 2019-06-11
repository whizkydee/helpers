const handleQuery = (aspect, url) => {
         // variable hoisting
         url = url || document.location.search;
         
         if(typeof(aspect) == "string"){
              url = url.replace(/^\?/,"");
              var q = url.split("&");
              for(var k=0; k < q.length; k++){
                  if(q[k].indexOf(aspect) != -1)
                     return window.decodeURIComponent(q[k].substring(q[k].indexOf("=")+1));
              }
         }
         
         return null;
}

const getUrlFields = () => {
  return {$fields: Array}
}

export default getUrlFields
