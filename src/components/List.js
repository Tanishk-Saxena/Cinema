import React, {useEffect, useState} from 'react';
import Item from './Item';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';

const Search = ({url, title, actualSearchTerm}) => {

  let navigate=useNavigate();

  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const fetchList = async (api) => {
    const listResponse = await fetch(api);
    const listJSON = await listResponse.json();
    // console.log(listJSON);
    setTotalResults(listJSON.total_results);
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
    if(actualSearchTerm===''){
      navigate("/");
      return;//so that the fetchList statement below doesn't get called and console is clean of any errors
    }
    fetchList(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfiniteScroll
      dataLength={list.length} //This is important field to render the next data
      next={()=>{fetchMore(url, page)}}
      hasMore={list.length<totalResults}
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

export default Search