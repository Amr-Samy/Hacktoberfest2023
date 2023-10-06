    //this function gets you how log a post have been added ex( posted 2h ago )
function convertMS(old, now) {
        const ms = parseInt(now) - parseInt(old);
        var d, h, m, s;
        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;

        var pad = function (n) { return n < 10 ? '0' + n : n; };

        var result = d + ' d ' + pad(h) + ' h ' + pad(m) + ' min';
        return result;
    };
