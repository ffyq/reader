// pages/movies/movies.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: [],
    searchResult:false,
    searchData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        this.setData({
          inTheaters: res.data.subjects
        })
      }
    })

    wx.request({
      url: app.gBaseUrl + 'coming_soon',
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        this.setData({
          comingSoon: res.data.subjects
        })
      }
    })
    wx.request({
      url: app.gBaseUrl + 'top250',
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        this.setData({
          top250: res.data.subjects
        })
      }
    })
  },
  onGotoMore(event) {
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  },
  onSearchCancel(event) {
    console.log(111)
    this.setData({
      searchResult: false
    })
  },
  onConfirm(event) {
    this.setData({
      searchResult: true
    })
    wx.request({
      url: app.gBaseUrl + 'search',
      data: {
        q: event.detail.value
      },
      success: (res) => {
        this.setData({
          searchData: res.data.subjects
        })
      },
    })
  }
})