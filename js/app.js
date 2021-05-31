'use strict'

var workHours=[6,7,8,9,10,11,12,1,2,3,4,5,6,7]
// this is from w3schooles
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Seattle
let seattle={ 
     name:'Seattle',
     NumCust:0,
     minCust: 23,
     maxCust: 65,
     avgCookies: 6.3,
     getNumCust: function() { 
         this.NumCust=randomNumber(this.minCust,this.maxCust)
        
        }
    
    } 
    
    let parent= document.getElementById('sales');// just once 

  
     let h1Element1=document.createElement('h1')
     parent.appendChild(h1Element1);
     h1Element1.textContent=`Seattle`

   
    let avgCookieHour=[];
    for (let i=0; i< workHours.length-1; i++ )
       {  
        seattle.getNumCust() 
        avgCookieHour.push(Math.floor(seattle.NumCust*seattle.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.
        let child=document.createElement('li');
        parent.appendChild(child)
        
       
        if (i>5) { 
            child.textContent=` ${workHours[i]} pm : ${avgCookieHour[i]} cookies`
            
        } else {child.textContent=` ${workHours[i]} am : ${avgCookieHour[i]} cookies`
            
        }

        
       }
         let t1=0;   //Totall
        for (let i=0; i<  avgCookieHour.length-1; i++){
         t1=t1+ avgCookieHour[i];
        }

        let total1=document.createElement('h1')
        parent.appendChild(total1);
        total1.textContent=`Total : ${t1} cookies`
    
// Tokyo
let tokyo={ 
    name:'Tokyo',
    NumCust:0,
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    getNumCust: function() { 
        this.NumCust=randomNumber(this.minCust,this.maxCust)
      
       }
   
   } 
   
   let h1Element2=document.createElement('h1')
   parent.appendChild(h1Element2);
   h1Element2.textContent=`Tokyo`

  
   let avgCookieHour1=[];
   for (let i=0; i< workHours.length-1; i++ )
      {  
       tokyo.getNumCust() 
       avgCookieHour1.push(Math.floor(tokyo.NumCust*tokyo.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.
       let child1=document.createElement('li');
       parent.appendChild(child1)
       
       if (i>5) { 
           child1.textContent=` ${workHours[i]} pm : ${avgCookieHour1[i]} cookies`
           
       } else {child1.textContent=` ${workHours[i]} am : ${avgCookieHour1[i]} cookies`
           
       } 

       
      }

      let t2=0;   //Totall
      for (let i=0; i< avgCookieHour1.length-1; i++){
       t2=t2+ avgCookieHour1[i];
      }

      let total2=document.createElement('h1')
      parent.appendChild(total2);
      total2.textContent=`Total : ${t2} cookies`
      
      // Dubai
let Dubai={ 
    name:'Dubai',
    NumCust:0,
    minCust: 11,
    maxCust: 	38,
    avgCookies: 3.7,
    getNumCust: function() { 
        this.NumCust=randomNumber(this.minCust,this.maxCust)
       }
   
   } 
   
   let h1Element3=document.createElement('h1')
   parent.appendChild(h1Element3);
   h1Element3.textContent=`Dubai`

  
  let avgCookieHour2=[];
   for (let i=0; i< workHours.length-1; i++ )
      {  
        Dubai.getNumCust() 
       avgCookieHour2.push(Math.floor(Dubai.NumCust*Dubai.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.
       let child3=document.createElement('li');
       parent.appendChild(child3)
       
       if (i>5) { 
           child3.textContent=` ${workHours[i]} pm : ${avgCookieHour2[i]} cookies`
           
       } else {child3.textContent=` ${workHours[i]} am : ${avgCookieHour2[i]} cookies`
           
       }

       
      }
      let t3=0;   //Totall
      for (let i=0; i<  avgCookieHour2.length-1; i++){
       t3=t3+ avgCookieHour2[i];
      }

      let total3=document.createElement('h1')
      parent.appendChild(total3);
      total3.textContent=`Total : ${t3} cookies`
      

      
      // Paris
let Paris={ // Object
    name:'Paris',
    NumCust:0,
    minCust: 20,
    maxCust: 	38,
    avgCookies: 2.3,
    getNumCust: function() { 
        this.NumCust=randomNumber(this.minCust,this.maxCust)
       }
   
   } 
  
   let h1Element4=document.createElement('h1')    // create h1
   parent.appendChild(h1Element4);
   h1Element4.textContent=`Paris`

   let avgCookieHour3=[];
 
   for (let i=0; i< workHours.length-1; i++ )     // create Array for the sales 
      {  
        Paris.getNumCust() 
       avgCookieHour3.push(Math.floor(Paris.NumCust*Paris.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.
       let child4=document.createElement('li');
       parent.appendChild(child4)
       
       if (i>5) { 
           child4.textContent=` ${workHours[i]} pm : ${avgCookieHour3[i]} cookies`     // to specify  am/pm
           
       } else {child4.textContent=` ${workHours[i]} am : ${avgCookieHour3[i]} cookies`
           
       }
      
       
       
      }

      let t4=0;   //Totall
      for (let i=0; i<  avgCookieHour3.length-1; i++){
       t4=t4+ avgCookieHour3[i];
      }

      let total4=document.createElement('h1')
      parent.appendChild(total4);
      total4.textContent=`Total : ${t4} cookies`

     // Lima
let Lima={ 
    name:'Lima',
    NumCust:0,
    minCust: 2,
    maxCust: 	16,
    avgCookies: 4.6,
    getNumCust: function() { 
        this.NumCust=randomNumber(this.minCust,this.maxCust)
       }
   
   } 
   
   let h1Element5=document.createElement('h1')
   parent.appendChild(h1Element5);
   h1Element5.textContent=`Lima`

  
  
   let avgCookieHour4=[];
   for (let i=0; i< workHours.length-1; i++ )
      {  
       Lima.getNumCust() 
       avgCookieHour4.push(Math.floor(Lima.NumCust*Lima.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.
       let child5=document.createElement('li');
       parent.appendChild(child5)
       
       if (i>5) { 
           child5.textContent=` ${workHours[i]} pm : ${avgCookieHour4[i]} cookies`
           
       } else {child5.textContent=` ${workHours[i]} am : ${avgCookieHour4[i]} cookies`
           
       }

       
      }

      let t5=0;   //Totall
      for (let i=0; i<  avgCookieHour4.length-1; i++){
       t5=t5+ avgCookieHour4[i];
      }

      let total5=document.createElement('h1')
      parent.appendChild(total5);
      total5.textContent=`Total : ${t5} cookies`
      