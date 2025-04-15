import React, { use } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({bottlePromise ,handleBookmark ,handleMarkAsRead }) => {
    const blogs= use(bottlePromise);

        return (
            <div>
            {
                blogs.map(blog=> <Blog handleMarkAsRead ={handleMarkAsRead } handleBookmark={handleBookmark} blog={blog}></Blog>)
            }
         </div>
    );
};

export default Blogs;