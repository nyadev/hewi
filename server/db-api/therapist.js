import Debug from 'debug'
import { User } from '../models'

const debug = new Debug('hewi:db-api:patient')

export default {
  findAll: () => {
    debug('Finding all therapists')
    return User
    .find({ userType: 'therapist'})
    .populate('therapistInfo')
  },

  findByCedula: (cedula) => {
    debug(`Find therapist with cedula ${cedula}`)
    return User
    .find()
    .populate('therapistInfo')
    .findOne({ cedula })
  }
}
