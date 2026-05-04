let a=12345;
let sum=0;
while(a>0){
    let c=a%10;
    sum+=c;
    a=Math.floor(a/10);
}
console.log(sum);