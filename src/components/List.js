import React, {useEffect, useState} from 'react';
import Item from './Item';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

const List = ({url, title}) => {

  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);

  const fetchList = async (api) => {
    const listResponse = await fetch(api);
    const listJSON = await listResponse.json();
    console.log(listJSON);
    setList(listJSON.results);
  }

  const fetchMore = async (api, page) => {
    const listResponse = await fetch(api + `&page=${page+1}`);
    setPage(page+1);
    const listJSON = await listResponse.json();
    console.log(listJSON);
    setList(list.concat(listJSON.results));
  }

  useEffect(() => {
    fetchList(url);
  }, []);

  return (
    <InfiniteScroll
      dataLength={list.length} //This is important field to render the next data
      next={()=>{fetchMore(url, page)}}
      hasMore={true}
      loader={<Spinner/>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
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
    </InfiniteScroll>
  )

}

export default List