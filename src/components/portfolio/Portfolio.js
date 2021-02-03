import React from 'react';
import styles from  './Portfolio.module.css';
import cx from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import GlobalStyles from '../../Assets/global-styles/bootstrap.min.module.css'
import {Link} from 'react-scroll';

export default function Portfolio() {
    return (
        <div style={{marginBottom:'143px'}} id='home'>
            <img className={styles.back} src="./images/background.jpg" alt=""/>
            <div className={cx(GlobalStyles['text-center'],styles.intro,GlobalStyles.container)}>
                <h1 className={styles.head}>I'm Deepak Bharti</h1>
                <p>I'm a Rohtak Based <span>MERN Stack Developer && Voluenteering As a Teacher.</span></p>
                <p>System Enginner at Infosys Ltd. && Teacher by Evening.</p>
                <div >
                    <a className={styles.mylink} href="https://www.linkedin.com/in/deepak-bharti-94947999/" > <LinkedInIcon style={{width:'40px',height:'40px',margin:'0 8px'}} /></a>
                    <a className={styles.mylink} href="https://www.instagram.com/dkbharti.0404/"> <InstagramIcon style={{width:'40px',height:'40px',margin:'0 8px'}}/></a>
                    <a className={styles.mylink} href="https://www.facebook.com/deepak.bharti.526/"><FacebookIcon style={{width:'40px',height:'40px',margin:'0 8px'}}/></a>
                    <a className={styles.mylink} href="https://github.com/Dkbharti/"> <GitHubIcon style={{width:'40px',height:'40px',margin:'0 8px'}} /></a>
                </div>
                
            </div>
            <div className={cx(GlobalStyles['text-center'])}>
            <Link smooth={true} to="about" className={styles.mylink} href=""><ExpandMoreIcon style={{width:'100px',height:'100px'}}/></Link>
            </div>
        </div>
    )
}
