const findTheOldest = function(arrPeople) {
  const currentYear = new Date().getFullYear();
    const oldest = arrPeople.sort((a,b) => {
        const lastPerson = (!a.yearOfDeath ? currentYear : a.yearOfDeath) - a.yearOfBirth
        const nextPerson = (!b.yearOfDeath ? currentYear : b.yearOfDeath) - b.yearOfBirth

        return lastPerson > nextPerson ? -1 : 1
    })

    return oldest[0]
    
};

// Do not edit below this line
module.exports = findTheOldest;
