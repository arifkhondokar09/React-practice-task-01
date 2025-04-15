

import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'


const bottleFetch= fetch("file.json").then (res=> res.json());

function App() {
  const[bookmarks , setBookmark]= useState([]);
  const [time, setTime]= useState(0)
 

  function handleBookmark (data){
  
    const newBookmark= [...bookmarks,data];
    setBookmark(newBookmark);

  }

const handleMarkAsRead = (price, id)=> {
 const newTime=  time + price;
 setTime(newTime)
 handleRemoveTimeAndBookmark(id)

}

   function handleRemoveTimeAndBookmark(id){
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id)
   
   setBookmark(remainingBookmarks)
  
  }


  return (
    <>
    
   <Navbar></Navbar>
 
   <div className='flex gap-5 m-5 ' >
            <div className=" text-center text-xl font-medium w-4/6 border bg-gray-100  rounded-xl p-10" >

                <h1 className='text-4xl font-semibold text-center'>Blogs :</h1>

                <Blogs handleMarkAsRead = {handleMarkAsRead } handleBookmark={handleBookmark} bottlePromise={bottleFetch}></Blogs>


            </div>
            <div className="text-xl font-semibold rounded-xl bg-gray-200 text-center w-2/6 border p-10" >
                <h3>reading time (blog.price): {time}</h3>

                <h3> bookmarked blog (blog.offer ):{bookmarks.length} </h3>
                <div>
                  
                    {
                      bookmarks.map(bookmark =>  <h6 className='border border-blue-400 m-3 bg-gray-300 p-4 rounded-lg'> {bookmark.offer}</h6>)
                    }
                 
                </div>
            </div>
        </div>

    </>
  )
}

export default App
