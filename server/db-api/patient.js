import Debug from 'debug'
import { User } from '../models'

const debug = new Debug('hewi:db-api:patient')

export default {
  findAll: (cedula) => {
    debug('Finding all patients')
    return User
    .find()
    .populate('patientInfo')
    .find({therapist_id: cedula})
  },

  findByCurp: (curp) => {
    debug(`Find patient with curp ${curp}`)
    return User
    .find()
    .populate('patientInfo')
    .findOne({ curp })
  }
}
