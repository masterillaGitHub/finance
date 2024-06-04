export function deepCopy(object) {
    return JSON.parse(JSON.stringify(object))
}

export function uniqId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
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

export function dateNowFormat() {
    return dateFormat(new Date(Date.now()))
}

/**
 * @param {Date} date
 * @returns {string}
 */
export function dateFormat(date) {

    const year = date.toLocaleString('default', { year: 'numeric' })
    const month = date.toLocaleString('default', { month: '2-digit' })
    const day = date.toLocaleString('default', { day: '2-digit' })
    const hour = date.toLocaleString('default', { hour: '2-digit' })
    const minute = date.toLocaleString('default', { minute: '2-digit' })

    return day + '.' + month + '.' + year + ' ' + hour + ':' + minute
}

/**
 * https://stackoverflow.com/a/4760279
 *
 * @param property
 * @returns {function(*, *): *}
 */
export function dynamicSort(property) {
    let sortOrder = 1

    if(property[0] === "-") {
        sortOrder = -1
        property = property.slice(1)
    }

    return function (a,b) {
        /* next line works with strings and numbers,
         * and you may want to customize it to your needs
         */
        let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
        return result * sortOrder
    }
}

/**
 * https://stackoverflow.com/a/4760279
 * @returns {function(*, *): number}
 */
export function dynamicSortMultiple() {
    /*
     * save the arguments object as it will be overwritten
     * note that arguments object is an array-like object
     * consisting of the names of the properties to sort by
     */
    let props = arguments

    return function (obj1, obj2) {
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

export function toCurrencyUAH(value) {
    return toCurrency(value, 'uk-UA', 'UAH')
}

export function toCurrencyUSD(value) {
    return toCurrency(value, 'en-US', 'USD')
}

export function toCurrency (value, locales = 'en-US', currency = 'USD') {
    if (typeof value !== 'number') {
        return value;
    }

    let formatter = new Intl.NumberFormat(locales, {
        style: 'currency',
        currency
    })

    return formatter.format(value);
}

export function convertCommaToSpace (value) {
    return value.replace(',', ' ');
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
        if (!obj[key]) delete obj[key]
    })

    return obj
}

export function getImageUrl(name) {
    return new URL(`./dir/${name}.png`, import.meta.url).href
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

