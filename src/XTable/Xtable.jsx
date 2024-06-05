import React, { useState } from 'react'
const data = [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]
const Xtable = () => {
    const[tableData, setTableData] = useState(data)
    

const sortByDate = () =>{
        // debugger
    let deepCopy = [...tableData]
    let sortedData = deepCopy.sort((a,b) =>{
        if((new Date(b.date).getTime() -  new Date(a.date).getTime()) === 0){
          return  b.views - a.views
        }else{
          return  new Date(b.date).getTime() -  new Date(a.date).getTime();
        }
    } )
    setTableData(sortedData)
}
const sortByView = () =>{
    let deepCopy = [...tableData]
    let sortedData = deepCopy.sort((a,b) =>{
        if((b.views - a.views) === 0){
            return  new Date(b.date).getTime() -  new Date(a.date).getTime(); 
        }else{
            return  b.views - a.views 
        }
    })
    setTableData(sortedData)
}

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByView}>Sort by Views</button>

      <table>
        <thead>
            
              <tr>  
                <th>Date</th>
                <th>Views</th>
                <th>Article</th>
            </tr>
        </thead>
        <tbody>
                {tableData.map(item=>{
        return(
            <tr>

           <td> {item.date}</td>
           <td> {item.views}</td>
           <td> {item.article}</td>
            </tr>

        )
      })}
        </tbody>
      </table>
      
    </div>
  )
}

export default Xtable
