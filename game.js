const obj=document.querySelectorAll('.a');
let flag=true;
let arr=[[-1,2,3],[4,5,6],[7,8,9]];
// obj.addEventListener('click',()=>
// {
    
//     const ch=document.createElement('span');
//     ch.classList.add('ax');
//     ch.innerText="x";
//     obj.appendChild(ch);
// },{once: true})
for(let box of obj)
{
        box.addEventListener('click',change,{once:true});    
}
function alldone(a,b,c,x)
{
    document.getElementById(a).style.backgroundColor=`#0a58ca`;
    document.getElementById(b).style.backgroundColor=`#0a58ca`;
    document.getElementById(c).style.backgroundColor=`#0a58ca`;
    document.querySelector(".my").classList.add("with");
    const win=document.createElement("div");
    if(x===0)
    win.innerText="'O' Won the Game";
    else
    win.innerText="X Won the Game";
    win.classList.add("winner");
    const btton=document.createElement("button");
    btton.innerText="Replay"
    win.append(btton);
   const ap=document.querySelector(".my");
    ap.append(win);
}

function change()
{
    const ch=document.createElement('span');
    ch.classList.add("ax");
    if(flag===true)
    {
        ch.innerText="O";
        const ind=this.id;
        arr[parseInt(ind[0])][parseInt(ind[1])]=0;
    }
    else
    {
        ch.innerText="X";
        const ind=this.id;
        arr[parseInt(ind[0])][parseInt(ind[1])]=1;
    }
    this.appendChild(ch);
    if(arr[0][0]===arr[1][1] && arr[1][1]==arr[2][2])
    {
            alldone("00","11","22",arr[0][0]);
        
    }
    else if(arr[0][0]===arr[1][0] && arr[1][0]===arr[2][0])
    {
        alldone("00","10","20",arr[0][0]);
    }
    else if(arr[0][0]===arr[0][1] && arr[0][1]===arr[0][2])
    {
         alldone("00","01","02",arr[0][0]);
    }
    else if(arr[1][0]===arr[1][1] && arr[1][1]===arr[1][2])
    {
         alldone("10","11","12",arr[1][0]);
    }
    else if(arr[2][0]===arr[2][1] && arr[2][1]===arr[2][2])
    {
         alldone("20","21","22",arr[2][0]);
    }
    else if(arr[0][1]===arr[1][1] && arr[1][1]===arr[2][1])
    {
         alldone("01","11","21",arr[0][1]);
    }
    else if(arr[0][2]===arr[1][2] && arr[1][2]===arr[2][2])
    {
         alldone("02","12","22",arr[0][2]);
     }
     else if(arr[0][2]===arr[1][1] && arr[1][1]===arr[2][0])
     {
        alldone("02","11","20",arr[0][2]);
     }
    else
    flag=!flag;
}