import has from 'lodash.has'
/**
 * Arranges
 * @param  {[type]} elems [description]
 * @param  {[type]} prop  [description]
 * @return {Object}       [description]
 */

function propertyArrangement(elems, prop) {
  let obj = {}

  elems.forEach(elem => {
    const elemProp = elem[prop]
    // If property is not yet created in obj
    if (!has(obj, elemProp)) obj[elemProp] = []
    obj[elemProp].push(elem)
  })

  return obj
}

function reversePropertyArrangement(obj) {
  let arr = []

  Object.keys(obj).forEach(key => {
    const el = obj[key].forEach(e => {
      arr.push(e)
    })
  })

  return arr
}

module.exports = {
  propertyArrangement,
  reversePropertyArrangement
}
