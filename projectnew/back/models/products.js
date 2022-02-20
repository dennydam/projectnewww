import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '商品名不能為空']
  },
  price: {
    type: Number,
    min: [0, '價格格式不正確'],
    required: [true, '商品價格不能為空']
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: {
      values: ['訓練菜單', '飲食菜單'],
      message: '商品分類不存在'
    }
  },
  video: {
    type: String
  }
}, { versionKey: false })

export default mongoose.model('products', productSchema)
