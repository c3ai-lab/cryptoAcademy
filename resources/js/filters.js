import Vue from 'vue';

function getFractionDigits(value) {
    if (value < 0.0001) return 8

    if (value < 0.001) return 7

    if (value < 0.01) return 6

    if (value < 0.1) return 5

    if (value < 1) return 4

    return 2
}

Vue.filter('usd', function (value) {
    if (typeof value !== "number") {
        return value;
    }

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: getFractionDigits(value),
    });
    return formatter.format(value);
});

Vue.filter('eur', function (value) {
    if (typeof value !== "number") {
        return value;
    }

    var formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: getFractionDigits(value)
    });
    return formatter.format(value);
});
