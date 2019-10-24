
function sumMetrics(req, res, db) {

    const { key } = req.params;

    if (key) {
        res.json({ value: Math.round(db.sumOf(key)) });
    } else {
        res.status(400).json({});
    };

};



module.exports = sumMetrics;