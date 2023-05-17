class Tools {
    addCommaInNumbers(number) {
        if (typeof number === 'string') {
            number = parseFloat(number);
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

export default new Tools();
