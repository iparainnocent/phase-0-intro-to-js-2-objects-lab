let employee = {

    name: "Doreen",
    work: "Secretary",
    age: "30"
    
};

function updateEmployeeWithKeyAndValue(employee, key, value){

    return {
        ...employee, [key]:value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key] = value;
    return employee;

}

function deleteFromEmployeeByKey(employee,key){

    let clonedEmployee = {...employee};
    delete clonedEmployee[key]
    return clonedEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){

    delete employee[key];
    return employee;
    
}