



function createBox(option){
	var box =document.createElement("div");
	var span =document.createElement("span");
	var boxD =document.createElement("div");
	span.className="spanstyle";
	box.className="boxstyle";
	boxD.className="boxDstyle";
	var indexlen = option.title.length;
	var index = option.title;
	span.innerHTML=option.code;
	box.appendChild(span);
	for(var i=0;i<indexlen;i++){
		var a =document.createElement("a");
		a.className="astyle";
		a.innerHTML=index[i];
		boxD.appendChild(a);
	}
	box.appendChild(boxD);
	console.log(a);
	return box;
}

var ch2 = function createh2(){
	var h2 =document.createElement("h2");
	h2.className="h2style";
	h2.innerHTML=["车辆品牌大全"];
	return h2;
}();

var carping =[
	{code :"A",title:[["A 阿尔法罗密欧"], ["A 阿斯顿・马丁"] ,["A 奥迪"] ,["A 安凯客车"]]},
	{code :"B",title:[["B 宝骏"], ["B 宝马"] ,["B 保时捷"] ,["B 北京汽车"] ,["B 北汽制造"] ,["B 奔驰"], ["B 奔腾"],
		["B 本田"] ,["B 比亚迪"] ,["B 标致"] ,["B 别克"] ,["B 宾利"], ["B 布加迪"],
		["B 巴博斯"] ,["B 宾仕盾"] ,["B 宝沃"] ,["B 北汽新能源"] ,["B 北汽威旺"], ["B 北汽幻速"]]},
	{code :"C",title:[["C 长安"], ["C 长城"] ,["C 成功汽车"] ,["C 长安商用"]]},
	{code :"D",title:[["D 大众"], ["D 道奇"] ,["D 东风"] ,["D 东南"] ,["D 大宇"] ,["D 东风风光"], ["D 大迪"]]},
	{code :"F",title:[["F 法拉利"], ["F 菲亚特"] ,["F 丰田"] ,["F 福迪"] ,["F 富奇"] ,["F 菲斯克"], ["F 福汽启腾"]]},
	{code :"G",title:[["G GMC"], ["G 广汽传祺"] ,["G 广汽吉奥"] ,["G 观致"] ,["G 光冈"]]},
	{code :"H",title:[["H 哈飞"], ["H 海马"] ,["H 悍马"] ,["H 红旗"] ,["H 华普"] ,["H 华泰"], ["H 黄海"],
		["H 华颂"], ["H 海格"] ,["H 华凯"] ,["H 汉江"] ,["H 哈弗"] ,["H 恒天"]]},
	{code :"J",title:[["J 吉利汽车"], ["J Jeep"] ,["J 江淮"] ,["J 江铃"] ,["J 捷豹"] ,["J 金杯"], ["J 金程"],
		[" J 金龙"], ["J 江铃集团轻汽"] ,["J 金旅"] ,["J 九龙"]]},
	{code :"K",title:[["K 开瑞"], ["K 凯迪拉克"] ,["K 克莱斯勒"] ,["K 康迪"] ,["K 卡尔森"] ,["K 科尼赛克"], ["K 凯翼"] ,["K KTM"], ["K 卡威"]]},
	{code :"L",title:[["L 兰博基尼"], ["L 劳斯莱斯"] ,["L 雷克萨斯"] ,["L 雷诺"] ,["L 力帆"] ,["L 莲花汽车"], ["L 林肯"],
		["L 铃木"] ,["L 陆风"] ,["L 路虎"] ,["L 猎豹汽车"] ,["L 罗孚"], ["L 老爷车"] ,["L 理念"] ,["L 路特斯"]]},
	{code :"M",title:[["M 马自达"], ["M 玛莎拉蒂"] ,["M 迈巴赫"] ,["M MINI"] ,["M MG"] ,["M 美亚"], ["M 迈凯伦"], ["M 摩根"]]},
	{code :"N",title:[["N 纳智捷"], ["N 尼奥普兰"] ,["N 南京金龙"]]},
	{code :"O",title:[["O 讴歌"], ["O 欧宝"] ,["O 欧朗"]]},
	{code :"P",title:[["P 帕卡德"]]},
	{code :"Q",title:[["Q 奇瑞"], ["Q 起亚"] ,["Q 乔治·巴顿"] ,["Q 启辰"]]},
	{code :"R",title:[["R 日产"], ["R 荣威"] ,["R 瑞麒"] ,["R 如虎"]]},
	{code :"S",title:[["S 萨博"], ["S 三菱"] ,["S 双环"] ,["S 双龙"] ,["S 斯巴鲁"] ,["S 斯柯达"], ["S smart"],
		["S 上汽大通"], ["S 陕汽通家"] ,["S 赛麟"] ,["S 思派朗"] ,["S 绅宝"] ,["S 世爵"], ["S 思铭"]]},
	{code :"T",title:[["T 泰卡特"], ["T 特斯拉"] ,["T 腾势"]]},
	{code :"W",title:[["W 威麟"], ["W 威兹曼"] ,["W 沃尔沃"] ,["W 五菱汽车"] ,["W 五十铃"]]},
	{code :"X",title:[["X 西雅特"], ["X 现代"] ,["X 雪佛兰"] ,["X 雪铁龙"] ,["X 新凯"]]},
	{code :"Y",title:[["Y 一汽"], ["Y 依维柯"] ,["Y 英菲尼迪"] ,["Y 永源"] ,["Y 野马汽车"] ,["Y 云雀"], ["Y 英致"]]},
	{code :"Z",title:[["Z 中华"], ["Z 中兴"] ,["Z 众泰"] ,["Z 中顺"] ,["Z 中欧汽车"] ,["Z 知豆"]]}

];

var city = function () {
	var cityB = document.getElementById("body01");
	console.log(cityB);
	return function(data){
		cityB.innerText="";
		var carFragment = document.createDocumentFragment();
		data.forEach(function(item){
			console.log(item);
			carFragment.appendChild(createBox(item));
		});
		cityB.appendChild(carFragment);
	};
}();
var h222 = document.getElementById("h222");
h222.appendChild(ch2);

city(carping);