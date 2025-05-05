
function SubmitFun(){

    let sname=document.getElementById('name').value
    let age=document.getElementById('age').value
    let mail=document.getElementById('mail').value
    let course=document.getElementById('course').value
    let gender=document.getElementById('gender').value
    let pic=document.getElementById('pic').value
    
    if(sname==""||age==""||mail==""||course==""||gender==""||pic==""){
        alert("all feilds are required")
        return
    }
    
    let obj={
        "name":sname,
        "age":age,
        "mail":mail,
        "course":course,
        "gender":gender,
        "pic":pic
    }
    
    let stu_data=JSON.stringify(obj)
    // console.log(stu_data)
    
    localStorage.setItem("sdata",stu_data)
    }
    
    
    
    
    function displayData()
    {
        
    let getdata=localStorage.getItem("sdata")
    
    let loc_data=JSON.parse(getdata)
    // console.log(loc_data)
    
    // data display
    
    let display=document.getElementById('data')
    
    let student=document.createElement("div")
    
    student.innerHTML=`
     <table border="">
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>mail</th>
                    <th>course</th>
                    <th>gender</th>
                    <th>pic</th>
                </tr>
                <tr>
                    <td>${loc_data.name}</td>
                    <td>${loc_data.age}</td>
                    <td>${loc_data.mail}</td>
                    <td>${loc_data.course}</td>
                    <td>${loc_data.gender}</td>
                    <td>${loc_data.pic}</td>
                </tr>
             </table>
    `
    display.appendChild(student)
    }
    // SubmitFun()