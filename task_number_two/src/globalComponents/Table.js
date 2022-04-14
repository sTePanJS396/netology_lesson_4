import React from 'react'
import TableLine from './elementComponents/TableLine'

const Table = ({ data, remove, change }) => {
  return (
    <table className="table-block">
        <thead>
            <tr>
                <th>Дата (ДД.ММ.ГГГГ)</th>
                <th>Пройдено км</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            {data.map(el => <TableLine key={el.id} date={el.date} distance={el.distance} onEdit={change} onRemove={remove} id={el.id}/>)}
        </tbody>
    </table>
  )
}

export default Table