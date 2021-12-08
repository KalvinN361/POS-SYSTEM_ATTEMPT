const { Schema, model } = require('mongoose');

const itemSchema = new Schema ({
    name: {
        type: String, 
        required: true, 
    },
    itemId: {
        type: String, 
        required: true, 
    },
    category: {
        type: String, 
        required: true, 
    },
    price: {
        type: Number, 
        required: true, 
    },
    description: {
        type: String, 
        required: true, 
    },
    image: {
        type: String, 
    }
})
const item = model('Item', itemSchema);
module.exports = item; 

 