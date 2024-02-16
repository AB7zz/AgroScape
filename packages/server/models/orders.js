import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    items: {
        type: [
            {
                id: {
                    type: Number,
                    required: true
                },
                userId: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        default: []
    }
});

const Orders = mongoose.model('Orders', OrderSchema);

export default Orders;
