// 获取文章
import request from '@/utils/request'
export const getArticle = (article_id) => {
  return request({
    url: `/articles/${article_id}`
  })
}
// 添加用户
export const addUser = (target) => {
  return request({
    method: 'POST',
    url: 'user/followings',
    data: {
      target
    }
  })
}
// 取消用户
export const delUser = (target) => {
  return request({
    method: 'DELETE',
    url: `user/followings/${target}`
  })
}
// 添加收藏
export const addCollect = (target) => {
  return request({
    method: 'POST',
    url: 'article/collections',
    data: {
      target
    }
  })
}
// 取消收藏
export const delCollect = (target) => {
  return request({
    method: 'DELETE',
    url: `article/collections/${target}`
  })
}
// 添加点赞
export const addLike = (target) => {
  return request({
    method: 'POST',
    url: 'article/likings',
    data: {
      target
    }
  })
}
// 取消点赞
export const delLike = (target) => {
  return request({
    method: 'DELETE',
    url: `article/likings/${target}`
  })
}
