const employee = {
    name: "Bob",
    streetAdress: "5657 Amesbury",
}
function updateEmployeeWithKeyAndValue(employee, name, Sam) {
    const newEmployee = {...employee }
    newEmployee[name] = Sam;

    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, John) {
     employee[name] = John
    return employee
}

function deleteFromEmployeeByKey(employee) {
    const oldEmployee = {...employee}
    delete oldEmployee.name 
    return oldEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, streetAdress) {
    delete employee[streetAdress]
    return employee
}