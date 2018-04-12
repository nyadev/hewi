import { users } from './auth';

export const findPatients = c => users.filter(({ userType }) => userType === c)

export const patientsMiddleware = (req, res, next) => {
  req.users = findPatients('patient')
  next()
}
