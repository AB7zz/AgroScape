import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CartSchema = new Schema({
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

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
