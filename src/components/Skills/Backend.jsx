import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">BackEnd Developer</h3>

        <div className="skills_box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skill__name">Python</h3>
                        <span className="skills__level">Intermidiate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skill__name">MySQL</h3>
                        <span className="skills__level">Intermidiate</span>
                    </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skill__name">Node Js</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    
                    <div>
                        <h3 className="skill__name">PHP</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend