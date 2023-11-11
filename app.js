let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=inp.value;

  let delbtn=document.createElement("button");
  delbtn.innerText="delete";
  delbtn.classList.add("delete");
  item.appendChild(delbtn);

  ul.appendChild(item);
  inp.value="";//reset

})

let delbtns=document.querySelectorAll(".delete");
for(delbtn of delbtns)
{
  //ye event listener existing mehi lgege new me nhi
  delbtn.addEventListener("click",function(){
    console.log("element deleted");
    let par=this.parentElement;
    console.log(par);
    par.remove();

  })
  //agar new me yhi chahiye,use event delegation,using bubbling phenomena
  //jb nye child create hoga  ,to par element k event listener trigger ho jategea



}
//btns me event listener lgane pr new me n lg rha to iske par me lgao
//btn ke par ul uar li
ul.addEventListener("click",function(event){//isse ul aur uske child ko ye property mili
  console.log(event.target);//btata kya click hua
  console.log(event.target.nodeName);//btata div tha y button y list
  //output-BUTTON ,LI ,etc
  // console.log("button clicked");
  if(event.target.nodeName=="BUTTON")
  {
    
    let listItem=event.target.parentElement;//immediate par li na ki ul
    console.log(listItem);
    listItem.remove();
    console.log("deleted");
  }
  else
  console.log("dont delete");
})