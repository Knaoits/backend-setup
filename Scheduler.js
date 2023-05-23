const Seller = require("./Models/Seller");
const moment = require('moment');

const performDailyTask = async () => {
    let data = await Seller.find()
    let days = 0
    let list = []
    data?.map((ele) => {
        const diffInDays = moment(ele?.endDate).diff(moment(new Date()), 'days');
        days = diffInDays
        if(days === 0){
            list.push(ele?._id)
        }
    })
    await Seller.updateMany({ _id: { $in: list } },{ $set: { status: 'blocked' } });
};

module.exports = {
    performDailyTask
  };