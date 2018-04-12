const totalDate = new Date();

const session = {
  id: 1,
  curpt: 'CURPT',
  curpp: 'CURP',
  date: totalDate.toLocaleDateString('en-US'),
  time: totalDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
  sessionnumber: 3,
  notes: 'Esto sólo son observaciones de prueba para ver como es que se acomoda en la tabla',
}

const sessions = new Array(2).fill(session)

export const  sessionMiddleware = (req, res, next) => {
  req.sessions = sessions
  next()
}
