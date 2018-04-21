import mongoose, {Schema} from 'mongoose'

const ActivitySchema = new Schema ({
  type: { type: Number, required: true },
  numberOf: { type: Number, required: true},
  level: { type: Number, required: true},
  corrects: { type: Number, required: true},
  fails: { type: Number, required: true},
  date: { type: Date, default: Date.now, required: true}
})

export default mongoose.model('Activity', ActivitySchema)
