const { Schema, model } = require("mongoose");


const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: Number,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports =model("products", productSchema)

// const Product = mongoose.model("Product", productSchema);

// export default Product;