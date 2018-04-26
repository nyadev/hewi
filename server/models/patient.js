import mongoose, {Schema} from 'mongoose'

const { ObjectId } = Schema.Types

const PatientSchema = new Schema ({
  therapist_id: { type: String, required: true},
  curp: { type: String, required: true},
  birth: { type: Date, required: true},
  sex: { type: String, required: true},
  age: { type: Number, required: true},
  lat: { type: String, required: true},
  scholarship: { type: String, required: true},

  phone: { type: Number, required: true},
  cellPhone: { type: Number, required: true},
  street: { type: String, required: true},
  extNumber: { type: Number},
  intNumber: { type: Number},
  col: { type: String, required: true},
  del: { type: String, required: true},
  cp: { type: Number, required: true},
  state: { type: String, required: true},

  nameT: { type: String, required: true },
  pNameT: { type: String, required: true },
  mNameT: { type: String, required: true },
  ageT: { type: String, required: true },
  scholarshipT: { type: String, required: true },

  activities: [{ type: ObjectId, ref: 'Activity', default: []}]
})

export default mongoose.model('Activity', ActivitySchema)
