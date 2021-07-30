const express = require('express')
const router = express.Router()
const communityController = require('./communityController.js')
const userController = require('./usercontroller.js')
//const communityController = require('./communityController.js')
const mainboardController = require('./mainboardController.js')
const category = require('./category.js')
const popupController = require('./popupController.js')


// /admin
router.get('/',userController.login)
router.post('/',userController.login_on)
router.get('/login',userController.login_on)
router.get('/admin_list',userController.admin_list_get)
router.post('/admin_list',userController.admin_list)
router.post('/admin_add',userController.admin_add)
router.post('/searched_data',userController.searched_data)
router.get('/admin_search',userController.admin_search_get)
router.post('/admin_search',userController.admin_search)
router.get('/user_list',userController.user_list) 
router.post('/user_list',userController.add_user)
router.get('/site_set',userController.site_set)
router.post('/site_set',userController.site_set_post)
//router.get('/search_m',userController.manager_search)
//router.post('/search_m',userController.manager_search)

//router.use('/community',communityController.report)
router.get('/community',communityController.report_page)
router.post('/community',communityController.delete_selection)
router.get('/sub_board_search',communityController.sub_board_search)
router.post('/community/m_contents',communityController.make_contents)
router.get('/community_write',communityController.write)
//admin/board_make
router.get('/board_make',mainboardController.board_page)
router.post('/board_make',mainboardController.board_make)
router.post('/board_manage',mainboardController.board_manage)
router.get('/subboard_searchd',communityController.subboard_searched)
//router.get('/board_search_title',communityController.search_title)


router.get('/mainBoard_category',category.index)

router.get('/popup_manage',popupController.main)


module.exports = router