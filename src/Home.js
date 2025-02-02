import Chefs from "./home_com/Chefs";
import Main from "./home_com/Main";
import IconTitle from "./home_com/Icontitle";
import Menu from "./home_com/Menu";
import { Iconbox } from 'iconbox';



function Home() {
    return(
        <>
        <Menu />
        <Main />
        <IconTitle />
        <Iconbox />
        <Chefs />
        </>
)
}

export default Home;