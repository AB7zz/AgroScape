import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CartSchema = new Schema({
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

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
