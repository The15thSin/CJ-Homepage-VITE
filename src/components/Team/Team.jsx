import React from 'react'
import './Team.css'

export default function Team() {

    const teamArray = [
        {
            key: 1,
            name: "Ayush Jalan",
            role: "Web Dev",
            domains: ["react", "html", "css", "js", "c++", "python"],
            desc: "lorem ipsum abkgiv tvk y fvu gilubtibltlib tvgbtl iutb ku vu jyfvku ufyku."
        },
        {
            key: 2,
            name: "Dona Murmu",
            
        }
    ] 

  return (
    <div className='Team'>
        <div className="team-title">
            <h1>Meet our Team</h1>
        </div>

        <div className="team-members">

        </div>
    </div>
  )
}
