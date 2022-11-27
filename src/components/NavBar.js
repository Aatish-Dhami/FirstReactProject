import logo from '/Users/aatishdhami/Documents/Personal Project/FirstReactProject/src/images/logo.svg';

export default function Nav() {
    return(
        <div className='nav'>
            <img className='nav-icon' src={logo} width="60px"/>
            <h3 className='nav--logo_text'>ReactFacts</h3>
            <h4 className='nav--title'>React Course - Project 1</h4>
        </div>
    )
}