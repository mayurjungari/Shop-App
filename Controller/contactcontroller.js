const path = require('path');

exports.contactcontroller = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'Views', 'contact.html'));
};