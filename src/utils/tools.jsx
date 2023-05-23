class Tools {
    addCommaInNumbers(number = 0) {
        if (typeof number === 'string') {
            number = parseFloat(number);
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

export default new Tools();
