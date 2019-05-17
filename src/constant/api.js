export default {
  generateSign:'/wx/generateSign',//微信登陆获取时间戳字符串等
  code2UserInfo:'/wx/sns/oauth2/code2UserInfo',//oauth2授权,通过code获取微信用户信息
  createStudent:'/v1/works/student/create',//学生报名信息
  createStudentWorks:'/v1/works/studentWorks/create',//学生上传作品
  createTeacher:'/v1/works/teacher/create',//老师报名信息
  createTeacherWorks:'/v1/works/teacherWorks/create',//老师上传作品
  obtainStudentList:'/v1/works/student/list',//获取学生的报名信息列表
  obtainTeacherList:'/v1/works/teacher/list',//获取老师的报名信息列表
  studentWorks:'/v1/works/studentWorks/list',//根据studentId获取学生作品列表
  teacherWorks:'/v1/works/teacherWorks/list',//根据teacherId获取教师作品列表
  downloadWorks:'/v1/works/downloadWorks',//下载zip报名表
  getWorksByLoginUser:'/v1/works/getWorksByLoginUser',//根据登录用户获取报名作品列表
}
