// 导入文章数据
import {
  postList
} from '../../data/data.js'
Page({
  data: {
  },
  onLoad() {
    this.setData({
      postList
    })
  },
  goDetail(e) {
    const postid = e.currentTarget.dataset.postId || e.detail.pid
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid=' + postid
    })
  }
})