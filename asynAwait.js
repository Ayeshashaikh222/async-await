

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async()=>{
    const PromiseWifeBringingTickets = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolved('ticket');
        }, 3000)
    });

    const getPopcorn = new Promise((resolve, reject)=> resolve(`popCorn`));
    
    const getCandy = new Promise((resolve,reject)=>  resolve(`candy`)); 

    const getColdDrinks = new Promise((resolve, reject)=> resolve(`colddrinks`));

    let ticket
    try {
        ticket = await PromiseWifeBringingTickets;
    }catch(e){
        ticket = 'sad face';
    }
  

 let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getColdDrinks]);
console.log(`${popcorn}, ${candy}, ${coke}`);

   return ticket;

}

preMovie().then((m)=> console.log(`person3: show ${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket');