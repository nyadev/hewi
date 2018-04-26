import mongoose, {Schema} from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const { ObjectId } = Schema.Types

const UserSchema = new Schema ({
  userType: { type: String, required: true},
  firstName: { type: String, required: true},
  pName: { type: String, required: true},
  mName: { type: String, required: true},
  email: { type: String, required: true, unique: true, index: true},
  password: { type: String, required: true},

  therapistInfo { type: ObjectId, ref: 'Therapist' },
  patientInfo { type: ObjectId, ref: 'Patient'}
})

UserSchema.plugin(uniqueValidator)

export default mongoose.model('User', UserSchema)
