import { Label } from '@material-ui/icons';
import React from 'react';
import {Bar} from 'react-chartjs-2';
import {useState} from 'react'
export default function Resume() {
    const [chartdata, setChartData]=useState({labels:["HTML5","CSS","FIGMA","MONGO DB" ,"NODE & EXPRESS","REACT JS","MAINFRAME"],
    datasets:[
        {
            label:'SKILL ',
            data:[85, 85,65, 90, 80, 90,75],
            backgroundColor:['#1A414F','#1A414F','#1A414F','#1A414F','#1A414F','#1A414F','#1A414F'],
        }
    ]})
    const[chartOptions,setChartoptions] = useState({
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    stepSize:20
                }
            }]
        }
    })

    return (
        <div id='resume'style={{margin:'100px'}}>
           <div  className='container'>
               <div style={{borderBottom:'rgba(62,122,147,0.3) 1px solid',marginBottom:'50px'}} className='row'>
                    <div className='col-3'>
                            <h4 style={{borderBottom:'rgba(71,129,152, 0.7) 3px solid'}}>SCHOOLING</h4>
                    </div>
                    <div className='offset-1'>
                            <h4>Kendriya Vidyalaya, Rohtak</h4>
                            <p style={{fontSize:'18px',fontStyle:'italic'}}>Passed Class 12th •May 2014</p>
                    </div>
               </div>
           </div>
           <div className='container'>
               <div style={{borderBottom:'rgba(62,122,147,0.3) 1px solid',marginBottom:'50px'}} className='row'>
                    <div className='col-3'>
                            <h4 style={{borderBottom:'rgba(71,129,152, 0.7) 3px solid'}}>EDUCATION</h4>
                    </div>
                    <div className='offset-1'>
                            <h4>Maharshi Dayanand University Rohtak</h4>
                            <p style={{fontSize:'18px',fontStyle:'italic'}}>Bachelor in Electronics And Communication Engg. •May 2019</p>
                            <p style={{fontSize:'16px'}}>Scored 70 Percentile</p>
                    </div>
               </div>
           </div>
           <div className='container'>
               <div style={{borderBottom:'rgba(62,122,147,0.3) 1px solid',marginBottom:'50px'}} className='row'>
                    <div className='col-3'>
                            <h4 style={{borderBottom:'rgba(71,129,152, 0.7) 3px solid'}}>WORK</h4>
                    </div>
                    <div className='offset-1'>
                            <h4>Infosys Ltd.</h4>
                            <p style={{fontSize:'18px',fontStyle:'italic'}}>Software Engineer •Jan 2020- Present</p>
                            <p style={{fontSize:'16px'}}>MERN Stack Developer And Mainframe Developer</p>
                            <h4>Gandhi School</h4>
                            <p style={{fontSize:'18px',fontStyle:'italic'}}>Volunteered as Teacher •July 2018-Dec2019</p>
                            
                    </div>
               </div>
           </div>
           <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                    <h4 style={{borderBottom:'rgba(71,129,152, 0.7) 3px solid'}}>SKILLS</h4>
                    </div>
                    <div className='col-8 offset-1'  >
                    <Bar style={{width:'auto'}}
                                 data={chartdata}
                                 options={chartOptions}
                                    
                    />
                    </div>
                </div>
                
           </div>
        </div>
    )
}
