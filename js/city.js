
function createBox(option){
	var box =document.createElement("div");
	box.className="citystyle";
 var aaa ="<a href=\"#\" class=\"city-D\">";
	box.innerHTML =[
		 "<p class=\"city-title\">",option.title,"</p>",
		aaa,option.city,"</a>",
		aaa,option.city1,"</a>",
		aaa,option.city2,"</a>",
		aaa,option.city3,"</a>",
		aaa,option.city4,"</a>",
		aaa,option.city5,"</a>",
		aaa,option.city6,"</a>",
		aaa,option.city7,"</a>",
		aaa,option.city8,"</a>",
		aaa,option.city9,"</a>",
		aaa,option.city10,"</a>",
		aaa,option.city11,"</a>",
		aaa,option.city12,"</a>"
	].join("");
	return box;
}

var ch2 = function createh2(){
var h2 =document.createElement("h2");
h2.className="h2style";
h2.innerHTML=["大搜车全国开放城市大全"];
	return h2;
}();

var cityA =[
	{ title:"热门城市",
		city:["宁波"],city1:["深圳"],city2:["厦门"],city3:["北京"],city4:["成都"]
	},{
		title:"北京"
	},{
		title:"新疆",
		city:["乌鲁木齐"]
	},{
		title:"辽宁",
		city:["沈阳"],city1:["大连"],city2:["抚顺"],city3:["盘锦"],city4:["鞍山"]
	},{
		title:"湖南",
		city:["长沙"], city1:["湘潭"]
	},{
		title:"河北",
		city:["石家庄"],city1:["唐山"],city2:["保定"],city3:["沧州"],city4:["秦皇岛"],city5:["廊坊"],city6:["邯郸"]
	},{
		title:"内蒙古",
		city:["呼和浩特"] ,city1:["包头"]
	},{
		title:"福建",
		city:["福州"],city1:["厦门"],city2:["泉州"],city3:["漳州"],city4:["宁德"],city5:["龙岩"]
	},{
		title:"陕西",
		city:["西安"] ,city1:["咸阳"]
	},{
		title:"浙江",
		city:["杭州"],city1:["宁波"],city2:["台州"],city3:["温州"],city4:["绍兴"],city5:["金华"]
	},{
		title:"四川",
		city:["成都"] ,city1:["绵阳"]
	},{
		title:"贵州",
		city:["贵阳"] ,city1:["遵义"]
	},{
		title:"云南",
		city:["昆明"]
	},{
		title:"上海"
	},{
		title:"山西",
		city:["太原"],city1:["晋城"],city2:["大同"],city3:["临汾"]
	},{
		title:"江西",
		city:["南昌"],city1:["九江"],city2:["抚州"],city3:["赣州"]
	},{
		title:"广西",
		city:["南宁"],city1:["柳州"],city2:["桂林"]
	},{
		title:"黑龙江",
		city:["哈尔滨"],city1:["大庆"]
	},{
		title:"宁夏",
		city:["银川"]
	},{
		title:"江苏",
		city:["南京"],city1:["盐城"],city2:["徐州"],city3:["宿迁"],city4:["泰州"],city5:["无锡"],city6:["连云港"],city7:["常州"],city8:["扬州"],city9:["苏州"],city10:["镇江"],city11:["淮安"],city12:["南通"]
	},{
		title:"安徽",
		city:["合肥"],city1:["蚌埠"],city2:["淮南"],city3:["芜湖"],city4:["六安"]
	},{
		title:"吉林",
		city:["长春"],city1:["吉林"]
	},{
		title:"湖北",
		city:["武汉"],city1:["荆州"],city2:["随州"],city3:["宜昌"],city4:["黄冈"]
	},{
		title:"重庆"
	},{
		title:"山东",
		city:["济南"],city1:["威海"],city2:["烟台"],city3:["济宁"],city4:["枣庄"],city5:["临沂"],city6:["潍坊"],city7:["日照"],city8:["青岛"],city9:["淄博"]
	},{
		title:"河南",
		city:["郑州"],city1:["安阳"],city2:["新乡"],city3:["洛阳"],city4:["焦作"],city5:["开封"],city6:["商丘"],city7:["许昌"]
	},{
		title:"广东",
		city:["广州"],city1:["东莞"],city2:["深圳"],city3:["佛山"]
	}
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

city(cityA);