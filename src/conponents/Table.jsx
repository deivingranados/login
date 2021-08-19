import React from 'react';
import MaterialTable from "material-table"
import axios from 'axios';
import { useEffect,useState } from "react";



function TableAproved(props) {
    const { history } = props;
    const [list, setList] = useState([]);

    const columns = [
        { title: 'ATLETA', field: 'athlete' },
        { title: 'EDAD', field: 'age' },
        { title: 'PAIS', field: 'country' },
        { title: 'AÑO', field: 'titulo' },
        { title: 'FECHA', field: 'date' },
        { title: 'DEPORTE', field: 'sport' },
        { title: 'ORO', field: 'gold' },
        { title: 'PLATA', field: 'silver' },
        { title: 'BRONCE', field: 'bronze' },
        { title: 'TOTAL', field: 'total' },
    ]
    
    useEffect (()=>{
        axios.get(`https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json`)
          .then(res => {
            const persons = res.data;
            setList(persons);
          })
      })

      const goDetailsAprobados = () =>{
          history.push("/" )
    }


    

    return (
       <div className="contentTabla">
        <MaterialTable
            title="Aprobaciones"
            columns={columns}
            data={list}
            options={{
                actionsColumnIndex: -1, 
                exportButton: true,
                pageSize: 7,
                pageSizeOptions: [5, 10, 20, 30, 50, 75, 100],
            }}
            

        />
       </div>
    )
}

export default TableAproved;