import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="section skills qualification__section" id="skills">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Personal Journey</span>
    
    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div onClick={() => toggleTab(2)} className={ toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
              <i onClick={() => toggleTab(2)} className={ toggleState === 2 ? "uil uil-briefcase-alt qualification__icon" : "uil uil-briefcase-alt qualification__icon wave"}></i> Experience
            </div>

            <div onClick={() => toggleTab(1)} className={ toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}>
              <i onClick={() => toggleTab(1)} className={ toggleState === 2 ? "uil uil-graduation-cap qualification__icon wave" : "uil uil-graduation-cap qualification__icon"}></i> Education
            </div>
        </div>

        <div className="qualifications__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content__active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Free Lancer</h3>
                <span className="qualification__subtitle">FrontEnd Developer</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2024 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bechalor in Computer Applications</h3>
                <span className="qualification__subtitle">University Of Lucknow</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2021 - 2024</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Inter School</h3>
                <span className="qualification__subtitle">Rani Laxmi Bai School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2019 - 2020</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">Rani Laxmi Bai School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2017 - 2018</i>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content__active" : "qualification__content"}>
          <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">FreeLancer</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2024 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Python Developer</h3>
                <span className="qualification__subtitle">FreeLancer</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2024 - Present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">UI/UX Designer</h3>
                <span className="qualification__subtitle">FreeLancer</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2023 - 2024</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Coding Teacher</h3>
                <span className="qualification__subtitle">Java, C++</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2023 - 2024</i>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Qualification