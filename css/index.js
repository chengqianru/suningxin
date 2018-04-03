{
	const imgs=document.querySelectorAll(".imgbox li");
	const pagers=document.querySelectorAll(".pagebox li");
	const banner=document.querySelector(".banner");
	const next=document.querySelector(".next");
	const prev=document.querySelector(".prev");
	// console.log(imgs);
	// console.log(pagers);
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});
	let n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		// n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			imgs[n].classList.add("active");
			pagers[n].classList.add("active");
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
		
	}
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
		
	};
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	};
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
// 侧导航部分
{
	let bottom=document.querySelectorAll(".side_tu_bottom");
	let bottom2=document.querySelectorAll(".side_tu_bottom2");
	let bottom3=document.querySelectorAll(".side_tu_bottomdi");
	let fanzi=document.querySelector(".side_tan");
	let dibu=document.querySelectorAll(".side_tu_di");
	let dibu2=document.querySelectorAll(".side_tu_di2");
	let dibu3=document.querySelectorAll(".side_tu_di3");
	let box=document.querySelectorAll(".side_tu_box");
	let box2=document.querySelectorAll(".side_tu_box2");
	let di=document.querySelector(".side_di");
	let fan=document.querySelector(".side_fantan");
	let item=document.querySelector(".side_tan");
	dibu.forEach(function(ele,index){
		ele.onmouseenter=function(){
			bottom[index].style.width="47px";
			box[index].style.opacity=1;
			
		}
		ele.addEventListener("transitionend",function(){
			this.style.backgroundColor="#333";
			// this.style.color="#FFAA01";
		})
		ele.onmouseleave=function(){
			bottom[index].style.width="0";
			bottom[index].style.zIndex="-1";
			
		}
	})
	
	dibu2.forEach(function(ele,index){
		ele.onmouseenter=function(){
			bottom2[index].style.width="77px";
			box2[index].style.opacity=1;

		}
		ele.addEventListener("transitionend",function(){
			this.style.backgroundColor="#333";
			// this.style.color="#FFAA01";
		})
		ele.onmouseleave=function(){
			bottom2[index].style.width="0";

		}
	})
	di.onmouseenter=function(){
		fan.style.width="73px";
		item.style.opacity=1;

		}
	di.addEventListener("transitionend",function(){
		this.style.backgroundColor="#333";
		// this.style.color="#FFAA01";
	})
	di.onmouseleave=function(){
		fan.style.width="0";
	}
	di.onclick=function(){
		document.documentElement.scrollTop=0;
		// console.log(out.scrollLeft);
	}
}
// 上导航
{
	let topbar=document.querySelector(".toplan");
	let leftbar=document.querySelector(".leftbar");
	let top=document.querySelector(".toplan_top");
	let fenlei=document.querySelector(".tanfenlei");
	let show=document.querySelector(".toplan_nav");
	let leftdao=document.querySelector(".floattlan");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st>1150){
			topbar.style.display="block";
		}else{
			topbar.style.display="none";
		}
		if(st>2580){
			leftdao.style.display="block";
		}else{
			leftdao.style.display="none";
		}
		
	}
	top.onmouseenter=function(){
		fenlei.style.height="440px";
		show.style.display="block";
	}
	top.onmouseleave=function(){
		fenlei.style.height="0";
		show.style.display="none";
	}
}
// 左导航
{
	let leftfan=document.querySelector(".floattlan_di");
	leftfan.onclick=function(){
		document.documentElement.scrollTop=0;
	}
	let items=document.querySelectorAll(".floattlan_item");
	let contains=document.querySelectorAll(".bigBox");
	// let flag=true;
	items.forEach(function(ele,index){
		ele.onclick=function(){
			// flag=false;
			let ot=contains[index].offsetTop-150;
			document.documentElement.scrollTop=ot;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/10;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
					flag=true;
				}
				document.documentElement.scrollTop=now;
			},25)
		}
	});
	window.addEventListener("scroll",function(){
		// if(flag){
			let st=document.documentElement.scrollTop;
		// let obj=tips[0];
			for(let i=0;i<contains.length;i++){
				if(st>=contains[i].offsetTop-150){
					for(let n=0;n<items.length;n++){
						items[n].classList.remove("active");
					}
					items[i].classList.add("active");
				}
				
			}
		// }
	})
}
// banner
{
	let labels=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".banner_menu");
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			menus[index].style.display="block";
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})

}
// 大聚惠部分
{
	const prev=document.querySelector(".dajuhui_lbtn");
	const next=document.querySelector(".dajuhui_rbtn");
	const inner=document.querySelector(".dajuhui_daitem");
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-1000*n+"px";
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-1000*n+"px";
		}
	}
	// 添加过渡结束事件
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			inner.style.marginLeft="-1000px";
			inner.style.transition="none";
			n=1;

		}
		if(n===0){
			inner.style.marginLeft="-3000px";
			inner.style.transition="none";
			n=3;

		}
	})

	
}
// 乐拼部分
{
	const prev=document.querySelector(".leping_lbtn");
	const next=document.querySelector(".leping_rbtn");
	const inner=document.querySelector(".leping_bigitem");
    let n=1;
    let flag=true;
    next.onclick=function(){
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 1s";
            inner.style.marginLeft=-560*n+"px";
        }
    }
    prev.onclick=function(){
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=-560*n+"px";
        }
    }
    // 添加过渡结束事件
    inner.addEventListener("transitionend",function(){
        flag=true;
        if(n===4){
            inner.style.marginLeft="-560px";
            inner.style.transition="none";
            n=1;

        }
        if(n===0){
            inner.style.marginLeft="-1680px";
            inner.style.transition="none";
            n=3;

        }
    })
}
// 视频
{
	const prev=document.querySelector(".dabankuai_kuai_lbtn");
	const next=document.querySelector(".dabankuai_kuai_rbtn");
	const inner=document.querySelector(".kuai_daitem");
	const innertu=document.querySelectorAll(".kuai_tu");
	const pic=document.querySelectorAll(".kuai_item_luntu_small img");
	let n=1;
	let flag=true;
	innertu.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<pic.length;i++){
				pic[i].classList.remove("active");
			}
			pic[index].classList.add("active");
		}
		
	});
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-390*n+"px";
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-390*n+"px";
		}
	}
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			inner.style.marginLeft="-390px";
			inner.style.transition="none";
			n=1;
		}
		if(n===0){
			inner.style.marginLeft="-1170px";
			inner.style.transition="none";
			n=3;
		}
	})
}
// 排行榜
{
	const prev=document.querySelector(".paihang_lbtn");
	const next=document.querySelector(".paihang_rbtn");
	const inner=document.querySelector(".paihang_daitem");
	const lunbo=document.querySelectorAll(".paihang_dian li");
	const ping=document.querySelectorAll(".paihang_daitem_box");
	let n=1;
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			n++;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-390*n+"px";
			lunbo[n].classList.add("active");
			lunbo[n-1].classList.remove("active");
			obj=lunbo[n];
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n--;
			inner.style.transition="all 1s";
			inner.style.marginLeft=-390*n+"px";
			lunbo[n].classList.add("active");
			lunbo[n+1].classList.remove("active");
			obj=lunbo[n];
		}
	}
	inner.addEventListener("transitionend",function(){
		flag=true;
		if(n===4){
			inner.style.marginLeft="-390px";
			inner.style.transition="none";
			lunbo[n].classList.remove("active");
			lunbo[1].classList.add("active");
			n=1;
		}
		if(n===0){
			inner.style.marginLeft="-1170px";
			inner.style.transition="none";
			lunbo[n].classList.remove("active");
			lunbo[3].classList.add("active");
			n=3;
		}
	})
	let obj=lunbo[0];
	lunbo.forEach(function(ele,index){
		ele.onclick=function(){
			if(flag){
				flag=false;
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				inner.style.marginLeft=index*-390+"px";
				inner.style.transition="all 1s";
				n=index;
			}
		}
	}) 
}
// banner文字
{
	let content=document.querySelectorAll(".head_main_lefttan_box");
	let wenzi=document.querySelectorAll(".head_main_smallbox_zi");
	wenzi.forEach(function(ele,index){
		ele.onmouseenter=function(){
			// content[index].style.height="auto";
			content[index].style.display="block"
		}
		ele.onmouseleave=function(){
			// content[index].style.height="0";
			content[index].style.display="none";
		}
	})
}