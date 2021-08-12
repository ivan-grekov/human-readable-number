module.exports = function toReadable (number) {
    const numbersFrom1To20 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
    const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
    if (number < 20) {
        if (number === 0) {
        return 'zero';
    }
    return numbersFrom1To20[number];
    }
    if (number < 100 && number >= 20) {
        k = dozens[Math.floor(number / 10)] + ' ' + numbersFrom1To20[number % 10]
        return k.trim();
    }
    if (number > 99 && number < 120) {
        k = hundreds[Math.floor(number / 100)] + ' ' + numbersFrom1To20[number % 100];
        return k.trim();
    }
    if (number > 119 && number < 1000) {
        if (number % 100 < 20) {
            k = hundreds[Math.floor(number / 100)] + ' ' + numbersFrom1To20[number % 100]
        } else {
            k = hundreds[Math.floor(number / 100)] + ' ' + dozens[Math.floor((number % 100) / 10)] + ' ' + numbersFrom1To20[number % 10];
    }
    return k.trim();
    }

}