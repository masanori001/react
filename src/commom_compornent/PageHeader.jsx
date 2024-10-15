import { Link } from "react-router-dom";

export const Page_Header = (props) => {
    return (
          <>
            <header className="App-header">
              <h1>テスト用サイト</h1>
              <p>ようこそ、{props.name}さん</p>
              <nav>
                <ul>
                  <li><Link to="/">トップページ</Link></li>
                  <li><Link to="/time_stamp">タイマーページ</Link></li>       
                </ul>
              </nav>
            </header>
          </>
    );
  }