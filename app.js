//Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  now create a console data table with
let studentData = [
    ['Jibon', 1, 24, 'MERN Developer', 'Male', 'narayangonj', 600],
    ['Rasel', 2, 22, 'wordpress Developer', 'Male', 'mirpur', 1000],
    ['Sajib', 3, 20, 'Wordpress Developer', 'Male', 'uttra', 1000],
    ['Fatema', 4, 27, 'Shopify Developer', 'Female', 'uttra', 800],
    ['Limon', 5, 26, 'MERN Developer', 'Male', 'mirpur', 600],
    ['purnima', 6, 18, 'wordpress Developer', 'Female', 'narayangonj', 600],
    ['rajib', 7, 25, 'Shopify Developer', 'Male', 'mirpur', 800],
    ['mukta', 8, 15, 'Shopify Developer', 'Female', 'uttra', 600],
    ['noyon', 9, 24, 'MERN Developer', 'Male', 'narayangonj', 600],
    ['sornali', 10, 28, 'Wordpress Developer', 'Female', 'mirpur', 1000],
];

//Total Admnission fees
let admissionFree = 0;
studentData.map((data, i) => {
    admissionFree += data[6];
});

//Find All Female Students
let femaleStudent = '';
studentData.map((data, i) => {
   
    if (data[4] === 'Female') {
        femaleStudent += `${data[0]}, `;
    }
    
});



//Find class wise student result
let mernStudent = '';
studentData.map((data, i) => {

    if (data[3] === 'MERN Developer') {
        mernStudent += `${data[0]}, `;
    }

});

let wordpressStudent    = '';
studentData.map((data, i) => {
   
     if (data[3] === 'Wordpress Developer') {
        wordpressStudent += `${data[0]}, `;
    }
});

let shopifyStudent = '';

studentData.map((data, i) => {

     if (data[3] === 'Shopify Developer') {
        shopifyStudent += `${data[0]}, `;;
    }

});

let classStudent = `
                    MERN        => ${mernStudent}
                    Wordpress   => ${wordpressStudent}
                    shopify     => ${shopifyStudent}
                 `;
 


//Location wise student result

let narayangonjStudent = '';

studentData.map((data, i) => {

    if (data[5] === 'narayangonj') {
        narayangonjStudent += `${data[0]}, `;
    }

});

let mirpurStudent = '';

studentData.map((data, i) => {
   
     if (data[5] === 'mirpur') {
        mirpurStudent += `${data[0]}, `;
    }
});

let uttaraStudent = '';

studentData.map((data, i) => {

     if (data[5] === 'uttra') {
        uttaraStudent += `${data[0]}, `;
    }

});

let locationWise = `
                    Narayangonj         => ${narayangonjStudent}
                    Mirpur              => ${mirpurStudent}
                    uttara              => ${uttaraStudent}
                 `;



//find student between 10 - 25 age

let ageCal = '';

studentData.map((data, i) => {
   
     if (data[2] <= 25) {
        ageCal += `${data[0]} : ${data[2]} age, `;
    }
});

//OUTPUT

console.log(`
Total Admnission fees           = ${admissionFree} BDT
Find All Female Students        = ${femaleStudent}
Find class wise student result  = ${classStudent}
Location wise student result    = ${locationWise}
find student between 10-25 age  = ${ageCal} 
`);

