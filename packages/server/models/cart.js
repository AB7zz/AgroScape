import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CartSchema = new Schema({
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

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
