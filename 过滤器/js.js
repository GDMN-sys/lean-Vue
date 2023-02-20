
function formatdate(date) {
    let date = new Date(this.time)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let formatdate = year + '年' + month + '月' + day + '日' + hour + '时' + minute + '分' + second + '秒'
    return formatdate
}