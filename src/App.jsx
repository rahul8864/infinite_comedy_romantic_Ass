import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "./components/Footer";
import Header from "./components/header";

export default function App() {
  const [api, setApi] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [count, setCount] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [headerName, setHeaderName] = useState('Title');
  useEffect(() => {
    getFetch(count);
  }, [count, setApi]);

  const getFetch = async (value) => {
    await fetch(`/src/api/CONTENTLISTINGPAGE-PAGE${value}.json`)
      .then((res) => res.json())
      .then((res) => {
        setApi(api.concat(res?.page?.["content-items"]?.content));
        setTotalCount(Number(res?.page?.["total-content-items"]));
        setItemCount(res?.page?.["content-items"]?.content?.length + itemCount);
        setHeaderName(res?.page?.title)
      });
  };

  const fetchMoreData = () => {
    console.log("inside fetchmoredate", itemCount);
    if (itemCount < totalCount) {
      setHasMore(true);
      setCount(count + 1);
      return;
    } else {
      setHasMore(false);
    }
  };

  console.log(itemCount);
  console.log("api data", api);
  return (
    <>
      <Header title={headerName} />
      <InfiniteScroll
        dataLength={itemCount}
        next={() => fetchMoreData()}
        hasMore={hasMore}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        loader={<h4>Loading...</h4>}
      >
        <div
          className="container d-flex flex-wrap justify-content-center mb-2"
          style={{ gap: "50px" }}
        >
          {api?.map((item, index) => (
            <div key={index}>
              <img
                className="img-fluid"
                src={
                  `/src/assets/${item?.["poster-image"]}` ||
                  "/src/assets/poster1.jpg"
                }
                alt={item?.["poster-image"]}
                loading="lazy"
              />
              <p className="mt-1 mb-0">{item.name}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
}
