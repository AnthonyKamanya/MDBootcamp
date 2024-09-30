console.log("Good morning!")

//Function 1: 
const taxYearEnded = true;
let baseSalary = 20000;
let numberOfSales = 1000;
const bonus = 1000;
let commissionRate = 3.0;

if (taxYearEnded) {
   let totalSalary = baseSalary + (numberOfSales * commissionRate);

   if (numberOfSales > 500) {
       // only give bonus when sales exceed 500:
       totalSalary += bonus;

       console.log(`Total salary after bonus: ${totalSalary}`);
   }
}

// sales person 2:
numberOfSales = 300;
baseSalary = 25000;
commissionRate = 2.0;

if (taxYearEnded) {
   let totalSalary = baseSalary + (numberOfSales * commissionRate);
   console.log(`Total salary: ${totalSalary}`);
}



function retrieveCurrentBalance(customerNo) {

    return 1000; // dummy value​
 
 }
 
 const customerNo = '1234567';
 // call function and retrieve value:​
 const currentBalance = retrieveCurrentBalance(customerNo);
 if (currentBalance > 0) {
 
    console.log(`Customer ${customerNo} is in CREDIT`);
 
 } else {
 
    console.log(`Customer ${customerNo} is in DEBIT`);
 
 }