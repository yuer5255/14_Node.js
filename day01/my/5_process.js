const os = require('os');
//����ʱ�䣨����ϵͳ�ӿ������˿̵�����ʱ�䣩
console.log(os.uptime());


//��ȡ���̺�
console.log(process.pid)
//��ȡCPU�ܹ�����
console.log(process.arch)
//��ȡƽ̨��Ϣ
console.log(process.platform);
//��ȡ����ϵͳ��������
console.log(process.env);
//��ȡ��ǰ���ڹ���Ŀ¼
console.log(process.cwd());
//��ȡ����������Ŀ¼
console.log(process.execPath);
//��ȡNode.js�汾��Ϣ
console.log(process.versions);
//��ȡNode.js����������ʱ�䣨s��
console.log(process.uptime());
//��ȡ�ڴ���Ϣ
console.log(process.memoryUsage());
//��������ID�����˳��ź�
//console.kill(ĳ��PID);
//������ǰ����
//process.kill(process.pid);

