import React from 'react'

const Projects = () => {
  return (
    <>
       <div className="homepage" id="projects">
        <h1>PROJECTS</h1>
        <p>These are some of my projects  consisting of Web applications, Graphics designs and User interface of an applications.</p>
        <div className="proj1 flex flex-row justify-between">
            <div className="sk1"><h5>E-commance Website</h5> 
            <div>This a an E-commance site built with nextjs, taiwind , reactjs and postgres</div></div>
            <div className="sk1"><h5>pdf-converter</h5>
               <div>This is a pdf file converter. it converts files to pdf and from pdf to others. It was built with reactjs, tailwind, css and mongodb to save the file</div> </div>
            <div className="sk1 text-black"><h5>food-del</h5> 
              <div>This is a food delivery site where you can order food online and it would be delivered to you. It was built with reactjs, tailwind, css, rest api and mongodb</div> </div>
        </div>
    </div>
    </>
  )
}

export default Projects
