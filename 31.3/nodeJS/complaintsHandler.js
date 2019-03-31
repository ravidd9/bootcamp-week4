const h1 = require('./consts')
const handleComplaints = function (complaint) {
    if (complaint.type == h1.FINANCE) {
        console.log("Money doesn't grow on trees, you know.")
    }
    if (complaint.type == h1.WEATHER) {
        console.log("It is the way of nature. Not much to be done.")
    }
    if (complaint.type == h1.EMOTIONS) {
        console.log("It'll pass, as all things do, with time.")
    }
}
module.exports = handleComplaints