// funcția increaseSalary care primește ca parametrii un array de salarii și un număr reprezentând procentul cu care se vor mări (ex 10). Funcția aruncă excepții dacă primul parametru nu este un array sau al doilea parametru nu este un număr.
function increaseSalary(salaries, percent) {
    if (!Array.isArray(salaries)) {
        throw new TypeError("First parameter must be an array");
    }
    if (typeof percent !== 'number' || isNaN(percent)) {
        throw new TypeError("Second parameter must be a number");
    }

    return salaries.map(salary => {
        if (typeof salary !== 'number' || isNaN(salary)) {
            throw new TypeError("All elements in the salaries array must be numbers");
        }
        return salary + (salary * percent / 100);
    });
}

// Exemplu de utilizare:
try {
    const updatedSalaries = increaseSalary([1000, 2000, 3000], 10);
    console.log(updatedSalaries); // [1100, 2200, 3300]
} catch (error) {
    console.error(error.message);
}