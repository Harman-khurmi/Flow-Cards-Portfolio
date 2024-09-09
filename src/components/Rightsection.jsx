import React, { useRef, useState } from 'react'
import Card1 from './Card1';
import myImage from '../assets/mypic.jpg';
import cv from '../assets/resume.png';
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
            bgColor: "bg-[#5AB2E6]",
            textColor: "text-[#FFFFFF]",
          }} />
        <CardSmall
          reference={ref}
          Data={{

            Image: Linkedin,
            Subheading: "Let's Connect on LinkedIn!",
            buttonStatus: false,
            Link: "https://www.google.com",
            order: "relative",
            up: "",
            east: "",
          }}
        />
        <CardSmall
          reference={ref}
          Data={{
            Image: Behance,
            Subheading: "Check Out my Design Projects!",
            buttonStatus: true,
            btnColor: "bg-[#2A5AFC]",
            textColor: "text-slate-100",
            Button: "Follow",
            Link: "https://www.google.com",
            order: "relative",
            up: "",
            east: "",
          }}
        />
        <CardSmall
          reference={ref}
          Data={{

            Image: Linkedin,
            Subheading: "Check Out my  Projects!",
            buttonStatus: true,
            btnColor: "bg-[#2A5AFC]",
            textColor: "text-slate-100",
            Button: "Follow",
            Link: "https://www.google.com",
            order: "absolute",
            up: "top-[21rem]",
            east: "right-[16rem]",
            zindex: "z-100",
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
            up: "top-[21rem]",
            east: "right-[30rem]",
            zindex: "z-100",
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
            up: "top-[26rem]",
            east: "right-[3rem]",
            zindex: "z-100",
          }}
        />
        <CardText
          reference={ref}
          type="h-44 w-[25rem]"
          Data={{
            Heading: "With a love for design and a knack for coding, I'm the architect of digital dreams.",
            bgColor: "bg-[#FFFFFF]",
            textColor: "text-[#000000]"
          }}
        />
        {/* MY CV SECTION */}
        <Title
          reference={ref}
          Data={{
            Heading: "My CV ~"
          }} />

        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />

        {/* My PROJECT SECTION */}
        <Title
          reference={ref}
          Data={{
            Heading: "My Projects ~"
          }} />

        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />

        {/* ACHIEVEMENTS SECTION */}
        <Title
          reference={ref}
          Data={{
            Heading: "My Achievements ~"
          }} />

        <CardImage
          reference={ref}
          Data={{
            Image: Linkedin,
            Link: "https://www.google.com"
          }}
        />
        <CardText
          reference={ref}
          type="h-44 w-[25rem]"
          Data={{
            Heading: "With a love for design and a knack for coding, I'm the architect of digital dreams.",
            bgColor: "bg-[#FFFFFF]",
            textColor: "text-[#000000]"
          }}
        />
        <CardImage
          reference={ref}
          Data={{
            Image: Linkedin,
            Link: "https://www.google.com"
          }}
        />
        <CardImage
          reference={ref}
          Data={{
            Image: Linkedin,
            Link: "https://www.google.com"
          }}
        />
        <CardText
          reference={ref}
          type="h-44 w-[25rem]"
          Data={{
            Heading: "With a love for design and a knack for coding, I'm the architect of digital dreams.",
            bgColor: "bg-[#FFFFFF]",
            textColor: "text-[#000000]"
          }}
        />
        <CardImage
          reference={ref}
          Data={{
            Image: Linkedin,
            Link: "https://www.google.com"
          }}
        />
        <CardText
          reference={ref}
          type="h-44 w-[25rem]"
          Data={{
            Heading: "With a love for design and a knack for coding, I'm the architect of digital dreams.",
            bgColor: "bg-[#FFFFFF]",
            textColor: "text-[#000000]"
          }}
        />
        <CardImage
          reference={ref}
          Data={{
            Image: Linkedin,
            Link: "https://www.google.com"
          }}
        />
        <CardText
          reference={ref}
          type="h-44 w-[25rem]"
          Data={{
            Heading: "With a love for design and a knack for coding, I'm the architect of digital dreams.",
            bgColor: "bg-[#FFFFFF]",
            textColor: "text-[#000000]"
          }}
        />
        {/* INTERSHIP AND CERTIFICATES */}
        <Title
          reference={ref}
          Data={{
            Heading: "My Internships & Certificates ~"
          }} />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
        <Card1
          reference={ref}
          Data={{
            Heading: "My CV",
            Subheading: "This is the Subheading for card1",
            Image: cv,
            Link: "https://www.google.com"
          }}
        />
      </div>
    </>
  )
}

export default Rightsection
