const { Schema } = require('mongoose');

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

module.export = itemSchema; 