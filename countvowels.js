const vow=function(str){
    count=0;
    const v="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(v.includes(str[i])){
            count++;
        }
    }
    console.log(count);
}
vow("mUskAn");