// ��mockjsģ����������
var Mock = require('mockjs');

module.exports = () => {
  // ʹ�� Mock
  var data = Mock.mock({
    'course|20': [
      {
        // ���� id ��һ������������ʼֵΪ 1��ÿ���� 1
        
    'id|10000-20000': 10000,
    'name': '@cname',
    'image': '@image("200*200","#f5f5f5","BAT")',
    'time|+1': ['@cһСʱǰ', 'two', 'three'],
    'school|1': 'Taru',
    'company|1': ['TenCent', 'ALIBABA', 'JD'],
    'position|1': ['Java', 'Web'],
    'main|1':'@ctitle(10)',
    'shequn|1': '@ctitle(5)',
    'zan|1-100': 100,
    'talk|1-100': 100

      }
    ],
    'course_category': [
      {
        "name": '@cname',
		"image":"@image(200)",
        
        cName: '@ctitle(4)'
      }
    ],
	'course_login': [
      {
        "name": 'adimn',
		"password":"lanqiao123456",
        cName: '@ctitle(4)'
      }
    ],
	'index_model|20':[{
			'id|+1':1,
			'qunName|1': ['#ʵϰ�ⷿ', '#webǰ��', '#�ٸ���', '#����', '#����'],
			'image': '@image(200)',
		}],
		'index|20':[{
			'id|+1':1000,
			'name':'@cname',
			'image': '@image(200)',
			'yue|1-12':12,
			'ri|1-29':29,
			'address|1':['����', '����', '����', '�ɶ�', '�Ϻ�', '��³ľ��', '������'],
			'company|1': ['������Ϸ', '����Ͱ�', '����', '����', '�εγ���', '������'],
			'job|1': ['ǰ�˿���', '�û�����&��Աǰ���Ŷ�', 'Java����ʵϰ��', '�㷨����ʵϰ��', '���', '��Ŀ����', 'ʵʩ����ʦ', '���Թ���ʦ'],
			'time|1': ['һ', '��', '��', '��', '��', '��', '��', '��', '��', 'ʮ', 'ʮһ', 'ʮ��'],
			'email|1':['98569@163.com','925362qqcom','78484@163.com','21121@qq.com','121212@qq.com'],
			'wei|1':['����������·','�������Ͻ��','������̫����','��������'],
		}],
		'index_model|20':[{
			'id|+1':1000,
			'qunName|1': ['#ʵϰ�ⷿ', '#webǰ��', '#�ٸ���', '#����', '#����'],
			'image': '@image(200)',
		}]

  });
  // ���ص�data����Ϊjson-server������
  return data;
};