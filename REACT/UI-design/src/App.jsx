import Section1 from './components/Section-1/Section1';

function App() {
  const users = [
    {
      img :'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',  
      info : 'Users who are already comfortable with digital banking and regularly use online services.',
      tag : 'Satisfied'
    },
    {
      img :'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      info : 'Individuals who are aware of digital banking but hesitate due to trust or usability concerns.',
      tag : 'Unreserved'
    },
    {
      img :'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      info : 'People with limited access to banking services due to lack of resources or digital literacy.',
      tag : 'Underserved'
    },
    {
      img :'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      info : 'Users who previously engaged with digital banking but stopped due to poor experience or unmet expectations.',
      tag : 'Disengaged'
    },
  {
    img: 'https://images.unsplash.com/photo-1555421689-43cad7100750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    tag: 'Power User'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
    info: 'Users who are cautious about digital banking due to privacy and security risks, requiring strong trust signals.',
    tag: 'Security Concerned'
  }
  ]
  return (
    <>
      <Section1 users ={users} />
    </>
  );
}

export default App;