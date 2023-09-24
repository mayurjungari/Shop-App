const path = require('path');

exports.shopcontroller = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'Views', 'shop.html'));
};
