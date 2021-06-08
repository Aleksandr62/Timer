export function loadScript(src, callback) {
    if (Array.isArray(src)) {
        const exclude = [];
        Array.from(document.getElementsByTagName('script')).forEach((el) => {
            exclude.push(el.src.match(/\w+\.js$/)[0]);
        });
        src.forEach((el) => {
            if (exclude.length === 0 || !exclude.some(item => el === item)) loadScript(el, callback);
            exclude.push(el);
        });
    } else {
        return new Promise(function (resolve, reject) {
            let script = document.createElement('script');
            script.src = src;
            script.onload = resolve(callback(script));
            script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
            document.head.append(script);
        });
    };
};
