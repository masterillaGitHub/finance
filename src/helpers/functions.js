export function deepCopy(object) {
    return JSON.parse(JSON.stringify(object))
}

export function uniqId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function randomFloat(min, max, desimals = 2) {
    return (Math.random() * (max - min) + min).toFixed(desimals)
}

export function classToObject(theClass) {
    const originalClass = theClass || {}

    const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(originalClass))

    return keys.reduce((classAsObj, key) => {
        classAsObj[key] = originalClass[key]
        return classAsObj
    }, {})
}

export function createCopyWithoutProperty(object, removeProperty) {
    const { [removeProperty]: removed, ...rest } = object

    return rest;
}

export function replaceInArray(arr, find, replace) {
    return arr.map(item => item === find ? replace : item)
}

export function numberOfText(number, suffix) {
    const keys = [2, 0, 1, 1, 1, 2]
    const mod = number % 100

    const suffixKey = (mod > 7 && mod < 20)
        ? 2
        : keys[Math.min(mod % 10, 5)]

    return suffix[suffixKey]
}

/**
 * https://stackoverflow.com/a/4760279
 *
 * @param property
 * @returns {function(*, *): *}
 */
export function dynamicSort(property) {
    let sortOrder = 1

    if (property[0] === "-") {
        sortOrder = -1
        property = property.slice(1)
    }

    return (a,b) => {
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0

        return result * sortOrder
    }
}

/**
 * https://stackoverflow.com/a/4760279
 * @returns {function(*, *): number}
 */
export function dynamicSortMultiple() {
    let props = arguments

    return (obj1, obj2) => {
        let i = 0, result = 0, numberOfProperties = props.length;
        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

export function mapObject(obj, callback) {
    const result = {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = callback(obj[key], key)
        }
    }

    return result
}

export function objectFirstField(obj) {
    const keys = Object.keys(obj);
    const firstKey = keys[0];
    return obj[firstKey];
}

export function numberFormat(value) {
    if (!Number.isInteger(value)) {
        return value
    }

    return new Intl.NumberFormat().format(value)
}

export function toCurrencyUAH(value, options = {}) {
    return toCurrency(value, 'UAH', options)
}

export function toCurrencyUSD(value, options = {}) {
    return toCurrency(value, 'USD', options)
}

export function toCurrencyEUR(value, options = {}) {
    return toCurrency(value, 'EUR', options)
}

export function toCurrency (value, currency = 'UAH', options = {}, locales = 'uk-UA') {
    if (typeof value !== 'number') {
        return value;
    }

    const defaultOptions = {
        style: 'currency',
        currency,
        currencyDisplay: 'narrowSymbol',
    }

    const formatter = new Intl.NumberFormat(locales, {
        ...defaultOptions,
        ...options
    })

    return formatter.format(value);
}

export function convertCommaToSpace (value) {
    return value.replace(',', ' ');
}

export function convertMinusToPlus(val) {
    return Math.abs(val)
}

/**
 * Update or add some fields into base object
 * @param {Object} obj
 * @param {Object} fields
 * @returns {{}}
 */
export function updateObject(obj, fields) {
    return Object.assign(obj, fields)
}

/**
 *
 * @param {Array} array
 * @param {Object} obj
 */
export function removeElementByObject(array, obj) {
    array.splice(array.indexOf(obj), 1)
}

export function appendSymbol(value, arg) {
    if (!value || !arg) {
        return value
    }

    return value + arg
}

export function prependSymbol(value, arg) {
    if (!value || !arg) {
        return value
    }

    return arg + value
}

export function toLocaleDateString(date) {
    return date ? new Date(date).toLocaleDateString() : date
}

export function isEmpty(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0
    }

    return Object.keys(obj).length === 0
}

export function removeEmpty(obj) {
    if (Array.isArray(obj)) {
        return obj.filter(i => i)
    }

    return Object.fromEntries(
        Object.entries(obj).filter(([_, v]) => v != null)
    )
}

export function removeItem(arr, value) {
    const index = arr.indexOf(value);

    if (index > -1) {
        arr.splice(index, 1);
    }

    return arr;
}

export function removeItemAll(arr, value) {
    let i = 0;

    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }

    return arr;
}

export function removeNullableProperties (obj) {
    Object.keys(obj).forEach(key => {
        if (!obj[key]) {
            delete obj[key]
        }
    })

    return obj
}

export function getImageUrl(name) {
    return new URL(`./dir/${name}.png`, import.meta.url).href
}

export function arrayObjectsSum(array, field) {
    return array.reduce((a, b) => {
        return parseInt(a,10) + parseInt(b[field], 10)
    }, 0)
}

export function groupBy(xs, key) {
    return xs.reduce(function(acc, item) {
        (acc[item[key]] = acc[item[key]] || []).push(item)

        return acc
    }, {})
}


/**
 * Клас для додаткових функцій
 */
class Functions
{
    /**
     * Метод для формирования поиска в объекте по строке.
     * Пример obj['value[0].item.val']
     *
     * @param {object} obj
     * @return {{}}
     */
    static objectSearchByString(obj){
        let root = {};

        (function tree(obj, index){

            let suffix = toString.call(obj) === "[object Array]" ? "]" : "";

            for (let key in obj) {
                if(!obj.hasOwnProperty(key)) {
                    continue;
                }

                root[index + key + suffix] = obj[key];

                if( toString.call(obj[key]) === "[object Array]" ) {
                    tree(obj[key],index + key + suffix + "[");
                }

                if( toString.call(obj[key]) === "[object Object]" ) {
                    tree(obj[key],index + key + suffix + ".");
                }
            }

        })(obj,"");

        return root;
    }

    /**
     * Метод создает из объекта строку с параметрами для url GET запроса
     *
     * @param {object} data
     * @return {string}
     */
    static encodeQueryData(data) {
        const ret = []

        for (let d in data) {
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]))
        }

        return ret.join('&')
    }
}

export default Functions;

