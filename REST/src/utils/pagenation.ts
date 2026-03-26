export function pagenation(page: number, pagesize: number | undefined){   
    if(page < 1){
        page = 1;
    }
    if(pagesize == undefined || pagesize < 1){
      pagesize = 10;
    }
    const OFFSET = (page - 1) * pagesize;
    
    return " LIMIT " + pagesize + " OFFSET " + OFFSET;
}