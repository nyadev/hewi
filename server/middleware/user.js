import { users } from './auth';

const findUsers = u => users.filter(({ userType }) => userType === u)

const findUser = c => users.find(({ curp }) => curp === c)

export const patientsMiddleware = (req, res, next) => {
  req.users = findUsers('patient')
  next()
}

export const patientMiddleware = (req, res, next) => {
  req.user = findUser(req.params.curp)
  next()
}

export const therapistsMiddleware = (req, res, next) => {
  req.users = findUsers('therapist')
  next()
}

export const therapistMiddleware = (req, res, next) => {
  req.user = findUser(req.params.curp)
  next()
}
