import React from 'react'
import { LuGithub, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu'

function Header() {
    return (
        <>
            {/* Left side */}
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 min-h-screen">
                {/* Personal info */}
                <span className="grid gap-16">
                    <span>
                        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'><a href='/'>Kian Baban</a></h1>
                        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Front-End Web Developer</h2>
                        <p className='mt-4 max-w-xs leading-normal'>I build accessible, inclusive products and digital experiences for the web.</p>
                    </span>
                  {/* Navigator */}
                    <nav className='nav hidden lg:block'>
                        <ul className="mt-16 w-max">
                            <li>
                                <a className='group flex items-center py-3 active'>
                                    <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                                </a>
                            </li>   
                            <li>
                                <a class="group flex items-center py-3" href="#experience">
                                    <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                                    </a>
                                </li>                            
                                <li>
                                    <a class="group flex items-center py-3" href="#projects">
                                        <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                                    </a>
                                </li>                       
                            </ul>
                    </nav>
                </span>

                {/* Social Media */}
                <ul className='ml-1 mt-8 flex items-center'>
                    <li className='mr-5 text-xs"'>
                        <a href="" className='block hover:text-slate-200'>
                            <LuGithub color='white' size={30}/>
                        </a>
                    </li>
                    <li className='mr-5 text-xs"'>
                        <a href="" className='block hover:text-slate-200'>
                            <LuInstagram color='white' size={30}/>
                        </a>
                    </li>
                    <li className='mr-5 text-xs"'>
                        <a href="" className='block hover:text-slate-200'>
                            <LuLinkedin color='white' size={30}/>
                        </a>
                    </li>
                    <li className='mr-5 text-xs"'>
                        <a href="" className='block hover:text-slate-200'>
                            <LuTwitter color='white' size={30}/>
                        </a>
                    </li>
                </ul>
            </header>
        </>
    )}

export default Header