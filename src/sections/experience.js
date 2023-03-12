import React from "react";
import "./experience.scss";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'; 
import 'react-vertical-timeline-component/style.min.css';
import cognizant from '../../assets/images/cognizant-logo.jpg';
import accenture from '../../assets/images/accenture.jpg';
import db from '../../assets/images/db.jpg';
import vmware from '../../assets/images/vmware.jpg';

export const Experience = () => {
  return (
    <React.Fragment>
        <h1 style={{textAlign: 'center', color: 'rgb(139, 111, 216)', marginTop: 20, marginBottom: 20 }}>Work Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#59125b", color: "rgb(139, 111, 216)", boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)' }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(139, 111, 216)" }}
          date="2022 - present"
          dateClassName="itemDate"
          iconStyle={{ background: "#6e1870", boxShadow: '0 0 0 4px rgb(139, 111, 216), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
          icon={<img src={vmware} alt="VMWare" width= '100%' style={{marginTop: '10%'}} />}
        >
          <h3 className="vertical-timeline-element-title">Member Of Technical Staff - III</h3>
          <h4 className="vertical-timeline-element-subtitle">VMWare</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#59125b", color: "rgb(139, 111, 216)", boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)' }}
          date="2019 - 2022"
          dateClassName="itemDate"
          iconStyle={{ background: "#6e1870", textAlign: 'center', boxShadow: '0 0 0 4px rgb(139, 111, 216), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
          icon={<img src={db} alt="DB" width= '80%' style={{marginTop: '15%'}} />}
        >
          <h3 className="vertical-timeline-element-title">Assitant Vice President</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Deutsche Bank
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#59125b", color: "rgb(139, 111, 216)", boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)' }}
          date="2017 - 2019"
          dateClassName="itemDate"
          iconStyle={{ background: "#6e1870", textAlign: 'center', boxShadow: '0 0 0 4px rgb(139, 111, 216), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
          icon={<img src={accenture} alt="Accenture"  width= '90%' style={{marginTop: '20%'}} />}
        >
          <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Accenture
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#59125b", color: "rgb(139, 111, 216)", boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)' }}
          date="2013 - 2017"
          dateClassName="itemDate"
          iconStyle={{ background: "#6e1870", textAlign: 'center', boxShadow: '0 0 0 4px rgb(139, 111, 216), inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)' }}
          icon={<img src={cognizant} alt="Cognizant" width= '90%' style={{marginTop: '10%'}} />}
        >
          <h3 className="vertical-timeline-element-title">Associate</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Cognizant
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </React.Fragment>
  );
};
