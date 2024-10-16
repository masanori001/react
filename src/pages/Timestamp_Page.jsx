import React, { useRef, useState } from 'react';

export const Timestamp_Page = () => {
    
    // 現在時刻を管理するuseStateを定義
    const [currentTime, setCurrentTime] = useState();

    // useRefでの要素参照とダイヤログ制御関数
    const dialogRef = useRef();
    const openDialog = () => dialogRef.current.showModal();
    const closeDialog = () => dialogRef.current.close();
    const dialogMessage = (title, message) => {
        
        // 現在時刻を更新する関数を定義
        const date = new Date;
        const H = date.getHours(),
                M = date.getMinutes(),
                S = date.getSeconds();

        setCurrentTime(`${H}:${M}:${S}`);

        dialogRef.current.querySelector("h2").innerHTML = title;
        dialogRef.current.querySelector("p").innerHTML = `${message}<br>${currentTime}`;
    };


    return (
        <div>
            <h2>タイムスタンプ</h2>
            <button id="startWorkBtn" onClick={() => {
                dialogMessage("勤務開始", "打刻完了");
                openDialog();
            }}>勤務開始</button>

            <button id="FinishWorkBtn" onClick={() => {
                dialogMessage("勤務終了", "打刻完了");
                openDialog();
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