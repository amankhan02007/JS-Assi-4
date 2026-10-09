//AND operator;
let age = 18;
let feespaid = true;
let enterexam = (age>=18) && feespaid;
console.log("can student enter a exam:", enterexam);
if(age>=18 && feespaid){
    console.log("Allowed");
}else{
    console.log("Not allowed");
}

let email = true;
let phonenum = false;
let login = email || phonenum;
console.log("can user login?:",login);

let isblocked = false;
if(isblocked){
    console.log("Access allowed")

}    else{
        console.log("Access denied");
    }

let islogin  = true;
let premium = false;
let hascoupon = true;
let hasdiscount = islogin && (premium || hascoupon);
console.log("Discount status: ",hasdiscount);

//practise task
//1 scenario 
//: discount mily ga agr;
// islogin = true;
// premium = false;
// hascoupon = true ho;
//isk output true hog because two conditions has true; 

//2 scenario 
//: discount nh mily ga agr;
// islogin = true;
// premium = false;
// hascoupon = false ho;
//isk output false hog because two conditions has false; 

//3 scenario 
//: user login h nh h;
// islogin = false;
// premium = true ;
// hascoupon = true ho;
//isk output false hog because first conditions has false; 