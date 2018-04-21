import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const PatientSchema = new Schema({
  curp: { type: String, required: true},
  pname: { type: String, required: true},
  lname: { type: String, required: true},
  firstname: { type: String, required: true},
  sex: { type: String, required: true},
  birth: { type: Date, required: true},
  age: { type: Number, required: true},
  curp: { type: String, required: true},
  laterality: { type: String, required: true},
  school: { type: String, required: true},
  medicald: { type: String, required: true},
  studies: { type: String, required: true},
  tutor: { type: ObjectId, ref: 'Tutor', req: true},
  activities: [{ type: ObjectId, ref: 'Activity'}]
})

export default mongoose.model('Patient', PatientSchema))
