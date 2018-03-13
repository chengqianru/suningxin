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
	imgs.forEach(function(ele,imdex){
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
// 侧导航部分
{
	let bottom=document.querySelectorAll(".side_tu_bottom");
	let bottom2=document.querySelectorAll(".side_tu_bottom2");
	let fanzi=document.querySelector(".side_tan");
	let dibu=document.querySelectorAll(".side_tu_di");
	let dibu2=document.querySelectorAll(".side_tu_di2");
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
	let items=document.querySelectorAll(".floattlan .floattlan_item");
	let contains=document.querySelectorAll(".bigBox");
	items.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=contains[index].offsetTop-50;
			document.documentElement.scrollTop=ot;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25)
		}
	});
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		// let obj=tips[0];
		for(let i=0;i<contains.length;i++){
			if(st>contains[i].offsetTop-50){
				for(let n=0;n<items.length;n++){
					items[n].classList.remove("active");
				}
				items[i].classList.add("active");
			}
			
		}
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
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			next.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-992*n+"px";
		inner.style.marginLeft=-992*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.add("disable");
		if(n===-1){
			n=2;
			n--;
			return;
		}
		if(n===0){
			prev.classList.add("disable");
		}
		inner.style.marginLeft=-992*n+"px";
	}
}
// 乐拼部分
{
	const prev=document.querySelector(".leping_lbtn");
	const next=document.querySelector(".leping_rbtn");
	const inner=document.querySelector(".leping_bigitem");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===3){
			next.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-560*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.add("disable");
		if(n===-1){
			n=2;
			n--;
			return;
		}
		if(n===0){
			prev.classList.add("disable");
		}
		inner.style.marginLeft=-560*n+"px";
	}
}
// 视频
{
	{
	const prev=document.querySelector(".dabankuai_kuai_lbtn");
	const next=document.querySelector(".dabankuai_kuai_rbtn");
	const inner=document.querySelector(".kuai_daitem");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			next.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-390*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.add("disable");
		if(n===-1){
			n=2;
			n--;
			return;
		}
		if(n===0){
			prev.classList.add("disable");
		}
		inner.style.marginLeft=-390*n+"px";
	}
}
}