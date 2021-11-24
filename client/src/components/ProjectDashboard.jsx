import axios from 'axios'
import ProjectTable from "./ProjectTable";
import {useEffect, useState} from 'react';


import './ProjectDashboard.scss'
import Chart from "./Chart";


const ProjectDashboard = (props) => {
  const { chartData, projects, createProject } = props
  console.log("PROJECT DASHBOARD", projects)

  


  return ( 
    <div className="project--dashboard">
     { projects && <ProjectTable projects={projects} createProject={ createProject} />}
     { projects && <div className="chart--group">
          <Chart
            title={"Type"}
            colors={[
              '#4D45B5',
              '#EF3C3C',
              '#D6A850'
            ]}
            chartLabels={['Issue', 'Bug', 'Feature Request']}
            chartData={[chartData.Issues, chartData.Bugs, chartData.FeatureRequests]}
          />
          <Chart 
            title={"Priority"}
            colors={[
              '#4D45B5',
              '#EF3C3C',
              '#D6A850',
              '#6AD650'
            ]}
            chartLabels={['Immediate', 'High', 'Medium', 'Low']}
            chartData={[chartData.Immediate, chartData.High, chartData.Medium, chartData.Low]}
          />
          <Chart 
            title={"Status"}
            colors={[
              '#EF3C3C',
              '#4D45B5',
              '#D6A850'
            ]}
            chartLabels={['At Risk', 'On Track', 'New']}
            chartData={[chartData.AtRisk, chartData.OnTrack, chartData.New]}
          />
        </div>}
        
        
        
    </div>
   );
}
 
export default ProjectDashboard;