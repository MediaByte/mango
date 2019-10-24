
function logEvent(req, res, db) {

    const { key } = req.params;
    const { value } = req.body;

    if (!key || !value) {
        return res.status(404).json({});
    };

    if (typeof key === "string" && typeof value === 'number') {
        db.push(key, value);
        res.json({});
    };

};



module.exports = logEvent;