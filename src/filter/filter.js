
//设置首字母大写
const capitalize = value => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export {
  capitalize
}
