import React, {useState} from 'react';
import {Grid} from "@mui/material";
import profile from '../profile.png'
import './header.css';
import {FaReact} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io5";
import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {MdOutlineWavingHand} from "react-icons/md";
import {WiAlien} from "react-icons/wi";
import {CiLinkedin} from "react-icons/ci";

export default function Header() {
    const [hovered, setHovered] = useState(false);

    return (
        <Grid container spacing={{xs: 4, sm: 4, md: 5, lg: 6, xl: 6}}
              sx={{
                  padding: {xs: 6, sm: 6, md: 6, lg: 20, xl: 20},
                  paddingBottom: {xs: 2, sm: 2, md: 2, lg: 2, xl: 2},
                  paddingTop: {xs: 3, sm: 6, md: 6, lg: 6, xl: 6}
              }}
              justifyContent="flex-end"
              alignItems="flex-start"
        >
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <div className={`header_profile ${hovered ? 'hovered' : ''}`}
                     onMouseEnter={() => setHovered(true)}
                     onMouseLeave={() => setHovered(false)}
                >
                    <img src={profile} alt={'profile'} className={`image ${hovered ? 'hidden' : ''}`}/>
                    <div className={`overlay ${hovered ? 'visible' : ''}`}>
                        <div className="text">
                            <p>
                                Explore my portfolio
                                <WiAlien/>
                            </p>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={8} sx={{textAlign: 'left'}}>
                <div className="header_icons" style={{textAlign: 'right'}}>
                    <FaReact className="icon1"/>
                    <IoLogoJavascript className="icon2"/>
                    <FaHtml5 className="icon3"/>
                    <FaCss3Alt className="icon4"/>
                </div>
                <div className="header_content">
                    <h1>
                        Hello, there!
                        <span style={{color: '#575075', fontSize: '1.4rem'}}> <MdOutlineWavingHand/></span>
                    </h1>
                    <h2>
                        Aleksandra Gałat
                        <a href={"https://www.linkedin.com/in/aleksandra-ga%C5%82at-226257197/"}
                           style={{margin: '3px', fontSize: '1.5rem', color: '#C6C6C6'}}>
                            <CiLinkedin/>
                        </a>
                    </h2>
                    <p>
                        FRONTEND DEVELOPER
                    </p>
                    <h3>
                        <span>&lt;h4&gt; </span>
                            Projects
                        <span> &lt;/h4&gt;</span>
                    </h3>
                </div>
            </Grid>
        </Grid>
    );
};