import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema.Types

const AdminSchema = new Schema({
  email: { type: String, required: true},
  password: { type: String, required: true},
  pname: { type: String, required: true},
  mname: { type: String, required: true},
  firstname: { type: String, required: true},
  therapists: [{ type: ObjectId, ref: 'Therapist'}]
})

export default mongoose.model('Admin', AdminSchema
