const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user_first_name: {
        type: String,
        required: true
    },
    user_last_name: {
        type: String,
        required: true
    },
    user_city: {
        type: String,
        required: true
    },
    user_cisiyet: {
        type: String,
        required: true
    },
    user_blood_type: {
        type: String,
        required: true
    },
    user_fotoURL: {
        type: String,
        //required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
}, { timestamps: true });


UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.createdAt;
    delete user.updatedAt;
    delete user.__v;
    delete user.user_password;

    return user;
}


module.exports = mongoose.model('User', UserSchema);