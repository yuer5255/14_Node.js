const os = require('os');
//开机时间（操作系统从开机到此刻的运行时间）
console.log(os.uptime());


//获取进程号
console.log(process.pid)
//获取CPU架构类型
console.log(process.arch)
//获取平台信息
console.log(process.platform);
//获取操作系统环境变量
console.log(process.env);
//获取当前所在工作目录
console.log(process.cwd());
//获取解释器所在目录
console.log(process.execPath);
//获取Node.js版本信息
console.log(process.versions);
//获取Node.js解释器运行时间（s）
console.log(process.uptime());
//获取内存信息
console.log(process.memoryUsage());
//结束进程ID发送退出信号
//console.kill(某个PID);
//结束当前进程
//process.kill(process.pid);

