import React from 'react'


const Hello = () => {
    //A. JSX version of Hello componanat
    /* return(
        <div>
            <h1>Hello Vishwas</h1>
        </div>
    )*/

    //B Componanat without using JSX
    //return React.createElement('div', null, 'h1');
    //return React.createElement('div', null, 'h1','Hello Vishwas');
    //return React.createElement('div', null, React.createElement('h1',null,'Hello Vishwas'));
    //return React.createElement('div', {id : 'hello', class : 'dummyClass'}, React.createElement('h1',null,'Hello Vishwas'));
    return React.createElement('div', {id : 'hello', className : 'dummyClass'}, React.createElement('h1',null,'Hello Vishwas'));
}

/*
Class -> ClassName
for -> HtmlFor
onclick -> onClick
tabindex -> tabIndex
https://github.com/facebook/react/issues/13525
*/

export default Hello