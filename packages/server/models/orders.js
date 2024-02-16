import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
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
});

const Orders = mongoose.model('Orders', OrderSchema);

export default Orders;
