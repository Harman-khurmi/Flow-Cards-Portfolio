import React, { useRef, useState } from 'react'
import Card1 from './Card1';
import myImage from '../assets/mypic.jpg';
import Linkedin from '../assets/linkedin.svg';
import Behance from '../assets/behance.svg';
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
      <div ref={ref} className='w-[60%] h-auto py-20 pl-12 flex flex-row flex-wrap gap-8 overflow-x-hidden relative'>
        <Title
          reference={ref}
          Data={{
            Heading: "My Creative slice ~"
          }} />
        <CardText
          reference={ref}
          type="h-[25rem] w-44"
          Data={{
            Heading: "Code is like humor. When you have to explain it, it's bad",
            bgColor: "#5AB2E6",
            textColor: "text-[#FFFFFF]",
          }} />
        <CardSmall
          reference={ref}
          Data={{

            Image: Linkedin,
            Subheading: "Let's Connect on LinkedIn!",
            buttonStatus: false,
            btnColor: "#2A5AFC",
            textColor: "#F9F9FA",
            Button: "Follow",
            Link: "https://www.google.com"
          }}
        />
        <CardSmall
          reference={ref}
          Data={{

            Image: Behance,
            Subheading: "Check Out my Design Projects!",
            buttonStatus: true,
            btnColor: "#2A5AFC",
            textColor: "slate-100",
            Button: "Follow",
            Link: "https://www.google.com"
          }}
        />
        <CardSmall
          reference={ref}
          Data={{

            Image: Behance,
            Subheading: "Check Out my  Projects!",
            buttonStatus: true,
            btnColor: "#2A5AFC",
            textColor: "slate-100",
            Button: "Follow",
            Link: "https://www.google.com",
            order: "absolute",
            up: "21rem",

            east: "16rem",
            zindex: "100",
          }}
        />
        <CardSmall
          reference={ref}
          Data={{
            Image: Behance,
            Subheading: "Check Out my Design Projects!",
            buttonStatus: true,
            btnColor: "#2A5AFC",
            textColor: "slate-100",
            Button: "Follow",
            Link: "https://www.google.com",
            order: "absolute",
            up: "21rem",

            east: "30rem",
          }}
        />
        <CardSmall
          reference={ref}
          Data={{
            Image: Behance,
            Subheading: "Check Out my Design Projects!",
            buttonStatus: true,
            btnColor: "#2A5AFC",
            textColor: "slate-100",
            Button: "Follow",
            Link: "https://www.google.com",
            order: "absolute",
            up: "425px",
            east: "46px",
          }}
        />
        <CardText
          reference={ref}
          type="h-44 w-[25rem]"
          Data={{
            Heading: "With a love for design and a knack for coding, I'm the architect of digital dreams.",
            bgColor: "#FFFFFF",
            textColor: "text-[#000000]"
          }}
        />
        <Title
          reference={ref}
          Data={{
            Heading: "My CV ~"
          }} />
        {/* <Card1
          reference={ref}
          Data={{
            Heading: "Card 1",
            Subheading: "This is the Subheading for card1",
            Image: myImage,
            Link: "https://www.google.com"
          }}
        /> */}



        {/* <CardImage
          reference={ref}
          Data={{
            Image: myImage,
            Link: "https://www.google.com"
          }}
        /> */}


        {/* <CardText
          reference={ref}
          type="h-44 w-[25rem]"
          Data={{
            Heading: "This is the only text card where you can type any text specifically as an Heading pr as a Description"
          }} /> */}

      </div>
    </>
  )
}

export default Rightsection
