import React, { useState } from 'react';
import Accordion from "./Accordion";
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';
const items =[
    {
        title: 'What is React?',
        content: 'React is a front-end javascript framework'
    },
    {
        title: 'Why is React ?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React ?',
        content: 'You use React by creating components'
    }
];
const options =[
    {
        label : 'Red',
        value : "red"
    },
    {
        label : 'Blue',
        value : "blue"
    },
    {
        label : 'Green',
        value : "green"
    }
];

const App = () => {
const[selected,setSelected]=useState(options[0]);
 
 
 
    return (
      <div>
        <Header />
        <Route path="/" >
            <Accordion items={items} />
            </Route>
        <Route path="/list" >
            <Search items={items} />
            </Route>
        <Route path="/translate" >
            <Translate items={items} />
            </Route>
        
        <Route path="/dropdown" >
            <Dropdown items={items} 
            label="Select a Color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
            />
            </Route>

      </div>
    );
};
export default App;



