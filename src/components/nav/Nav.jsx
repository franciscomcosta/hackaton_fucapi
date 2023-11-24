import { useState } from 'react'
import Logo from '../../assets/logo.png'

const Nav = () => {

    let Links =[
      {name:"Início",link:"/"},
      {name:"Jornada",link:"/Map"},
      {name:"Contatos",link:"/contatos"},
      {name:"Sobre",link:"/sobre"},
    ];

    let [open,setOpen]=useState(false);

  return (
    <div className='shadow-md w-full top-0 left-0'>
      <div className='md:flex items-center justify-between bg-stone-900 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center 
      text-white'>
        <span className='text-3xl text-white mr-1 pt-2'>
        <img src={Logo} className='w-40 ' />
        </span>
        <a className='text-white hover:text-gray-400 duration-500'>Sistema de aplicação básica em Educação</a>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-stone-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }

      </ul>
      </div>
    </div>
  )
}


export default Nav;