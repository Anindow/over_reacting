import React from 'react';
import Accordion from "./Accordion";
import Search from './Search';

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

export default () => {
    return <div><br/><Search /> </div> ;
};





