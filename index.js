let arr = [   {id:1,name:"john",age:"18",profession:"developer"},
                {id:2, name:"jack",age:"20", profession:"developer"},
                {id:3, name:"karen", age:"19",profession:"admin"}
            
            
            ]

          


let autoID = 4;
 


function display(array){
    let tst  = document.getElementById("Display-contain")
    tst.innerHTML = ""      
    for(let i = 0 ; i < array.length ; i++){
 
            let id = array[i].id 
            let name  = array[i].name
            let age =array[i].age
            let profession =array[i].profession
    let box=document.createElement("div");        
    box.innerHTML=`
    <span>${id}.</span>
    <span>Name: ${name}</span>
    <span>Profession: ${profession}</span>
    <span>Age: ${age}</span>`;
    box.className="lala";
    tst.append(box);    



    }

}
display(arr);
   

    // function select(){

    //     let select = document.getElementById("pro");
    //     let val = select.options(select.selectedIndex).value

    //     return val


    // }
   
          
function addInfo(){
    
    // let container  = document.getElementById("Display-contain")
    // let division = document.createElement("div");


    let nametext = document.getElementById("1").value 
    let professiontext =document.getElementById("2").value 
    let agetext = document.getElementById("3").value 
    

    

   let obj = {

      id : autoID,
      name : nametext,
      age : agetext,
      profession : professiontext

   }

   autoID++;
   arr.push(obj);
   display(arr);



}



function filter(){

    let select = document.getElementById("pro")
    let option  = select.options[select.selectedIndex].value

    
    console.log(option) //dev

    if(option !== "developer" &&  option !== "admin" ){
        alert("Select the profession")
        return 
    }

    function filter(option)
    {

        let newArr = [];

        for(let i=0 ; i<arr.length ; i++)
        {

            if(option.toLowerCase() === arr[i].profession.toLowerCase())
            {

                newArr.push(arr[i])

            }

        }
        return newArr
    }
    let newArr = filter(option)

    display(newArr)

    


}