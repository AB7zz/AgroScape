import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
                itemId: {
                    type: String,
                    required: true
                },
                userId: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
});

const Orders = mongoose.model('Orders', OrderSchema);

export default Orders;
