/**
 * Like PHP's {@link https://www.php.net/manual/en/function.empty.php `empty`} function in vanilla JavaScript.
 *
 * @author Davey Jacobson <daveyjake21 [at] geemail [dot] com>
 * @since 1.0.0
 * @since 1.0.1 Gist made public.
 *
 * @param {array|bool|number|object|string} value          The value to check.
 * @param {boolean}                        [strict=false] Enable strict checking. Accepts true, false.
 *
 * @return {boolean} False if `value` contains anything. True if not. Default false.
 */
export default function( value, strict= false ) {
    /**
     * Values and items that are inherently empty.
     *
     * @since 1.0.0
     * @since 1.0.1 Added 'null' and 'undefined'.
     * @since 1.0.2 Added `NaN` and 'NaN'.
     *
     * @type array
     */
    let emptyValues = [ 0, '0', false, 'false', '', [], {}, NaN, 'NaN', null, 'null', undefined, 'undefined' ];

    // Result of testing `value`.
    let result;

    // Checking the `value`.
    if ( !strict ) {
        // Check if `value` is found inside the `emptyValues` array.
        result = emptyValues.indexOf( value );

        // If the `result` is greater than -1, `value` is one of the `emptyValues` elements.
        return result > -1;
    }

    /**
     * Strictly check the value to confirm it's not inherently empty.
     *
     * @since 1.0.0
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     */
    result = emptyValues.reduce( function( sum, current ) {
        // Check if `current` explicitly matches the `value`.
        let i = ( current === value ? 1 : 0 );

        return sum + i;
    });

    // If `result` is greater than 0, we know it's inherently empty.
    return result > 0;
}
