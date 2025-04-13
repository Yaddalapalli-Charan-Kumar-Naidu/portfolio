import React from 'react'
import {testimonials} from "../constants"
import TitleHeader from './TitleHeader'
import GlowCard from './GlowCard'
const Testimonials = () => {
  return (
    <div id="testimonials" className='flex-center section-padding'>
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title='What people say about me?' sub="Client feedback highlights"/>
        
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
            {testimonials.map(({imgPath,name,mentions,review})=>(
                <GlowCard card={{review}}>
                <div className="flex items-center gap-3">
                    <div>
                        <img src={imgPath} alt={name} />
                    </div>
                    <div>
                        <p className="font-bold">
                            {name}
                        </p>
                    </div>
                </div>
                </GlowCard>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials