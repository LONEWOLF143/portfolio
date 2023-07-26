import React from 'react'

const Navbar = () => {
  return (
   <nav className='relative container mx-auto p-6'>
    <div className='flex items-center justify-between'>
      <div>Logo</div>
      {/* menu item */}
      <div className='hidden sm:block'>
      <ul className="menu menu-horizontal  rounded-box">
       <li><a>Home</a></li>
       <li><a>About</a></li>
       <li><a>Skills</a></li>
      <li><a>Projects</a></li>
      <li><a>Contact</a></li>
      </ul>
      </div>
      {/* mobile menu */}
      <div className="dropdown dropdown-end md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

    </div>

   </nav>
   
  )
}

export default Navbar