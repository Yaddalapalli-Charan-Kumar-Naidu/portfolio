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
    
    
    useGSAP(()=>{
        const projects=[project1Ref.current,project2Ref.current,project3Ref.current];
        projects.forEach((card,index)=>{
            gsap.fromTo(
                card,
                {
                    y:50,
                    opacity:0
                },
                {
                    y:0,
                    opacity:1,
                    duration:1,
                    delay:0.3 *(index+1),
                    scrollTrigger:{
                        trigger:card,
                        start:'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity:1,duration:1.5}
        )
    },[])

  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/project1.png"/>
                    </div>
                    <div className='text-content'>
                        <h2>Devhub – A website for developers to connect</h2>
                        <p className='text-white-50 md:text-xl'>A place for developers to chat and connect with each other.</p>
                    </div>
                </div>
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="project2"/>
                            
                        </div>
                        <h2 className='text-lg'>Resume Craft – Build professional resumes</h2>
                        <p className='text-white-50'>An easy-to-use resume builder to create professional resumes.</p>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/project3.png" alt="project2"/>
                            
                        </div>
                        <h2 className='text-lg'>Booknest – Share and discover book recommendations</h2>
                        <p className='text-white-50 '>A React Native app where users can share and discover book recommendations with others.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection