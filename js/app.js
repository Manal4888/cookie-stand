'use strict'

var workHours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm '];
// this is from w3schooles
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}






let shops = [];
function Shop(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.avgCookieHour = [];
  shops.push(this);  /// all object in string

}

let parent = document.getElementById('parent');
let table = document.createElement('table');

parent.appendChild(table);



Shop.prototype.getNumCust = function () {
  for (let i = 0; i < workHours.length; i++) {
    this.avgCookieHour.push(Math.floor((randomNumber(this.minCust, this.maxCust) * this.avgCookies)));
  }

}

Shop.prototype.render = function ()  // render
{

  let headingRow = document.createElement('tr');
  table.appendChild(headingRow);
  let thElement = document.createElement('th');
  headingRow.appendChild(thElement);
  thElement.textContent = `${this.name}`;

  for (let i = 0; i < workHours.length; i++) {

    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = `${this.avgCookieHour[i]} `
  }
  let totalCookies = 0;//// the total for each row
  for (let i = 0; i < workHours.length; i++) {

    totalCookies = totalCookies + this.avgCookieHour[i]
  }
  let thElement1 = document.createElement('th');
  headingRow.appendChild(thElement1);
  thElement1.textContent = totalCookies;


}





function tabHeader()// header function
{

  let headingRow = document.createElement('tr');
  table.appendChild(headingRow);

  let thElement = document.createElement('th');
  headingRow.appendChild(thElement);
  thElement.textContent = 'City/hours';
  for (let i = 0; i < workHours.length; i++) {


    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = workHours[i];
  }

  let thElement1 = document.createElement('th');
  headingRow.appendChild(thElement1);
  thElement1.textContent = 'Daily Location Total';
}



//Totals
function tabfooter()// footer function

{
  let headingRow = document.createElement('tr');
  table.appendChild(headingRow);
  let thElement = document.createElement('th');
  headingRow.appendChild(thElement);
  thElement.textContent = 'Total';

  for (let i = 0; i < workHours.length; i++) {
    let totalHours = 0;
    for (let j = 0; j < shops.length; j++) {
      totalHours += shops[j].avgCookieHour[i];
    }

    let thElement = document.createElement('th');
    headingRow.appendChild(thElement);
    thElement.textContent = totalHours;

  }
  let totalOfTotal = 0;
  for (let i = 0; i < workHours.length; i++) {
    for (let j = 0; j < shops.length; j++) {
      totalOfTotal += shops[j].avgCookieHour[i];
    }


  }

  let thElement1 = document.createElement('th');
  headingRow.appendChild(thElement1);
  thElement1.textContent = totalOfTotal;



}





tabHeader();

let seattle = new Shop('Seattle', 23, 65, 6.3);

// seattle.getNumCust();
// seattle.render();


let tokyo = new Shop('Tokyo', 3, 24, 1.2);
// tokyo.getNumCust();
// tokyo.render();


let dubai = new Shop('Dubai', 11, 38, 3.7);
// dubai.getNumCust();
// dubai.render();


let paris = new Shop('Paris', 20, 38, 2.3);
// paris.getNumCust();
// paris.render();



let lima = new Shop('Lima', 2, 16, 4.6);
// lima.getNumCust();
// lima.render();


for (let i = 0; i < shops.length; i++) {
       shops[i].getNumCust()

       shops[i].render()

}



let form = document.getElementById('form');
form.addEventListener("submit", submitter);

function submitter(event) {
  event.preventDefault();





  let name = event.target.name.value;
  console.log(name);
  let minCust = parseInt(event.target.minCust.value);
  console.log(minCust);
  let maxCust = parseInt(event.target.maxCust.value);
  console.log(maxCust);
  let avgCookies = parseFloat(event.target.avgCookies.value);
  console.log(avgCookies);


  if (minCust < maxCust) {
    let addedshop = new Shop(name, minCust, maxCust, avgCookies);

    table.textContent = '';     //to reset the contents of the table 

    tabHeader();

    for (let i = 0; i < shops.length; i++) {     // to call sll the shopa again
      shops[i].getNumCust();

      shops[i].render();

    }
    tabfooter();

  } else {
    // alert('please enter a min higher than the max')
    // maxCust=minCust;
    let tempMin = minCust;
    minCust = maxCust;
    maxCust = tempMin;

  
    let addedshop = new Shop(name, minCust, maxCust, avgCookies);

    table.textContent = '';

    tabHeader();

    for (let i = 0; i < shops.length; i++) {
      shops[i].getNumCust();

      shops[i].render();

    }
    tabfooter();


  }
}

