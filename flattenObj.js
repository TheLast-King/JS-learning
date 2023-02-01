//flatten a javascript obj
const ob = {
    first_name: "Mehul",
    last_name: "Rawal",
    email: "rawal.mehul.sro@gmail.com",
    phone: {
        Mobile_Number: 12345234556,
        Landline_Number: 134 - 2345 - 21,
    },
    Address: {
        primary: {
            State: "Bangalore",
            Area: "Koramangala",
            house: "100",
            street: {
                main: "15",
                cross: "2",

            }
        }
    }
};


const flattenObj = (ob) => {
    let res = {}


    for (const i in ob) {
        if (typeof (ob[i]) === 'object' && !Array.isArray(ob[i])) {
            const temp = flattenObj(ob[i]);
            for (const j in temp) {
                res[i + "." + j] = temp[j];
            }
        }
        else {
            res[i] = ob[i];
        }
    }
    return res;
}

console.log(flattenObj(ob));