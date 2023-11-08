import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav';
import Main from './components/main';
function Page(){
    return (
        <>
            <Nav/>
            <Main/>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <Page/>
)
              

