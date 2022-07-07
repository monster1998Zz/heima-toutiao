// 获取评论列表
import request from '@/utils/request'
export const getCommentList = ({ type, source, offset, limit }) => {
  return request({
    url: '/comments',
    params: {
      type,
      source,
      offset,
      limit
    }
  })
}
// 添加评论点赞
export const addComLike = (target) => {
  return request({
    method: 'POST',
    url: 'comment/likings',
    data: {
      target
    }
  })
}
// 删除评论点赞
export const delComLike = (target) => {
  return request({
    method: 'DELETE',
    url: `comment/likings/${target}`

  })
}
// 发表文章评论
export const addComment = (data) => {
  return request({
    method: 'POST',
    url: 'comments',
    data
  })
}
