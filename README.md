const catStock = []
    const catCategory = ()=>{
   if(cat){
    cat.forEach( function(childArray) {
      childArray.catList.forEach(function(item){
        catStock.push(item.name)
      });
     });
   }
    }
    catCategory()


    const doneData = catStock ? catStock.map((item)=>{
      return {
               url : `${baseUrl}/page/${item.id}/${item.name.replace(/\s+/g, '-')}`,
              lastModified : new Date()
      }
    }) : null