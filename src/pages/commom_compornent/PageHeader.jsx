import React from "react";
import { Link } from "react-router-dom";
import { CurrentTime } from "./CurrentTime";

export const Page_Header = () => {

  return (
    <>
      <header className="App-header">
        <h1>勤怠管理システム</h1>
        <p>ようこそ、さん</p>
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
};