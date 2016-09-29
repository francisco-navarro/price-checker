var cron = require('node-cron');
var prices = require('./prices');

cron.schedule('* */2 * * * *', prices.watch);
