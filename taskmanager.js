function tasks() {
  function list() {
    function addtask(id, title,status = false,) {
      let data = [
         id,title,status
      ];
      function getalltask() {
        console.log(JSON.stringify(data));  // use of json stringify 

        
      }


      getalltask();
      if(data[0]==91)
      {
        data[1]=true  
      }
      console.log(data)// updated to true


      function removetask(id_r)
      {
       if(data[0]==id_r){
        // data.pop()
        // console.log(data)  // removed task 
       }
       
      }
      removetask(91)


    function getpending()
    {
        let pendingtask=data.filter((ele)=>data[2].ele==false)
        console.log(pendingtask)
    }
    getpending()


    function gettitle()
{
  let get_t=data.map((title)=>data[2]==true)
  console.log(get_t)
}
gettitle()
    }
    addtask(76,"x", true);
    addtask(90,"y");
    addtask(91,"z");
   
  }
  

  list();
}
tasks();
