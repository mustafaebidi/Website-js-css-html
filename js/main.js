

////Global Varible
let header=document.querySelector(".header")

let leftLadding=document.querySelector(".text")
let rightLadding=document.querySelector(".image")
let toggle=document.querySelector(".toggle")
let settingButton=document.querySelector(".setting i")
let settingBody=document.querySelector(".setting ")



let main_ul=document.querySelector(".header .container ul")

let globalColor=document.querySelectorAll(".color li")
let mode=document.querySelectorAll(".mode")
let modeIcon=document.querySelectorAll(".mode   i")
let rateScroll=document.querySelector(".scroll")
let buttonGoToTop=document.querySelector(".scroll-to-top")

let progressBar=document.querySelectorAll(".filled-bar > div")


let aboutSectionElements=document.querySelectorAll(".about .row  > div")
let serviceSectionElements=document.querySelectorAll(".services .container > div")
let offersSectionElements=document.querySelectorAll(".offers .container > div")
let gallarySection=document.querySelector(".gallary .container .row")
let efficiencySectionElements=document.querySelectorAll(".efficiency .container > div")
let contactSectionElements=document.querySelectorAll(".contact .container > div")

let ourBlogPosts=document.querySelectorAll(".our-blog .posts > div")

let filter=document.querySelectorAll(".gallary .filter > li")

let imgbox=document.querySelectorAll(".gallary .container .box ")

let percentageOfCircle=document.querySelectorAll(".circles .backgroud .percentage")

let circles=document.querySelectorAll(".efficiency .circles .circle")



let mainColor=getComputedStyle(document.documentElement).getPropertyValue('--main-color')

let listOfdoneAnimationCircle=[]

///Global varible



window.onload = function() {

    rateScroll.style.width="0px"

    leftLadding.classList.add("animation")
    rightLadding.classList.add("animation")

    toggle.addEventListener("click",function(){
        main_ul.classList.toggle("active")
    })

}


settingButton.onclick=function(){
    settingBody.classList.toggle("active")

}


for(let i=0;i<globalColor.length;i++){
    globalColor[i].addEventListener("click",function(e){
        removeActiveFromLi()
        globalColor[i].classList.add("active")
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color)
    })
}


function removeActiveFromLi(){
    for(let i=0;i<globalColor.length;i++){
        globalColor[i].classList.remove("active")
    }
}


mode.onclick=function(){
    if(modeIcon.classList.contains("fa-moon")){
    }
}


window.onscroll=function(){

    doAnimationNav(this.pageYOffset)

    ///This is percentage of scroll
    ShowBrowsingpercentage(this.pageYOffset)

    //Show Button Go to Top
    showBotttonGoToTop(this.pageYOffset)

    //When Reach About Section
    DoAnimationAtAboutSection(this.pageYOffset)

    //When Reach About Section
    DoAnimationAtServicetSection(this.pageYOffset)

    //When Reach Offers Section
    DoAnimationAtOffersSection(this.pageYOffset)

    //When Reach Gallary Section
    DoAnimationAtGallarySection(this.pageYOffset)

    //When Reach Efficiency Section
    DoAnimationAtEfficiencySection(this.pageYOffset)

    //When reach contact Section
    doAnimationAtContactSection(this.pageYOffset)

    doAnimationInOurBlog(this.pageYOffset)


}


function DoAnimationAtAboutSection(pageyoffset){

    aboutSectionElements.forEach(element => {
        if(pageyoffset + window.innerHeight > element.offsetTop){
            element.classList.add("active")

        }
    });
    

}

function DoAnimationAtServicetSection(pageyoffset){

    serviceSectionElements.forEach(element => {
        if(pageyoffset + window.innerHeight > element.offsetTop){

            if(element.classList.contains("info")){
                progressBar.forEach(element => {
                    element.style.width = `${element.dataset.progress}%`;
                });
                
            }
            element.classList.add("active")

        }
    });
    

}

function DoAnimationAtOffersSection(pageyoffset){

    offersSectionElements.forEach(element => {
        if(pageyoffset + window.innerHeight > element.offsetTop){
            element.classList.add("active")

        }
    });
    

}

function DoAnimationAtGallarySection(pageyoffset){
    if(pageyoffset + window.innerHeight > gallarySection.offsetTop){
        gallarySection.classList.add("active")
    }

}


let fininshed=true

function DoAnimationAtEfficiencySection(pageyoffset){

    efficiencySectionElements.forEach(element => {
        if(pageyoffset + window.innerHeight > element.offsetTop){
            if(element.classList.contains("info")){
                DoAnimationInCircleatEfficiencySection((pageyoffset + window.innerHeight)-element.offsetTop)
            }
            element.classList.add("active")
            
        }
    });

}

function DoAnimationInCircleatEfficiencySection(pos){
    circles.forEach((element,index) => {
        if(pos > element.offsetTop && !listOfdoneAnimationCircle.includes(index) ){
            listOfdoneAnimationCircle.push(index)
            startPercentageOfCircle(element,percentageOfCircle[index].innerHTML)
        }
    });

}


function doAnimationInOurBlog(pageyoffset){


    if(pageyoffset + window.innerHeight > document.querySelector(".person").offsetTop){
        document.querySelector(".person").classList.add("active")

    }
    ourBlogPosts.forEach(element=>{
        if(pageyoffset + window.innerHeight > element.offsetTop){
            element.classList.add("active")

        }
    })

}


function doAnimationAtContactSection(pageyoffset){

    contactSectionElements.forEach(element => {
        if(pageyoffset + window.innerHeight > element.offsetTop){
            element.classList.add("active")
        }
        
    });

}

function startPercentageOfCircle(element,percentage){
    let counter=0
    let rate=0
    percentage=percentage.replace("%","")
    let count=setInterval(function(){
        counter++
        rate=(counter/600)*+percentage


        if(counter >600){
            clearInterval(count)
        }
        else
        {
            element.style.background=`conic-gradient( ${mainColor} ${rate}%, white 0%)`
        }


    },1)

}

function doAnimationNav(pageyoffset){

    if(pageyoffset > 0){
        header.classList.add("active")

    }
    else{
        header.classList.remove("active")
        
    }

}



doProgressInCircle()
function doProgressInCircle(){
    percentageOfCircle.forEach(element => {
        
    });

}

function ShowBrowsingpercentage(pageyoffset){

    let rate=  document.body.offsetHeight - window.innerHeight  
    percentage=pageyoffset/rate
    rateScroll.style.width=`${percentage*100}%`

}


function showBotttonGoToTop(pageyoffset){
    
    if(pageyoffset > window.innerHeight){

        buttonGoToTop.classList.add("active")

    }
    else{
        buttonGoToTop.classList.remove("active")
    }

}

///onclick on the button of go to top
buttonGoToTop.onclick=function(){
    window.scrollTo(0, 0);
}






filter.forEach(li => {
    li.addEventListener("click",function(e){
        addActiveInItemsGallary(e.target.innerHTML)
        hidenNotActive(e.target.innerHTML)
    })
    
});


function hidenNotActive(name){

    imgbox.forEach(element => {

        if(element.classList.contains(name.toLowerCase()) ||name.toLowerCase() === "all" ){
            element.classList.remove("hide")

            element.classList.add("active")

            setTimeout(function(){
                element.classList.remove("active")

            },600)


        }
        else
        {
            element.classList.add("hide")
            element.classList.remove("active")
        }
    });


}


function addActiveInItemsGallary(name){

    filter.forEach(element => {
        if(element.innerHTML === name){
            element.classList.add("active")
            
        }
        else{
            element.classList.remove("active")
        }
    });

}



