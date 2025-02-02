const main_style = {
    width: '100%',
    height: '464px',
    overflow: "hidden"
}

function Main() {
    return(
        <div style={main_style}>
        <img src={process.env.PUBLIC_URL + 'main.png'}/>
        </div>

    )
}

export default Main;