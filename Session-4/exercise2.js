//Function 2 (refactored): 
function calculateSalary(taxYearEnded, numberOfSales, baseSalary, commissionRate) {
   if (taxYearEnded) {
       const bonus = 1000;
       let totalSalary = baseSalary + (numberOfSales * commissionRate);

       if (numberOfSales > 500) {
           totalSalary += bonus;

           console.log(`Total salary after bonus: ${totalSalary}`);
       }

       console.log(`Total salary: ${totalSalary}`);
   }
}

const taxYearEnded = true;
let baseSalary = 20000;
let numberOfSales = 1000;
const bonus = 1000;
let commissionRate = 3.0;

// make a call to the function
calculateSalary(taxYearEnded, numberOfSales, baseSalary, commissionRate);

// sales person 2:
numberOfSales = 300;
baseSalary = 25000;
commissionRate = 2.0;

// make a call to the function
calculateSalary(taxYearEnded, numberOfSales, baseSalary, commissionRate);

