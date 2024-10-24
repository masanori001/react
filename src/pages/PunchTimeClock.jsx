import React, { useState, useRef, useContext } from 'react';
import { Page_Header } from "./commom_compornent/PageHeader";
import { PunchTimeSet } from './commom_compornent/CurrentTime';

export const PunchTimeClock = () => {

    // 時間を受け取るためのuseState
    const [punchTime, fetchPunchTime ] = useState("undefined");
    const parentSetFunc = (PunchTime) =>{
        fetchPunchTime (PunchTime);
    };

    // useRefでの要素参照
    const dialogRef = useRef();
    // ダイアログ制御
    const openDialog = (title, message) => {
        dialogRef.current.querySelector("h2").innerHTML = title;
        dialogRef.current.querySelector("p").innerHTML = message;

        PunchTimeSet(parentSetFunc);
        console.log(punchTime);

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
                    <p>打刻時間：{ punchTime }</p>
                    <button onClick={closeDialog}>閉じる</button>
                </dialog>
            </div>
    );
};