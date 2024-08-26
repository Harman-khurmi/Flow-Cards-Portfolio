import React, { useRef, useState } from 'react'
import Card1 from './card1'
import CardSmall from './CardSmall'
import myImage from '../assets/mypic.jpg'

function Rightsection() {
  // const Data = [
  const ref = useRef(null);
  return (
    <>
      <div ref={ref} className='w-[55%] h-screen pt-10 pl-0 flex flex-row flex-wrap gap-5 overflow-x-hidden '>
        <Card1
          reference={ref}
          Data={{
            Heading: "Card 1",
            Subheading: "This is the Subheading for card1",
            Image: myImage,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "Card 1",
            Subheading: "This is the Subheading for card1",
            Image: myImage,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "Card 1",
            Subheading: "This is the Subheading for card1",
            Image: myImage,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "Card 1",
            Subheading: "This is the Subheading for card1",
            Image: myImage,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "Card 1",
            Subheading: "This is the Subheading for card1",
            Image: myImage,
            Link: "https://www.google.com"
          }}
        />

        {/* <CardSmall
          smalldata={{
            icon: "",
            heading: "Small Card Heading",
            button: "Follow",
            buttonColor: "black"
          }}
        /> */}



      </div>
    </>
  )
}

export default Rightsection
