import React from 'react'
import { Element } from 'react-scroll'
import skillImage from"../assets/images (3).jpg"
import LinearProgress from '@material-ui/core/LinearProgress';
import  './SkillContainer.css'

const SkillContainer = () => {
  return (
    <Element className='skillContainer' name="skills">
        <div className='skillIContainer-img'>
            <img src={skillImage} alt=''/>
        </div>
        <div className='skillContainer-text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer-skillSet'>
              <h5>React</h5>
              <div className='skillContainer-slider skillContainer-slider1'>
              <LinearProgress variant='determinate' value={80}/>
              </div>
            </div>
            <div className='skillContainer-skillSet'>
              <h5>Webdesign</h5>
              <div className='skillContainer-slider skillContainer-slider2'>
              <LinearProgress variant='determinate' value={75}/>
              </div>
            </div>
            <div className='skillContainer-skillSet'>
              <h5>Version Contoll</h5>
              <div className='skillContainer-slider skillContainer-slider3'>
              <LinearProgress variant='determinate' value={70}/>
              </div>
            </div>
            <div className='skillContainer-skillSet'>
              <h5>Javascript</h5>
              <div className='skillContainer-slider skillContainer-slider4'>
              <LinearProgress variant='determinate' value={85}/>
              </div>
            </div>
            <div className='skillContainer-skillSet'>
              <h5>Css</h5>
              <div className='skillContainer-slider skillContainer-slider5'>
              <LinearProgress variant='determinate' value={75}/>
              </div>
            </div>
            <div className='skillContainer-skillSet'>
              <h5>Html</h5>
              <div className='skillContainer-slider skillContainer-slider6'>
              <LinearProgress variant='determinate' value={90}/>
              </div>
            </div>
            </div>
    </Element>
  )
}

export default SkillContainer