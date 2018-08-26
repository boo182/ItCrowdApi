const objectUpdater = (object, newProperties) => {
    let newObject = object;
    newProperties.forEach(item => {
        newObject = {
            ...newObject,
            ...item,
        };
    });
    return newObject;
}

const obj = {
    lulu: 'stringks',
    kiki: 8,
};

console.log(objectUpdater(obj, [{toto: 5}, {lulu: 'joez'}]));