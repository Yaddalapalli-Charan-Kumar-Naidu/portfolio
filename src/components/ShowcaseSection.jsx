import React, { useRef } from 'react'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef=useRef(null);
    const project1Ref=useRef(null);
    const project2Ref=useRef(null);
    const project3Ref=useRef(null);
    
    useGSAP(() => {
        // ... existing animation code ...
    }, []);

    const LinkIcon = ({ children }) => (
        <span className="text-white-50 hover:text-white transition-colors flex items-center gap-2">
            {children}
        </span>
    );

    return (
        <section ref={sectionRef} id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* Project 1 */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="Devhub project"/>
                        </div>
                        <div className='text-content'>
                            <h2>Devhub – A website for developers to connect</h2>
                            <p className='text-white-50 md:text-xl'>A place for developers to chat and connect with each other.</p>
                            <div className="flex gap-6 mt-6">
                                <a href="https://github.com/Yaddalapalli-Charan-Kumar-Naidu/DevHub_Backend" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                    </svg>
                                    <span className="text-lg">GitHub</span>
                                </a>
                                <a href="https://devhubdemo.com" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                        <polyline points="15 3 21 3 21 9"/>
                                        <line x1="10" y1="14" x2="21" y2="3"/>
                                    </svg>
                                    <span className="text-lg">Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 & 3 */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/images/project2.png" alt="Resume Craft project"/>
                            </div>
                            <h2 className='text-lg'>Resume Craft – Build professional resumes</h2>
                            <p className='text-white-50'>An easy-to-use resume builder to create professional resumes.</p>
                            <div className="flex gap-4 mt-4">
                                <a href="https://github.com/Yaddalapalli-Charan-Kumar-Naidu/ResumeCraft_backend" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="flex items-center gap-1.5 text-sm hover:opacity-80">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                    </svg>
                                    Source
                                </a>
                                <a href="https://resume-craft-frontend-three.vercel.app/" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="flex items-center gap-1.5 text-sm hover:opacity-80">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                        <polyline points="15 3 21 3 21 9"/>
                                        <line x1="10" y1="14" x2="21" y2="3"/>
                                    </svg>
                                    Demo
                                </a>
                            </div>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/images/project3.png" alt="Booknest project"/>
                            </div>
                            <h2 className='text-lg'>Booknest – Share and discover book recommendations</h2>
                            <p className='text-white-50'>A React Native app where users can share and discover book recommendations with others.</p>
                            <div className="flex gap-4 mt-4">
                                <a href="https://github.com/Yaddalapalli-Charan-Kumar-Naidu/BookNest" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="flex items-center gap-1.5 text-sm hover:opacity-80">
                                    {/* GitHub icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                                    </svg>
                                    Code
                                </a>
                                <a href="https://booknest.app" 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="flex items-center gap-1.5 text-sm hover:opacity-80">
                                    {/* External link icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                        <polyline points="15 3 21 3 21 9"/>
                                        <line x1="10" y1="14" x2="21" y2="3"/>
                                    </svg>
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection