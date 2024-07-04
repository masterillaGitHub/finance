/*
 * for examples
export function isPageValid(page) {
    return NAV_ITEMS.some((navItem) => navItem.page === page)
}

export function isIconValid(icon) {
    return Object.keys(ICONS).includes(icon)
}

export function isNavItemValid(navItem) {
    return NAV_ITEMS.includes(navItem)
}

export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
    return isHourValid(hour)
}

export function isActivityValid({ id, name, secondsToComplete }) {
    if (isNull(id)) {
        return true
    }

    return [isNotEmptyString(id), isNotEmptyString(name), isNumber(secondsToComplete)].every(Boolean)
}

export function isHourValid(hour) {
    return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isSelectValueValid(value) {
    return isNotEmptyString(value) || isNumberOrNull(value)
}

function isSelectOptionValid({ value, label }) {
    return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}

* */


/* global validators */
export function isObject(value) {
    return typeof value === 'object' && !Array.isArray(value) && value !== null
}

export function isEmptyObject (value) {
    return isObject(value) && Object.keys(value).length === 0 && value.constructor === Object
}

export function isArray(value) {
    return Array.isArray(value)
}

export function isNotArray(value) {
    return !isArray(value)
}

export function isUndefinedOrNull(value) {
    return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
    return isNumber(value) || isNull(value)
}

export function isUndefined(value) {
    return value === undefined
}

export function isNotNull(value) {
    return !isNull(value)
}

export function isNull(value) {
    return value === null
}

export function isNumberInString(value) {
    return isNumber(parseInt(value)) || isNumber(parseFloat(value))
}

export function isNumber(value) {
    return !isNaN(Number(value))
}

export function isInteger(value) {
    return typeof value === 'number'
}

export function isBetween(value, start, end) {
    return value >= start && value <= end
}

export function isEmpty(value) {
    let emptyValues = [ 0, '0', false, 'false', '', 'NaN', null, 'null', undefined, 'undefined' ];

    if (isEmptyArray(value)) {
        return true;
    }

    if (isEmptyObject(value)) {
        return true
    }

    if (Number.isNaN(value)) {
        return true
    }

    return emptyValues.indexOf(value) > -1;
}

export function isNotEmpty(value) {
    return !isEmpty(value)
}

export function isNotEmptyArray(value) {
    return !isEmptyArray(value)
}

export function isEmptyArray(value) {
    return isArray(value) && value.length === 0
}

export function isNotEmptyString(value) {
    return !isEmptyString(value)
}

export function isEmptyString(value) {
    return isString(value) && value.length === 0
}

export function isString(value) {
    return typeof value === 'string'
}
