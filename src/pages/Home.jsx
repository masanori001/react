import { PageHeader } from "./commom_compornent/PageHeader";
import { Link } from "react-router-dom"

export const Home = () => {
    return (
    <>  
        {/* ヘッダー部 */}
        <PageHeader />

        {/* ホームページ部 */}
        <h2>トップページ</h2>
        <nav>
            <ul>
                <li><Link to="/">トップページ</Link></li>
                <li><Link to="/punchtimeclock">タイムレコーダー</Link></li>     
            </ul>
        </nav>

    </>
    )
}