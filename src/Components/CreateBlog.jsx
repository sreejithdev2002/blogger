import React from 'react';
import '../Styles/global.css';

function CreateBlog() {
  return (
    <main className='createBlog'>
      <input type="text" placeholder='Enter the heading'/>
      <textarea name="" id="" placeholder='Enter your content'></textarea>
      <input type="file" name="" id="" />
      <button>Submit</button>
    </main>
  )
}

export default CreateBlog
