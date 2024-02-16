import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MarketPlaceSchema = new Schema({
    items: {
        type: [
            {
                id: {
                    type: Number,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                desc: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                img: {
                    type: String,
                    required: true
                }
            }
        ],
        default: []
    }
});

const MarketPlace = mongoose.model('Marketplace', MarketPlaceSchema);

export default MarketPlace;
