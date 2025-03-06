const s=[2,4,8];
function modifyArr(s){
    console.log(s);
    s[0]=3;
    s[1]=9;
    s[2]=27;
    return s;
}
console.log(modifyArr(s));
s[0]=32;
s[1]=44;
s[2]=21;
console.log(s);
// s=[2,4,6];       //cant do this
// console.log(s);  

const mathconst={
    pi:3.14,
};
Object.freeze(mathconst);
try{
    mathconst.pi=99;
}
catch(e){
    console.log(e);
}
console.log(mathconst.pi)