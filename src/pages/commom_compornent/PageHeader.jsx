import React from "react";
import { Link } from "react-router-dom";
import { CurrentTime } from "./CurrentTime";
import headercss from "../css/headerstyle.module.css"

export const PageHeader = () => {

  return (
    <div  className={headercss.header}>
      <header>
        <h1>勤怠管理システム</h1>
        <p>ようこそ、Guestさん</p>
        <CurrentTime />
        <nav>
          <ul>
            <li><Link to="/">トップページ</Link></li>
            <li><Link to="/punchtimeclock">タイムレコーダー</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};