tabfooter();
      



// // Seattle
// let seattle={ 
//      name:'Seattle',

//      minCust: 23,
//      maxCust: 65,
//      avgCookies: 6.3,

//     avgCookieHour:[], // to embedd the function
//     getNumCust: function()  
//     {
//         for (let i=0; i< workHours.length-1; i++ )
//         {  
//          this.avgCookieHour.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.

//         }


//         } ,
//     render: function()
//     {     
//     let parent= document.getElementById('sales');// just once 
//     let h1Element=document.createElement('h1');
//     parent.appendChild(h1Element);
//     h1Element.textContent=this.name;


//     for(let i=0; i< workHours.length-1; i++ )
//     {   let child=document.createElement('li');
//           h1Element.appendChild(child)

//     if (i>5) { 
//         child.textContent=` ${workHours[i]} pm : ${this.avgCookieHour[i]} cookies`

//     } else {child.textContent=` ${workHours[i]} am : ${this.avgCookieHour[i]} cookies`

//     }

//        }
//     },
//         totalCookies:0,//Total
//         total:function()
//         {
//         let parent= document.getElementById('sales');// just once in any function 
//        ;
//         for (let i=0; i<this.avgCookieHour.length-1; i++){
//             this.totalCookies=this.totalCookies+ this.avgCookieHour[i];
//            }

//            let total=document.createElement('h1')
//            parent.appendChild(total);
//            total.textContent=`Total : ${this.totalCookies} cookies`
//        }


// }

//   // Tokyo
//     let tokyo={ 
//     name:'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookies: 1.2,

//    avgCookieHour:[], // to embedd the function
//    getNumCust: function()  
//    {
//        for (let i=0; i< workHours.length-1; i++ )
//        {  
//         this.avgCookieHour.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.

//        }


//        } ,
//    render: function()
//    {     
//    let parent= document.getElementById('sales');// just once 
//    let h1Element=document.createElement('h1');
//    parent.appendChild(h1Element);
//    h1Element.textContent=this.name;


//    for(let i=0; i< workHours.length-1; i++ )
//    {   let child=document.createElement('li');
//          h1Element.appendChild(child)

//    if (i>5) { 
//        child.textContent=` ${workHours[i]} pm : ${this.avgCookieHour[i]} cookies`

//    } else {child.textContent=` ${workHours[i]} am : ${this.avgCookieHour[i]} cookies`

//    }

//       }
//    },
//        totalCookies:0,//Total
//        total:function()
//        {
//        let parent= document.getElementById('sales');// just once in any function 
//       ;
//        for (let i=0; i<this.avgCookieHour.length-1; i++){
//            this.totalCookies=this.totalCookies+ this.avgCookieHour[i];
//           }

//           let total=document.createElement('h1')
//           parent.appendChild(total);
//           total.textContent=`Total : ${this.totalCookies} cookies`
//       }


// }



//    tokyo.getNumCust();
//    tokyo.render()
//    tokyo.total();    

//    // Dubai
//     let dubai={ 
//     name:'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookies: 4.6,

//    avgCookieHour:[], // to embedd the function
//    getNumCust: function()  
//    {
//        for (let i=0; i< workHours.length-1; i++ )
//        {  
//         this.avgCookieHour.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.

//        }


//        } ,
//    render: function()
//    {     
//    let parent= document.getElementById('sales');// just once 
//    let h1Element=document.createElement('h1');
//    parent.appendChild(h1Element);
//    h1Element.textContent=this.name;


//    for(let i=0; i< workHours.length-1; i++ )
//    {   let child=document.createElement('li');
//          h1Element.appendChild(child)

