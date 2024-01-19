import WIKButton from './WIKButton'

function Homepage() {

  return (
    <div className='homepage'>
      <AboutmeSnippet />
      <AboutmeSnippet />
      <AboutmeSnippet />
    </div>
  )
}

function AboutmeSnippet(){

  return(
    <div className='aboutme-snippet'>
        <h1>Hello I am Benjamin</h1>
        <h2>I am a front end developer currently living in Scotland. I grew an interest back in 2020 when I started taking an interest in programming and making things in my free time.
        </h2>
        <h3>What I know</h3>
        <div className="WIKButtonHolder">
          <WIKButton icon_src='/javascript.svg' name='Javascript' />
          <WIKButton icon_src='/typescript.svg' name='Typescript' />
          <WIKButton icon_src='/python.svg' name='Python' />
          <WIKButton icon_src='/react.svg' name='React' />
        </div>
      </div>
  )
}

export default Homepage
