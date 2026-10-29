export function twoFer(name: string = "you"): string {
//             ^^^^^^          -- 函数名
//                    ^^       -- 参数写在这里（目前是空的）
//                       ^^^^^^ -- 返回类型，表示这个函数必须返回一个 string
//
// export 让测试文件可以导入并调用这个函数
//
// 你的代码写在这里，注释都可以删掉
  return `One for ${name}, one for me.`
}