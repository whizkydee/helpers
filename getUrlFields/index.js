const handleQuery = (aspect, url) => {
         // variable hoisting
         url = url || location.search;
         url = url.replace(/^\?/,"");
         var q = url.split("&");
         var result = {}
         
        for(var k=0; k < q.length; k++){
          var pair = q[k];
          if(typeof(aspect) !== "string"){
             aspect = pair.substring(0, pair.indexOf("=")-1)
          }
          if(pair.indexOf(aspect) != -1){
            result[aspect] = decodeURIComponent(pair.substring(pair.indexOf("=")+1));
          }
        }
         
         return result;
}

const getUrlFields = () => {
  return Object.assign(
      { $fields: [] },
      handleQuery()
}

export default getUrlFields
