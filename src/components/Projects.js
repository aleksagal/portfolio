import React from "react";
import {Grid} from "@mui/material";
import Project from "./Project";
import EmptyProject from "./EmptyProject";
import {FaReact} from "react-icons/fa";

export default function Projects() {
    return (
        <Grid container spacing={{xs: 4, sm: 4, md: 5, lg: 6, xl: 6}}
              alignItems="stretch"
              justifyContent="flex-start"
              sx={{
                  padding: {xs: 6, sm: 6, md: 6, lg: 20, xl: 20},
                  paddingTop: {xs: 4, sm: 4, md: 4, lg: 4, xl: 4},
                  paddingBottom: {xs: 3, sm: 6, md: 6, lg: 6, xl: 6}
              }}
        >
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <div className="project">
                    <Project
                        name="SayHi"
                        description="Web application for social networking emphasis on groups."
                        icon={<FaReact/>}
                        technology="React"
                        link="https://github.com/aleksagal/say-hi"
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}
                  sx={{display: 'flex', flexDirection: 'column'}}>
                <div className="project" style={{flex: 1}}>
                    <Project
                        name="Portfolio"
                        description="Web page for discover a showcase of projects."
                        icon={<FaReact/>}
                        technology="React"
                        link="https://github.com/aleksagal/portfolio"
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}
                  sx={{display: 'flex', flexDirection: 'column'}}>
                <div className="project" style={{flex: 1}}>
                    <EmptyProject/>
                </div>
            </Grid>
        </Grid>
    );
};