/*
 * @Author: xingyibiao 
 * @Date: 2017-11-10 10:55:16 
 * @Last Modified by: xingyibiao
 * @Last Modified time: 2017-11-10 11:14:06
 */

const area = require('./area')
const fs = require('fs')

const areas = []

area.forEach(val => {
  const _area = {}
  _area.code = val[1]
  _area.name = val[2]
  _area.parent_id = val[3]
  _area.level = val[4]
  areas.push(_area)
})

console.log(areas.length)

fs.writeFile('./area.json', JSON.stringify(areas), (err) => {
  if(err) {
    throw err
  }
  console.log('completed!')
})
