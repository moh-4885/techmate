const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      productId: {
        type: mongoose.Types.ObjectId,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  orderstatus: {
    default: "pending",
    type: String,
    required: true,
  }, //pending cancelled , delivred
  orderDate: {
    type: Date,
    required: true,
  },
  orderAdress: {
    type: String,
    required: true,
  },
  orderPayer: {
    type: String,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Order", orderSchema);
