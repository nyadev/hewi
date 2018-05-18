import mongoose, {Schema} from 'mongoose'

const { ObjectId } = Schema.Types

const SessionSchema = new Schema ({
  PatientCurp: { type: String, required: true},
})

export default mongoose.model('Session', SessionSchema)
