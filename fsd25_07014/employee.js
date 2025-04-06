function employee(employees,threshold)

{
    let data=employees
  let filtered=employees.filter((sal)=>sal.salary>threshold)

//   console.log(filtered)

  let maped=filtered.map((newsal)=>(newsal.salary)+(newsal.salary*10)/100)
//   console.log(maped)

let sorted=filtered.sort((a,b)=>b.experience-a.experience)
console.log(sorted)    
    
    
    
    
}




employee([
    { id: 1, name: "Alice", salary: 50000, experience: 3, department: "Engineering" },
    { id: 2, name: "Bob", salary: 75000, experience: 5, department: "Sales" },
    { id: 3, name: "Charlie", salary: 60000, experience: 2, department: "Marketing" },
    { id: 4, name: "Dave", salary: 45000, experience: 1, department: "Engineering" },
    { id: 5, name: "Eve", salary: 85000, experience: 7, department: "Engineering" }
  ],55000)