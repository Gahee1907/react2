import './home.css';

function Chefs() {
    return(
      <div className="chefs">
        <div className='chefs-inner'>
            <div className='box'>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
            <img src={ process.env.PUBLIC_URL + 'chef.png'}/>
        </div>
      </div>  
    )
  }

  export default Chefs;