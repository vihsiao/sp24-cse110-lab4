for (const property in statistics) {
    if (property[0] === 'r' || statistics[property] % 2 != 0) {
        console.log(property);
    }
}