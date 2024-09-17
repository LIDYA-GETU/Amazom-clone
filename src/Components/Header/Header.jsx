import React from 'react'

function Header() {
  return (
    <section>
      <section>
        <div>
          {/* logo */}
          <a href="/">
            <img src='https://pngimg.com/image/61232'alt='amazon logo'/>
          </a>
          <span>
            {/* icon */}
          </span>
          <div>
            <p>delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div>
            {/* search bar */}
            <select name="" id="">
                  <option value="">All</option>
            </select>
            <input type="text"
            name='' id='' placeholder='search product'/>
            {/* icon */}
        </div>
        <div>
            <img src='' alt=''/>

        </div>
      </section>
    </section>
  );
}

export default Header
