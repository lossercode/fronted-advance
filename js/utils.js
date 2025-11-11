/**
 * 工具函数库
 */

/**
 * 防抖函数
 * @param {Function} func - 要执行的函数
 * @param {Number} delay - 延迟时间(毫秒)
 * @returns {Function} - 防抖后的函数
 */
function debounce(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * 节流函数
 * @param {Function} func - 要执行的函数
 * @param {Number} limit - 限制时间(毫秒)
 * @returns {Function} - 节流后的函数
 */
function throttle(func, limit = 300) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 检查元素是否在视口内
 * @param {Element} element - 要检查的元素
 * @returns {Boolean} - 是否在视口内
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * 平滑滚动到指定元素
 * @param {Element} element - 目标元素
 * @param {Number} offset - 偏移量(像素)
 */
function smoothScrollTo(element, offset = 0) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: top,
        behavior: 'smooth'
    });
}

/**
 * 获取URL参数
 * @param {String} param - 参数名
 * @returns {String|null} - 参数值
 */
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * 设置URL参数
 * @param {String} param - 参数名
 * @param {String} value - 参数值
 */
function setUrlParam(param, value) {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set(param, value);
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
}

/**
 * 复制文本到剪贴板
 * @param {String} text - 要复制的文本
 * @returns {Promise<void>}
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('文本已复制到剪贴板');
    } catch (err) {
        console.error('复制失败:', err);
    }
}

/**
 * 格式化日期
 * @param {Date} date - 日期对象
 * @param {String} format - 格式字符串 (如: 'YYYY-MM-DD HH:mm:ss')
 * @returns {String} - 格式化后的日期字符串
 */
function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

/**
 * 检查是否为移动设备
 * @returns {Boolean}
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * 获取设备类型
 * @returns {String} - 'mobile' | 'tablet' | 'desktop'
 */
function getDeviceType() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
}

/**
 * 延迟执行
 * @param {Number} ms - 延迟时间(毫秒)
 * @returns {Promise<void>}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 深度克隆对象
 * @param {Object} obj - 要克隆的对象
 * @returns {Object} - 克隆后的对象
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => deepClone(item));
    if (obj instanceof Object) {
        const cloned = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
}

/**
 * 本地存储管理
 */
const Storage = {
    /**
     * 设置本地存储
     */
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('存储失败:', e);
        }
    },

    /**
     * 获取本地存储
     */
    get(key) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('读取失败:', e);
            return null;
        }
    },

    /**
     * 删除本地存储
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.error('删除失败:', e);
        }
    },

    /**
     * 清空本地存储
     */
    clear() {
        try {
            localStorage.clear();
        } catch (e) {
            console.error('清空失败:', e);
        }
    }
};

/**
 * 导出所有工具函数
 */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        debounce,
        throttle,
        isElementInViewport,
        smoothScrollTo,
        getUrlParam,
        setUrlParam,
        copyToClipboard,
        formatDate,
        isMobileDevice,
        getDeviceType,
        delay,
        deepClone,
        Storage
    };
}
