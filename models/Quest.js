    const mongoose = require('mongoose');

    const questSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        default: 'medium'
    },
    price: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
    }, { timestamps: true });

    module.exports = mongoose.model('Quest', questSchema);
