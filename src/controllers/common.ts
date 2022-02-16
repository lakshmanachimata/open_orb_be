module.exports = function (app) {
    app.route('/hnoapi/healthcheck')
        .get(async (req, res) => {
            return res.json({status: 200, message: "OK", env: process.env.NODE_ENV});
        })
}