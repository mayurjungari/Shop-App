const path = require('path');

exports.sucessController = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'Views', 'success.html'));
};
