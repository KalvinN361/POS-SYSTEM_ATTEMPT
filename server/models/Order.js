const { Schema, model } = require('mongoose');

const orderSchema = new Schema ({
    name: {
        type: String,
        required: true, 
    
    description: {
                type: String, 
                required: true, 
    },
    orderId: {
        type: String, 
        required: true, 
    },
    totalPrice: {
        type: Number, 
        required: true, 
        defaule: 0.0,
    },
    isPaid: {
        type: Boolean, 
        required: true, 
        defualt: false
    },
    table: {
        number: {type: Number}
    },
    dateAdded: {
        type: Date 
    }
}
})
const Order = model('Order', orderSchema);
module.exports = Order; 