function scramble(str1, str2) {
    var toFind = str2.split('').sort(), 
        store = str1.split('').sort(),  
        f = 0, qtyNedded, qtyInStore, 
        elem;

    while (f < toFind.length) {
        elem = toFind[f];
        qtyNedded = 1;
        while (toFind[f+qtyNedded]===elem){
            qtyNedded++;
        } 
        
        var g = f;
        qtyInStore = 0;
        while (g < store.length && qtyInStore<qtyNedded){
            if (store[g] === elem){
                qtyInStore++;
            }
            g++;
        }
        if (qtyInStore!==qtyNedded){
            return false;
        }

        f = f + qtyNedded;      
    };  
    return true;
};

/*

aace

aabbcdef


*/