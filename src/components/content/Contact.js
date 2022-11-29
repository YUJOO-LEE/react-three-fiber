import React from 'react'

function Contact() {
  return (
    <div className='inner contact'>
      <h2>Contact</h2>
      <form action="#">
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </li>
          <li>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" required/>
          </li>
          <li>
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" cols="30" rows="5" required></textarea>
          </li>
          <li className='btns'>
            <input type="reset" value="RESET" />
            <input type="submit" value="SEND" />
          </li>
        </ul>
      </form>
    </div>
  )
}

export default Contact