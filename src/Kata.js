function scramble(str1, str2) {
    var toFind = str2.split('').sort(),
        store = str1.split(''),
        f = 0, qtyNedded, qtyInStore, 
        elem;

    while (f < toFind.length) {
        elem =  toFind[f];
        qtyNedded = 1;
        while (toFind[f+qtyNedded]===elem){
            qtyNedded++;
        } 
        f = f + qtyNedded;

        qtyInStore = store.filter(function(element){
            return elem === element;
        }).length;

        if (qtyNedded > qtyInStore){
            return false;
        }        
    };  
    return true;
};