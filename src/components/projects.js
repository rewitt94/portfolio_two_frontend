import React from 'react';
import ReactDOM from 'react-dom';
import { Bottom } from './navbars.js'

export class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="project_box">
          <div className="project_page_header">
            <h1>Here are a selection of <span>my coding projects</span>.</h1>
            <hr></hr>
          </div>
          <div className="project_row">
            <div className="project_title">
              <h1><span>Portfolio v2</span></h1>
            </div>
            <div className="project_description">
              <p>
              This is the website that you are currently visiting.
              Click <span>here</span> to view the back-end express server and click <span>here</span> to view the front-end React app.
              The website is compatible with mobile (it is compatible with varied screen sizes).</p>
            </div>
          </div>
          <div style={{flexDirection: 'row-reverse'}} className="project_row">
            <div className="project_title">
              <h1><span>Submarine Game</span></h1>
              <button>Play now</button>
            </div>
            <div className="project_description">
              <p>This was my first real programming acheivement.
              It is a game developed using entirely Javascript, HTML and CSS.
              The code is sloppy (very amateur) and not optimized.
              However, at the time I was completely thrilled with the result.
              Have a play!
              <br/><br/>N.B. The play button opens a new tab I as it is not integrated into the React App.
              This game will not work on mobile.</p>
            </div>
          </div>
          <div className="project_row">
            <div className="project_title">
              <h1><span>Portfolio v1</span></h1>
            </div>
            <div className="project_description">
              <p>This is a my original website.
              A back-end express serves up different html files.
              It is offline because the current website is vastly superior, but you can view the code <span>here</span>.
              I have included this project to see the progression from my first website to the second.</p>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    )
  }
}