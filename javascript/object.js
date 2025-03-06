var obj={
    "id":589,
    "name":"Ayush",
    "email":"ayush.sahu@centilytics.com",
    "colleague":["anurag","aavi","anshika"],
    "address":{
        "city":"Bhopal",
        "state":"MP",
        "country":"India"
    },
    "colleague-profile":{"anurag":"product manager","aavi":"backend","anshika":"frontend"},
}
console.log(obj);
console.log(JSON.stringify(obj))

var myname=obj.name;
console.log(myname);
var myemail=obj["email"];
console.log(myemail);
var key="address";
var mycity=obj[key].city;
console.log(mycity);

//upading object property
obj.name="Ayush Sahu";
console.log(obj);
//delete properties
delete obj.email;
console.log("After deleting email property",obj);

//adding new properties
obj.email="ayush.sahu@centilytics.com";
console.log("After adding email property",obj);

//accesing array element
console.log(obj.colleague[1]);

//collection copy
var obj2=Object.assign({},obj);
console.log(obj2);
//stringify object
var obj3 = JSON.stringify(obj2);
console.log(obj3);

for (let ch of obj3){
    console.log(ch);
}

obj3.toLowerCase();
console.log(obj3);
obj3.toUpperCase();
console.log(obj3);