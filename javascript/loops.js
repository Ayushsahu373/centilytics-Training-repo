var arr=[];
let i=93;
x=0;
while(i<=150){
    arr[x]=i;
    x++;
    i+=2*3;
}
// console.log(arr);
var arr2=[];
for(var z=0;z<arr.length;z++){
        arr2.push(arr[z]);
    // console.log(arr[z]);

}
// console.log(arr2)
let m='c';
for(m in arr){
    // console.log(m)
}

for(m of arr){
    // console.log(m);
}
x=1;
do{
console.log("eat 5 star do nothing");
x--;
}
while(x!=0)