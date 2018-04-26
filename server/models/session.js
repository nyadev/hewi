import mongoose, {Schema} from 'mongoose'

const { ObjectId } = Schema.Types

const SessionSchema = new Schema ({
  PatientCurp: { type: String, required: true},

})

UserSchema.plugin(uniqueValidator)

export default mongoose.model('User', UserSchema)
