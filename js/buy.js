var filterSetting = [
	{
		title : "里程",
		options : [
			{
				name : "1万公里以内",
				value : 1
			},
			{
				name : "3万公里以内",
				value : 3
			},
			{
				name : "5万公里以内",
				value : 5
			},
			{
				name : "8万公里以内",
				value : 8
			}
		]
	},
	{
		title : "变速箱",
		options : [
			{
				name : "MT-手动",
				value : 1
			},
			{
				name : "AT-自动",
				value : 2
			}
		]
	},
	{
		title : "排量",
		options : [
			{
				name : "1.0L以下",
				value : "1.0"
			},
			{
				name : "1.1L-1.6L",
				value : "1.1"
			},
			{
				name : "1.6L-2.0L",
				value : "1.6"
			},
			{
				name : "2.0L-2.5L",
				value : "2.0"
			},
			{
				name : "2.5L-3.0L",
				value : "2.5"
			},
			{
				name : "3.0L-4.0L",
				value : "3.0"
			},
			{
				name : "4.0L以上",
				value : "4.0"
			}
		]
	},
	{
		title : "排放标准",
		options : [
			{
				name : "国二及以上",
				value : 1
			},
			{
				name : "国三及以上",
				value : 2
			},
			{
				name : "国四及以上",
				value : 3
			}
		]
	},
	{
		title : "国别",
		options : [
			{
				name : "德国",
				value : "101"
			},
			{
				name : "日本",
				value : "308"
			},
			{
				name : "美国",
				value : "123"
			},
			{
				name : "韩国",
				value : "212"
			},
			{
				name : "中国",
				value : "095"
			}
		]
	}
];
function createSelect(option){
	var container = document.createElement("div"),
		title = document.createElement("h2"),
		select = document.createElement("div"),
		placeholder = document.createElement("span"),
		icon = document.createElement("i"),
		ul = function(){
			var ul = document.createElement("ul");
			ul.className = "normal";
			option.options.forEach(function(item){
				var li = document.createElement("li");
				li.innerText = item.name;
				li.onclick = function(){
					console.log(item.value);
					placeholder.innerText = item.name;
				};
				ul.appendChild(li);
			});
			var _default = document.createElement("li");
			_default.innerText = "不限";
			_default.onclick = function(){
				console.log(0);
				placeholder.innerText = "请选择" + option.title;
			};
			ul.appendChild(_default);
			return ul;
		}(),
		status = 0;
	container.className = "row";
	placeholder.innerText = "请选择" + option.title;
	icon.className = "icon2 down";
	select.onclick = function(){
		ul.className = status ? "normal" : "";
		status ^= 1;
	};
	title.innerText = option.title;
	select.className = "select";
	select.appendChild(placeholder);
	select.appendChild(icon);
	select.appendChild(ul);
	container.appendChild(title);
	container.appendChild(select);
	return container;
}
var filterFragment = document.createDocumentFragment();
filterSetting.forEach(function(item){
	filterFragment.appendChild(createSelect(item));
});
document.getElementById("bottom").appendChild(filterFragment);
function createBox(option){
	var box = document.createElement("box");
	box.className = "box";
	box.style.backgroundImage = "url(" + option.url + ")";
	box.innerHTML = [
		"<div class=\"detail\">",
		"<a href=\"",
		option.id,
		"\">",
		option.title,
		"</a>",
		"<p class=\"price\">",
		"￥",
		option.price,
		"万</p>",
		"<p class=\"content\">",
		function(){
			var date = new Date(option.lisenceTime);
			return [
				date.getFullYear(),
				"/",
				date.getMonth() + 1
			].join("");
		}(),
		"上牌 | ",
		option.kilometer,
		"万公里 | ",
		option.province,
		"</p>",
		"<div class=\"mark\">",
		"<em>",
		["商家", "实名"][option.isPersonal],
		"认证</em>",
		"</div>",
		"</div>",
		["", "<i class=\"sold\">已售</i>"][option.isSold],
	].join("");
	return box;
}
var carData = eval('([{"title":"别克 2008款 凯越 1.8LE-AT","url":"http://f.souche.com/00f192a7da6e16c2748ee1d17b6b5110.jpg?imageView2/1/w/240/h/160","price":"3.3","lisenceTime":1230739200000,"kilometer":"9.00","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=ic94jOUv7Q"},{"title":"2010款 标致307 三厢 1.6L 自动舒适版","url":"http://img.souche.com/20161129/jpg/441f6a0a0b80d1301709d1b8bfe8924a.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"3.3","lisenceTime":1275321600000,"kilometer":"17.90","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=7979d903be6c487f809e29f03274943a"},{"title":"东风风度 2011款 帅客 2.0L 手动豪华型7座","url":"http://img.souche.com/20161112/jpg/a72078c3e9db370848487659bad4d663.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"3.35","lisenceTime":1346428800000,"kilometer":"8.80","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=81c676e088024445b686b9d0295344f5"},{"title":"大众 2007款 桑塔纳经典 1.8L 景畅型","url":"http://img.souche.com/ws/escimg/g16/M06/3B/50/f_900x675_0_q87_autohomecar__wKjBx1fXxFeAJ7FcAAD9KmgwYOI713.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"3.39","lisenceTime":1338480000000,"kilometer":"8.70","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=e1df0c5f8f56425a8b2587075881b115"},{"title":"2011款 比亚迪G3 数智版 1.5L 手动鑫雅型","url":"http://img.souche.com/files/default/d310aa1d21c5764735d5ce292c8fb51f.jpg","price":"3.4","lisenceTime":1296489600000,"kilometer":"8.10","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=10c7e2a8af3b48019b3b33b2a100fdc1"},{"title":"2012款 奇瑞E5 1.5L 手动运动版","url":"http://f.souche.com/c217b0b138eed2f23b0013686ee83952.jpg?imageView2/1/w/240/h/160","price":"3.4","lisenceTime":1359648000000,"kilometer":"4.60","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=RtACAx1qik"},{"title":"莲花汽车莲花L3 2009款 运动型 1.6L 手动时尚版","url":"http://f.souche.com/FslFuHeATeo7IrxfAL6vBhlzmWD6?imageView2/1/w/240/h/160","price":"3.4","lisenceTime":1272643200000,"kilometer":"9.80","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=rS4d82CBMG"},{"title":"现代 2008款 悦动 1.6L 手动 GLS","url":"http://img.souche.com/20161128/JPG/97e6f1d378ddcabd6c634c1338dd50ce.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"3.45","lisenceTime":1238515200000,"kilometer":"10.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=aa8750d4f4664614a8b9f94f87cb5ea8"},{"title":"吉利汽车 2009款 经典帝豪 三厢 1.8L 手动豪华型","url":"http://img.souche.com/files/default/2d8a4ab8ac2eff74e43bf4f526ab32c3.png","price":"3.48","lisenceTime":1283270400000,"kilometer":"5.80","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=f6e885a2aa10491f88fa2a1948b07ab0"},{"title":"铃木 2010款 奥拓 1.0L 自动炫酷版","url":"http://img.souche.com/files/default/c52e33b5777d8a0991b37caedb84ab43.png","price":"3.48","lisenceTime":1293811200000,"kilometer":"3.90","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=0c44463b09654e3884841e8fe7cb23f7"},{"title":"2004款 奥迪A6 2.4L 豪华舒适","url":"http://img.souche.com/files/default/d9611644b2f456b232ad604000a9634c.jpg","price":"3.49","lisenceTime":1056988800000,"kilometer":"13.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=b01898e1dfba4f0da90604e7d7eb5964"},{"title":"本田 2007款 飞度 1.5L 手动标准版","url":"http://img.souche.com/files/default/81496f2f5c789badee7058bdd8c19a80.jpg","price":"3.5","lisenceTime":1196438400000,"kilometer":"9.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=5f7640d26732491c9e25a0b803031e3e"},{"title":"别克 2007款 君越 2.4 豪华导航版","url":"http://img.souche.com/20161017/jpg/9ed68149fbc176516c562c3791aec26e.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"3.5","lisenceTime":1170259200000,"kilometer":"13.50","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=d45a946ef0e8457693d7fa38b733e30d"},{"title":"日产 2008款 骐达 1.6L 自动时尚型","url":"http://img.souche.com/files/default/1C9CECACF7F33E4A3DF12BE2C2C2641D_621x414.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"3.5","lisenceTime":1220198400000,"kilometer":"9.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=43e875aa-7964-4202-9d17-2eaf48e8fb0d"},{"title":"丰田 2007款 花冠 1.8L 手动GLX-i特别版","url":"http://img.souche.com/20161118/JPG/33e024c252f6b4ac1a66936edbb088ec.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"3.5","lisenceTime":1172678400000,"kilometer":"22.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=67e704a8dfc34ef8a5bc95250d337680"},{"title":"菲亚特 2006款 派朗 1.7L 领航版","url":"http://img.souche.com/7b2cc25ffbf7865275728a65d88b1f73.jpg","price":"3.5","lisenceTime":1170259200000,"kilometer":"6.00","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=YxK5AemIcz"},{"title":"2010款 荣威350 350S 1.5L 自动迅达版","url":"http://img.souche.com/20161128/JPG/4adc093a48b80e03f53ece467efc539a.JPG","price":"3.5","lisenceTime":1293811200000,"kilometer":"18.40","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=d87a035994cd46f480b267dc3b007315"},{"title":"日产 2006款 天籁 200JK豪华版","url":"http://img.souche.com/files/default/F6B15DD1BAAF5D23EAD14E38919D9CD7_621x414.jpg@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"3.5","lisenceTime":1170259200000,"kilometer":"23.50","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=e27e01a9-3422-4140-8b86-fa7e3dafe818"},{"title":"日产 2006款 骐达 1.6GS AT","url":"http://img.souche.com/20161117/JPG/f977ebb3b5b3c7506a30e07e6d909633.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"3.5","lisenceTime":1149091200000,"kilometer":"7.60","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=741d8f9fefc74b9794486990c3621883"},{"title":"2004款 奥迪A6 1.8T 自动舒适","url":"http://img.souche.com/20161126/JPG/4efe839dd603b3ae84c22f889a4899d4.JPG","price":"3.5","lisenceTime":1056988800000,"kilometer":"19.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=ea8523e6d04d46b099ef6776e4220d7c"},{"title":"别克 2008款 凯越 HRV 1.6LE-自动运动版","url":"http://img.souche.com/20161128/JPG/64eb15095d420eaf5f08817ba0688f89.JPG","price":"3.5","lisenceTime":1243785600000,"kilometer":"10.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=0e062228a40c490591b7cdd51e544d90"},{"title":"现代 2007款 伊兰特 1.6L 手动舒适型","url":"http://img.souche.com/files/default/4B6371A0CC5A52EB954728E84CD6A248_1280x960.jpg","price":"3.5","lisenceTime":1267372800000,"kilometer":"5.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=a1c64df6-0f31-4507-8e40-13a19f81f3ac"},{"title":"雪佛兰 2010款 乐风 1.4手动风度版","url":"http://img.souche.com/20161123/jpg/57dee9947bb4766d5bbfcf3a9dbc923f.jpg","price":"3.6","lisenceTime":1309449600000,"kilometer":"9.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=0000f56297cb4459bf09d725705b0be5"},{"title":"东南 2014款 V3菱悦 1.5L 手动豪华版","url":"http://f.souche.com/9cd77fef9b886c44a756bc40783788fb.jpg?imageView2/1/w/240/h/160","price":"3.6","lisenceTime":1396281600000,"kilometer":"2.00","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=iF6uous19S"}])'),
	carFragment = document.createDocumentFragment();
carData.forEach(function(item){
	carFragment.appendChild(createBox(item));
});
document.getElementById("cars").appendChild(carFragment);