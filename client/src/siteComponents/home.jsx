import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="xl-hidden">
        <div className="xl:hidden grid justify-center">
          <div className="mt-8 w-[90%] h-[390px] bg-[url('https://images.unsplash.com/photo-1535850836387-0f9dfce30846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGZsb3dlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')] object-fill">
            <div className="mt-9 grid justify-center ml-10">
              <p className="ml-5 text-2xl text-green-500">REST IN ETERNAL PEACE</p>
              {/*<p className='ml-9 mb-5 text-2xl text-green-500'> MAMA BRANDON</p>*/}
              <p className="text-3xl text-blue-900 font-extrabold">
                With deepest sympathy
              </p>
              <p className="mb-24 ml-12 text-3xl text-blue-900 font-extrabold">
                as we part ways.
              </p>
              <p className="mt-7 text-xl text-blue-900 text-center font-medium">
                You had the heart that cared completely. You had the smile that
                brought so much pleasure. You had the love that brought joy
                beyond measure.
              </p>
            </div>
          </div>
          <div className="mt-7 grid justify-center">
            <p className="text-3xl text-blue-900 font-extrabold ">Psalms 51:10</p>
            <button className="bg-green-500 rounded-2xl p-2 mt-7"><Link to='/contribute'>CONTRIBUTE</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
