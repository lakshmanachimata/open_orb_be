const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const isValidObjectId = (id) => {
    if (!id || id == '') {
        return false;
    }
    return ObjectId.isValid(id) ? String(new ObjectId(id) === id) ? true : false : false;
};
module.exports = isValidObjectId;
//# sourceMappingURL=utils.js.map