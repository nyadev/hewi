const activities = new Array()

export const findActivities = a => activities.filter(({ curp }) => curp === a)

export const activitiesMiddleware = (req, res, next) => {
  req.activities = activities
  next()
}

export const activityMiddleware = (req, res, next) => {
  req.activities = findActivities(req.params.curp)
  next()
}
