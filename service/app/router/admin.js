module.exports = app =>{
    const {router,controller} = app
    // var adminauth = app.middleware.adminauth()
    router.get('/admin/index' ,controller.admin.main.index)
    router.post('/admin/checkOpenId',controller.admin.main.checkLogin)
}