//    if (i>5) { 
//        child.textContent=` ${workHours[i]} pm : ${this.avgCookieHour[i]} cookies`

//    } else {child.textContent=` ${workHours[i]} am : ${this.avgCookieHour[i]} cookies`

//    }

//       }
//    },
//        totalCookies:0,//Total
//        total:function()
//        {
//        let parent= document.getElementById('sales');// just once in any function 
//       ;
//        for (let i=0; i<this.avgCookieHour.length-1; i++){
//            this.totalCookies=this.totalCookies+ this.avgCookieHour[i];
//           }

//           let total=document.createElement('h1')
//           parent.appendChild(total);
//           total.textContent=`Total : ${this.totalCookies} cookies`
//       }


// }



//    dubai.getNumCust();
//    dubai.render()
//    dubai.total();    


//     // Paris
//     let paris={ 
//         name:'Paris',
//         minCust: 20,
//         maxCust: 38,
//         avgCookies: 2.3,

//        avgCookieHour:[], // to embedd the function
//        getNumCust: function()  
//        {
//            for (let i=0; i< workHours.length-1; i++ )
//            {  
//             this.avgCookieHour.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.

//            }


//            } ,
//        render: function()
//        {     
//        let parent= document.getElementById('sales');// just once 
//        let h1Element=document.createElement('h1');
//        parent.appendChild(h1Element);
//        h1Element.textContent=this.name;


//        for(let i=0; i< workHours.length-1; i++ )
//        {   let child=document.createElement('li');
//              h1Element.appendChild(child)

//        if (i>5) { 
//            child.textContent=` ${workHours[i]} pm : ${this.avgCookieHour[i]} cookies`

//        } else {child.textContent=` ${workHours[i]} am : ${this.avgCookieHour[i]} cookies`

//        }

//           }
//        },
//            totalCookies:0,//Total
//            total:function()
//            {
//            let parent= document.getElementById('sales');// just once in any function 
//           ;
//            for (let i=0; i<this.avgCookieHour.length-1; i++){
//                this.totalCookies=this.totalCookies+ this.avgCookieHour[i];
//               }

//               let total=document.createElement('h1')
//               parent.appendChild(total);
//               total.textContent=`Total : ${this.totalCookies} cookies`
//           }


//     }



//     paris.getNumCust();
//     paris.render()
//     paris.total();   


//     // Lima
//     let lima={ 
//         name:'Lima',
//         minCust: 2,
//         maxCust: 16,
//         avgCookies: 4.6,

//        avgCookieHour:[], // to embedd the function
//        getNumCust: function()  
//        {
//            for (let i=0; i< workHours.length-1; i++ )
//            {  
//             this.avgCookieHour.push(Math.floor(randomNumber(this.minCust,this.maxCust)*this.avgCookies));  //Create an array to contain the whole values of the avg cookies/hour.

//            }


//            } ,
//        render: function()
//        {     
//        let parent= document.getElementById('sales');// just once 
//        let h1Element=document.createElement('h1');
//        parent.appendChild(h1Element);
//        h1Element.textContent=this.name;


//        for(let i=0; i< workHours.length-1; i++ )
//        {   let child=document.createElement('li');
//              h1Element.appendChild(child)

//        if (i>5) { 
//            child.textContent=` ${workHours[i]} pm : ${this.avgCookieHour[i]} cookies`

//        } else {child.textContent=` ${workHours[i]} am : ${this.avgCookieHour[i]} cookies`

//        }

//           }
//        },
//            totalCookies:0,//Total
//            total:function()
//            {
//            let parent= document.getElementById('sales');// just once in any function 
//           ;
//            for (let i=0; i<this.avgCookieHour.length-1; i++){
//                this.totalCookies=this.totalCookies+ this.avgCookieHour[i];
//               }

//               let total=document.createElement('h1')
//               parent.appendChild(total);
//               total.textContent=`Total : ${this.totalCookies} cookies`
//           }


//     }



//     lima.getNumCust();
//     lima.render();
//     lima.total();   