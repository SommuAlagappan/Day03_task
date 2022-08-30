//for loop
var person= ["name", "age", "gender", "education"]

for (let i=0; i<person.length; i++){
    console.log(person[i]);
}


//for in loop - loop through objects
var person = 
    {
    name:"aravindh",
    gender:"male",
    }
for (let ele in person){
    console.log("Name is " + person.name + " and gender is " + person.gender)   
    console.log("key is " + ele + " and value is " + person[ele])     
}


//for of loop - loop through array elements
var details = [
    {
    name:"aravindh",
    gender:"male",
    },
    {
    education:"MA.Social Entrepreneurship",
    Working:"yes"    
    }
]
for (let ele of details){
    console.log("Name is " + details[0].name + " and gender is " + details[0].gender)  
    console.log(`Degree is ${details[1].education} and currently working is ${details[1].Working}` ) 
}


//forEach  -  loop through array elements
var details = [
    {
    name:"aravindh",
    gender:"male",
    },
    {
    education:"MA.Social Entrepreneurship",
    Working:"yes"    
    }
]
     details.forEach(() => {
        console.log(`Degree is ${details[1].education} and currently working is ${details[1].Working}` ) 
     })

