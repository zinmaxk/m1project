const request = require('request');

const connUri = process.env.MONGO_LOCAL_CONN_URL;
const apiUrl = process.env.API_URL;

module.exports = {
    getAllSchedule: (req, res) => {
        let status = 200;
        request.get(apiUrl + 'schedule', {

        }, (error, apiRes, body) => {
            if (error) {
                console.error(error)
                return
            }
            if (status == apiRes.statusCode) {

            } else {

            }
            // Anh gia sua rang BE tra ve ket qua nhu sau
            var scheduleList = [];
            var sample = {
                time: "12:00 - 15:00",
                thumbnail: "/images/speakers/speaker1.jpg",
                title: "My title ",
                location: "Bean",
                brief: "How you transform your business as technology, consumer, habits industry dynamics change? Find out from those leading the charge. How you transform "
            }
            for (let index = 0; index < 10; index++) {
                scheduleList.push(Object.assign({}, sample, {
                    "title": sample.title + index
                }));
            }

            const page = {
                pageTitle: "Schedule list",
                breadCrumbTitle: "Schedule list"
            }
            res.render('schedule-list', { "page": page, "scheduleList": scheduleList });
        })
    }
}