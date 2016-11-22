function scramble1(str1, str2) {
    var por,
        textToFind = str2.toLowerCase(),
        textToSearch = str1.toLowerCase();
    
    i=0;
    while (i<textToFind.length) {
        pos = textToSearch.indexOf(textToFind[i]);
        if (pos<0) {
            return false;        
        }
        i++;
        textToSearch = textToSearch.slice(0,pos) + textToSearch.slice(pos,textToSearch.length);
    };
    return true;
};

function scramble2(str1, str2) {
    var textToFind = str2.split(''),
        used = str2.split(''),
        textToSearch = str1.split('');
    
    while (textToFind.length > 0) {
        var elem =  textToFind[0];
        if (textToSearch.indexOf(elem)===-1){
            return false;
        }        
        textToFind = textToFind.filter(function(element){
            return elem !== element;
        });
        textToSearch = textToSearch.filter(function(element){
            return elem !== element;
        }); 
    };  
    return (textToFind.length === 0);
};