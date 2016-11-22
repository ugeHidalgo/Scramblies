function scramble(str1, str2) {
    var toFind = str2.split(''),
        store = str1.split('');
    
    while (toFind.length > 0) {
        var elem =  toFind[0];
        var l = toFind.length;
        toFind = toFind.filter(function(element){
            return elem !== element;
        });
        var qtyNedded = l - toFind.length;


        var qtyInStore = store.filter(function(element){
            return elem === element;
        }).length;

        if (qtyNedded > qtyInStore){
            return false;
        }        
    };  
    return (toFind.length === 0);
};