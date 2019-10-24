
class Database {

    constructor(time = 3600000) {
        this.initialize(time)
        this.metricTable = [];
    };

    initialize(time) {
        setInterval(() =>
            this.metricTable = this.metricTable.filter((metric) =>
                (Date.now() - metric.timestamp) < time), 1000);
    };

    sumOf(key) {
        let value = 0;

        for (let eachMetric = 0; eachMetric <= this.metricTable.length - 1; eachMetric++) {
            value += this.metricTable[eachMetric][key];
        };

        return value || 0;
    };

    push(key, value) {
        if (!key || !value) {
            return false;
        };

        return this.metricTable.push({ [key]: value, timestamp: Date.now() });
    };
};

module.exports = Database;