import { CurrentTime } from "./CurrentTime";
import { Link } from "react-router-dom";

export const Page_Header = (props) => {
    return (
          <>
            <header className="App-header">
              <h1>勤怠管理システム</h1>
              <p>ようこそ、{props.name}さん</p>
              <CurrentTime />
              <nav>
                <ul>
                  <li><Link to="/">トップページ</Link></li>
                  <li><Link to="/punchtimeclock">タイムレコーダー</Link></li>  
                </ul>
              </nav>
            </header>
          </>
    );
  }