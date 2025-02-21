const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 }
];

function calculateSalaryWithForEach(employees) {
    let totalSalary = 0;
    employees.forEach(emp => {
        const salary = emp.starting + (emp.increment * emp.experience);
        totalSalary += salary;
    });
    return totalSalary;
}
console.log("Total salary (class):", new SalaryCalculator(employees).calculateTotalSalary());
