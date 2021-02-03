import React from 'react'
import styles from './About.module.css'
import GlobalStyles from '../../Assets/global-styles/bootstrap.min.module.css'
import cx from 'classnames'
import GetAppIcon from '@material-ui/icons/GetApp';
export default function About() {
    return (
        <div className={styles.aboutBack} style={{marginTop:'90px'}} id='about'>
         <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 mt-1'>
                        <img style={{width:'150px',margin:'20px 0'}} className='rounded-circle' src="./images/IG_Deep.jpg" alt=""/>
                    </div>
                    <div  className='col-lg-6 offset-2 mt-3' >
                        <h3 style={{color:'white'}} >About me</h3>
                        <p style={{fontSize:'17px'}}>My name is Deepak, I'm a Full Stack ReactJS Developer && Mainframe Developer. Currently I'm working at Infosys Ltd. as a Programmer while also volunteering as a teacher.</p>
                        <div className='row'>
                            <div className='col-4'>
                                <h3 style={{color:'white'}}>Contact</h3> 
                                <p style={{fontSize:'17px'}}>Deepak Bharti</p>
                                <p style={{fontSize:'17px'}}>H.No-358 Sector-4</p>
                                <p style={{fontSize:'17px'}}>Rothak India,124001</p>
                                <p style={{fontSize:'17px'}}>+91 7206724372</p>
                            </div>
                            <div className='col-8'>
                                    <button className={styles.resumeBtn}>Download Resume <GetAppIcon/> </button>
                            </div>
                        </div>
                    </div>        
                </div>
                </div>
        </div>
        
    )
}
