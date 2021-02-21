const mongoose = require('mongoose')

const shippingAddressSchema = mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    shippingAddress: {
      type: [shippingAddressSchema],
      validate: [arrayLimit, "Shipping Addresses can't exceeds the limit of 2"],
    },
    role: { type: String, required: true, default: 'customer' },
  },
  {
    timestamos: true,
  }
)

function arrayLimit(val) {
  return val.length <= 2
}

module.exports = mongoose.model('User', userSchema)
