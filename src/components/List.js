import React, {useEffect} from 'react';
import Item from './Item';

const List = ({list, fetchList, url, title}) => {

  useEffect(() => {
    fetchList(url);
  }, []);

  return (
    <div>
        <h2 className="my-3 text-center">{title}</h2>
        <div className="movie-container">
        {list.length>0 && list.map((item) => {
            return (
            <Item data={item} key={item.id}/>
            );  
        })}
        </div>
    </div>
  )

}

export default List