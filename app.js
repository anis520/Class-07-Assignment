

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
   },
   {
      name  : 'AR kabir',
      class : 10,
      age   : 11,
      gen   :'male',
      loc   :'Chittagong',
      fees  : 1000
   },
   {
      name  : 'Adil Hassan',
      class : 15,
      age   : 25,
      gen   :'male',
      loc   :'Dhaka',
      fees  : 500
   },
   {
      name  : 'Adiha',
      class : 10,
      age   : 30,
      gen   :'female',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'Sarmin',
      class : 15,
      age   : 15,
      gen   :'female',
      loc   :'Dhaka',
      fees  : 1500
   },
   {
      name  : 'Adib',
      class : 15,
      age   : 24,
      gen   :'male',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'Somon',
      class : 15,
      age   : 10,
      gen   :'male',
      loc   :'Dhaka',
      fees  : 1500
   },
   {
      name  : 'Radifa',
      class : 15,
      age   : 18,
      gen   :'female',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'Jibon',
      class : 10,
      age   : 30,
      gen   :'male',
      loc   :'Chittagong',
      fees  : 500
   },
   {
      name  : 'kabir',
      class : 15,
      age   : 20,
      gen   :'male',
      loc   :'Dhaka',
      fees  : 1500
   },
   {
      name  : 'Mainol Hasan',
      class : 15,
      age   : 30,
      gen   :'male',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'Raysia',
      class : 10,
      age   : 22,
      gen   :'female',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'Mliha',
      class : 10,
      age   : 27,
      gen   :'female',
      loc   :'Dhaka',
      fees  : 500
   },
   {
      name  : 'kotob',
      class : 10,
      age   : 24,
      gen   :'male',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'Jabol',
      class : 15,
      age   : 17,
      gen   :'male',
      loc   :'Dhaka',
      fees  : 1200
   },
   {
      name  : 'Siba kanom',
      class : 10,
      age   : 14,
      gen   :'female',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'Lal Bahar',
      class : 10,
      age   : 25,
      gen   :'male',
      loc   :'Dhaka',
      fees  : 1500
   },
   {
      name  : 'Abid ',
      class : 15,
      age   : 30,
      gen   :'male',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'shiab',
      class : 15,
      age   : 30,
      gen   :'male',
      loc   :'Dhaka',
      fees  : 500
   },
   {
      name  : 'Adiha jaman',
      class : 15,
      age   : 30,
      gen   :'female',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'Abdulliah',
      class : 15,
      age   : 30,
      gen   :'male',
      loc   :'Chittagong',
      fees  : 500
   },
   {
      name  : 'Ar jibon',
      class : 15,
      age   : 30,
      gen   :'male',
      loc   :'Dhaka',
      fees  : 2000
   },
   {
      name  : 'Tayjol',
      class : 15,
      age   : 30,
      gen   :'male',
      loc   :'Chittagong',
      fees  : 1500
   },
   {
      name  : 'Soriful ',
      class : 10,
      age   : 18,
      gen   :'male',
      loc   :'Chittagong',
      fees  : 2500
   },
   {
      name  : 'Robin',
      class : 15,
      age   : 20,
      gen   :'male',
      loc   :'Dhaka',
      fees  : 800
   },
   {
      name  : 'sajib',
      class : 15,
      age   : 25,
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



