const company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});

company.name = 'The Gym';
console.log(company);
company.address.state = 'LA';
console.log(company); // the freezing freezes properties  of the object only not the the properties referenced by object properties
