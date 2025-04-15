import React from 'react';

const Blog = ({blog, handleBookmark ,handleMarkAsRead }) => {
    // console.log(blog)
    return (
        <div className='border-2 m-5 border-blue-300 bg-gray-300 rounded-xl'>
           
            <p className="font-extrabold uppercase text-3xl m-5  "> {blog.brand}</p>
            <p><span className='text-orange-400'>SUMMER HOT OFFER :</span> {blog.offer}</p>
            <p>Price : {blog.price}</p>
            <p> Material : {blog.material}</p>
            <button onClick={()=> handleBookmark(blog)}  className='btn m-5'> bookmarked</button>
            <button onClick={()=> handleMarkAsRead (blog.price , blog.id)} className='btn btn-primary'>mark as read</button>
           <button className={blog.available ? "m-5 btn btn-primary" : "m-5"} > {blog.available ? "Buy Now" : " Stock Out"}</button>
        </div>
    );
};

export default Blog;