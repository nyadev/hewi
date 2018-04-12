const sessions = new Array()

export const sessionMiddleware = (req, res, next) => {
  req.sessions = sessions
  next()
}
