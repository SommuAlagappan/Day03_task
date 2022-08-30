var alagappan=[
    {
    basicInformation:{
        firstName:"Alagappan",
        lastname:"M",
        emailid:"alagappan.1996@gmail.com",
        phoneNumber:7123456789,
        nationality:"INDIAN",
        state:"tamil nadu",
        address:"125/38,car street",
        "city/town":"karaikudi",
        postalcode:630002,
    },
    workAndExperience:"I am a fresher,willing to work in fullstack developer role  ",
    education:[
        {
            school:"Thersa matriculation higher secondary school,Karur,639001.",
            year_of_10th_pass:"2012",
            year_of_12th_pass:"2014",
        },
        {
            college:"Loyola College, chennai.",
            degree:"Bachelor of Commerce",
            department:"Commerce",
            yearofpassed:2017,
        },
        
    ],
    skills:[
        "1)good knowledge in javascript",
        "2)well in front end technologies react.js",
        "3)knowledge in backend tools such as node.js",
        "4)good in database such as sql,mongoDB",
    ],
    languagesKnown:["English","Tamil"],
    interest: "Hearing music"
}]


console.log(typeof(alagappan));
let alagappanjson = JSON.stringify(alagappan);
console.log(alagappanjson);
console.log(typeof(alagappanjson));

let alagappanobj = JSON.parse(alagappanjson);
console.log(alagappanobj);
console.log(typeof(alagappanobj));