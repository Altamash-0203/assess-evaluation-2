function createStudentManager()
{
    function addstudent()
    {
     let obj_data={
  
          stu_name:"shaikh",
         sub_mark:
         {
            
            "math":56,
            "science":45,
           " english":67
         }


         }
    
        
       


function updatescore()
{
    obj_data.sub_mark.science=34
    console.log(obj_data.sub_mark)   // updated score
}
updatescore()


function getstudent(name)
{
   if(name=obj_data.stu_name)
   {
    console.log(name,"have scored marks--->",obj_data.sub_mark)
   }
   else{
    console.log("student not found")
   }
}
getstudent("shaikh")


function newsub(sub_name,marks)
{
    obj_data.sub_mark
    console.log(obj_data.sub_mark)
}
newsub("history",67)  // new subect


function calculation()
{
 let   sum=0
 let totsub=3
    for(key in obj_data.sub_mark)
    {
         sum+= obj_data.sub_mark[key]
    }
    let avg=sum/totsub
    console.log("average of student is--->",avg.toFixed(2))

}
calculation()


}   

addstudent()

}
createStudentManager()



