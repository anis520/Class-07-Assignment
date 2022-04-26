

const all_student=[

               {
                  name  : 'Anisul',
                  class : 10 ,
                  age   : 21 ,
                  gen   : 'male',
                  loc   : 'Chittagong',
                  fees  : 1000
               },
               {
                  name  : 'Rokiya',
                  class : 15,
                  age   : 22, 
                  gen   : 'female',
                  loc   :  'Dhaka',
                  fees  : 1500
               },

               {
                  name  : 'Asraful',
                  class : 15 ,
                  age   : 28 ,
                  gen   : 'male',
                  loc   : 'Chittagong',
                  fees  : 10000
               },
               {
                  name  : 'Roksana',
                  class : 10,
                  age   : 18, 
                  gen   : 'female',
                  loc   :  'Dhaka',
                  fees  :  1000
               },
               {
                  name  : 'ovi AR',
                  class : 15,
                  age   : 30,
                  gen   :'male',
                  loc   :'Chittagong',
                  fees  : 1500
               }


]
// - Total Admnission fees

  console.log(' Total Addmission Fees  ');


  let total =0;


    all_student.map((a,b)=>{
     
      total+=a.fees;
      console.log(` Name   => ${a.name}    = ${a.fees} Tk`);
     
})
     console.log(` --------------------------------------------
 Total               = ${total}  Tk
     
     `);



// - Find All Female Students

     console.log(`
     
All Female Students`);

     all_student.forEach((a,b)=>{

              if(a.gen==='female'){
                 console.log(`Name   => ${a.name}`);
              }


     })
     
// - Find class wise student result


     console.log(`

     
Find class wise student result`);


     all_student.map((a,b)=>{
        if(a.class==10){
        console.log(`Student of class Ten => Name  : ${a.name} 
                        Class : ${a.class}`);}
        else if(a.class==15){
        console.log(`Student of class Fiften => Name  : ${a.name}
                           Class :  ${a.class}`);}
     })
     
     
// - Location wise student result


     console.log(`

     
Find Location wise student result`);


     all_student.map((a,b)=>{
        if(a.loc==='Dhaka'){
        console.log(`Student of Dhaka => Name : ${a.name} Location : ${a.loc}`);}
        else if(a.loc=='Chittagong'){
        console.log(`Student of Chittagong => Name : ${a.name} Location : ${a.loc}`);}
     })


// - find student between 10 - 25 age

     console.log(`
     
     find student between 10 - 25 age`);


     all_student.map((a,b)=>{
        if(a.age>9 && a.age<26){

             console.log(`
             Name      : ${a.name}
             location  : ${a.loc}
             Age       : ${a.age}
             Class     : ${a.class}
    `);
        }
     })



