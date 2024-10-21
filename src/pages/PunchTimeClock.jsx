import React, { useRef, useState } from 'react';

import { Page_Header } from "../commom_compornent/PageHeader";

export const PunchTimeClock = () => {
    
    // // 現在時刻を管理するuseStateを定義
    // const [currentTime, setCurrentTime] = useState(0);
    // const updateCurrentTIme = () =>{
    //     // 現在時刻を更新
    //     const date = new Date;
    //     const H = date.getHours(),
    //             M = date.getMinutes(),
    //             S = date.getSeconds();
    //     setCurrentTime(`${H}:${M}:${S}`);
    // };

    // useRefでの要素参照
    const dialogRef = useRef();

    // ダイアログ制御
    const openDialog = (title, message) => {

        dialogRef.current.querySelector("h2").innerHTML = title;
        // ダイアログメッセージと現在時刻をpタグに埋め込み
        dialogRef.current.querySelector("p").innerHTML = message;
        dialogRef.current.showModal();
    };
    const closeDialog = () => dialogRef.current.close();


    return (
        <div>

            {/* ヘッダー部 */}
            <Page_Header />

            {/* タイムレコーダー部 */}
            <h2>タイムレコーダー</h2>
            <button id="startWorkBtn" onClick={() => {
                openDialog("勤務開始", "打刻完了");
            }}>勤務開始</button>

            <button id="FinishWorkBtn" onClick={() => {
                openDialog("勤務終了", "打刻完了");
            }}>勤務終了</button>

            {/* useRef参照用のref属性を追加 */}
            <dialog ref={dialogRef}>
                <h2>insert_dialogTitle!</h2>
                <p>insert_dialogMassage!</p>
                <button onClick={closeDialog}>閉じる</button>
            </dialog>
        </div>
    );
};