import React from 'react';
import ReactDOM from 'react-dom/client';
import srLogo from './sr-logo.jpeg'

// // const heading=React.createElement('h1',{id:'heading'},'Hello World from React')
const root=ReactDOM.createRoot(document.getElementById('root'))
// // // root.render(heading)
    
// // const parent=React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child'},[React.createElement('h1',{},'iam h1 tag'),React.createElement('h2',{},'iam h2 tag')]),React.createElement('div',{id:'child2'},[React.createElement('h1',{},'iam h1 tag'),React.createElement('h2',{},'iam h2 tag')])])
// const Title=()=><h1 className='heading'>Hello world from react</h1>
// const head=<h2>Iam React Elelemnt including in jsx</h2>
// console.log(head)

// const HeadingComponent=()=>{
//     return <div>
//         {head}
//         <Title></Title>
//         <h1>iam functional comoponent </h1>\
//         </div>
// }
// root.render(<HeadingComponent />)

//assignment ep-2

const HeaderComponent=()=>{
    return (
        <div id="header">
            <img src={srLogo} id='logo'/>
            <input type="text" id='search'></input>
            <span id='user'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
        </div>
    )
}

root.render(<HeaderComponent/>)