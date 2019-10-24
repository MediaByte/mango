
class Database {

    constructor(time = 3600000) {
        this.initialize(time)
        this.metricTable = [];
    };

    initialize() {
        setInterval((time) =>
            this.metrics = this.metricTable.filter((metric) =>
                (Date.now() - metric.timestamp) < time), 1000);
    };

    push(key, value) {
        if (!key || !value) {
            return false;
        };

        return this.metricTable.push({ [key]: value, timestamp: Date.now() });
    };
};

module.exports = Database;