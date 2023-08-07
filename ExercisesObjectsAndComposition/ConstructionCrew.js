function ConstructionCrew(employee){
    if(employee.dizziness){
        employee.levelOfHydrated+=employee.weight*employee.experience*0.1;
        employee.dizziness = false;
    }
    return employee;
}

console.log(ConstructionCrew({ weight: 95,

    experience: 3,
    
    levelOfHydrated: 0,
    
    dizziness: false }));