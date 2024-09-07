import React, { useRef, useState } from 'react'
import Card1 from './Card1';
import myImage from '../assets/mypic.jpg';
import CardSmall from './CardSmall';
import Title from './Title';
import CardImage from './CardImage';
import CardText from './CardText';

function Rightsection() {
  const ref = useRef(null);
  const [classNameValue, setClassNameValue] = useState('false');

  const updateClassName = (newClassName) => {
    setClassNameValue(newClassName);
  };

  return (
    <>
      <div ref={ref} className='w-[60%] h-auto py-20 pl-12 flex flex-row flex-wrap gap-8 overflow-x-hidden '>
        <Title
          reference={ref}
          Data={{
            Heading: "~ My Creative slice"
          }} />
        <Card1
          reference={ref}
          Data={{
            Heading: "Card 1",
            Subheading: "This is the Subheading for card1",
            Image: myImage,
            Link: "https://www.google.com"
          }}
        />

        <CardSmall
          reference={ref}
          Data={{
            Image: myImage,
            Subheading: "Check out my Projects! ew32 23423 2fedwf",
            Button: "Follow",
            Link: "https://www.google.com"
          }}
        />

        <CardImage
          reference={ref}
          Data={{
            Image: myImage,
            Link: "https://www.google.com"
          }}
        />

        <CardText
          reference={ref}
          type="h-[25rem] w-44"
          Data={{
            Heading: "This is the only text card where you can type any text specifically as an Heading pr as a Description"
          }} />
        <CardText
          reference={ref}
          type="h-44 w-[25rem]"
          Data={{
            Heading: "This is the only text card where you can type any text specifically as an Heading pr as a Description"
          }} />

      </div>
    </>
  )
}

export default Rightsection
