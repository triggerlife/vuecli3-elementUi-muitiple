import moment from 'moment'
/**
 * 时间戳转时分秒
 * @param {number} Timestamps 时间戳
 * @returns {string} 23:59(分)
 */
export function timestampTos (Timestamps) {
    return moment(Timestamps * 1000).format('HH:mm')
}
/**
 * 时间戳转时分秒
 * @param {number} Timestamps 时间戳
 * @returns {string} 23:59:59(秒)
 */
export function timestampToms (Timestamps) {
    return moment(Timestamps * 1000).format('HH:mm:ss')
}
/**
 * 时间戳转日期
 * @param Timestamps 时间戳
 * @returns {string} 2018-08-28 (日)
 */
export function timestampToYMD (Timestamps) {
    return moment(Timestamps * 1000).format('YYYY-MM-DD')
}
/**
 * 时间戳转短时间
 * @param Timestamps 时间戳
 * @returns {string} 2018-08-28 23:59(分)
 */
export function timestampToYMDHm (Timestamps) {
    return moment(Timestamps * 1000).format('YYYY-MM-DD HH:mm')
}
/**
 * 时间戳转长时间
 * @param Timestamps 时间戳
 * @returns {string} 2018-08-28 23:59:59(秒)
 */
export function timestampToYMDHms (Timestamps) {
    return moment(Timestamps * 1000).format('YYYY-MM-DD HH:mm:ss')
}
/**
 * 时间转时间戳
 * @param {number} time 时间
 * @returns {string}  1534567891(秒)
 */
export function timeToTimestamp (time) {
    return moment(time, 'YYYY-MM-DD HH:mm:ss').valueOf() / 1000
}