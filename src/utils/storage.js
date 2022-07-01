export function getItem (key) {
  const res = window.localStorage.getItem(key)
  try {
    return JSON.parse(res)
  } catch (err) {
    return res
  }
}
export function setItem (key, value) {
  if (typeof value === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}
// 根据key删除本地存储中的一个
export function removeItem (key) {
  window.localStorage.removeItem(key)
}
// 删除所以的本地存储
export function clearItem () {
  window.localStorage.clearItem()
}
