const messages = {

    // base
    200: "成功",
    202: "请求已接受，正在处理",

    400: "参数错误",
    401: "信息错误",
    402: "未授权的请求",
    403: "权限不足",
    404: "未知资源",
    405: "资源已存在",
    406: "授权已过期",
    407: "受保护的资源",

    500: "服务器错误",
    501: "服务器限流",
    502: "请求失败",

    0: '成功',
    1: '创建成功',
    2: '更新成功',
    3: '删除成功',


    10110: '{name}大小不能超过{size}字节',
    10111: '总文件体积不能超过{size}字节',
    10120: '文件数量过多',
    10121: '文件太多，文件总数不可超过{num}',
    10130: '不支持类型为{ext}的文件',
    10180: '全部文件大小不能超过{num}',
    10190: '读取文件数据失败',

}

export default function getMessageByCode (code: number): string {

  return messages[code] || ''

}
