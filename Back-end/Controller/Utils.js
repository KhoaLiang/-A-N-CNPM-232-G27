const Stat = require('../Models/statisticModel')

exports.genId = () => {
  const day = new Date()
  const dayString = `${day.getFullYear()}${
    day.getMonth() + 1
  }${day.getDate()}${day.getHours()}${day.getMinutes()}${day.getSeconds()}`
  return parseInt(dayString)
}

exports.updateStat = async (deviceId, usedTime, lastUse) => {
  const _time = new Date(lastUse)
  const result1 = await Stat.findOne({ deviceId: deviceId }).exec()
  if (result1) {
    const updatedTime = new Date(result1.updatedAt)
    // Check for new week day
    if (
      updatedTime.getDate() < _time.getDate() &&
      updatedTime.getDay() > _time.getDay()
    ) {
      const result2 = await Stat.findOneAndUpdate(
        { deviceId: deviceId },
        { data: [0, 0, 0, 0, 0, 0, 0] }
      )
    }
  }

  switch (_time.getDay()) {
    case 0: // Sunday
      return await Stat.findOneAndUpdate(
        { deviceId: deviceId },
        { $inc: { 'data.6': usedTime } }
      ).exec()
    case 1: // Monday
      return await Stat.findOneAndUpdate(
        { deviceId: deviceId },
        { $inc: { 'data.0': usedTime } }
      ).exec()
    case 2: // Tuesday
      return await Stat.findOneAndUpdate(
        { deviceId: deviceId },
        { $inc: { 'data.1': usedTime } }
      ).exec()
    case 3: // Wednesday
      return await Stat.findOneAndUpdate(
        { deviceId: deviceId },
        { $inc: { 'data.2': usedTime } }
      ).exec()
    case 4: // Thursday
      return await Stat.findOneAndUpdate(
        { deviceId: deviceId },
        { $inc: { 'data.3': usedTime } }
      ).exec()
    case 5: // Friday
      return await Stat.findOneAndUpdate(
        { deviceId: deviceId },
        { $inc: { 'data.4': usedTime } }
      ).exec()
    case 6: // Saturday
      return await Stat.findOneAndUpdate(
        { deviceId: deviceId },
        { $inc: { 'data.5': usedTime } }
      ).exec()
    default:
      throw new Error('Invalid day')
  }
}
