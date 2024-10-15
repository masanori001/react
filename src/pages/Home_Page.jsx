import { Page_Header } from "../commom_compornent/PageHeader";

import { Link } from "react-router-dom"

export const Home_Page = () => {
    return (
    <>  
        <h2>トップページ</h2>
        <nav>
            <ul>
                <li><Link to="/">トップページ</Link></li>
                <li><Link to="/time_stamp">タイマーページ</Link></li>     
            </ul>
        </nav>
        {/* <Page_Header /> */}
    </>
    )
}