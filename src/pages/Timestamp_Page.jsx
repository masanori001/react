import React from 'react';

export const Timestamp_Page = () => {

    const openDialog = () => {
        const dialog = document.getElementById('myDialog');
        dialog.showModal();
    };

    const closeDialog = () => {
        const dialog = document.getElementById('myDialog');
        dialog.close();
    };

    const dialogMessage = (title, message) => {
        const dialog = document.getElementById("myDialog");
        dialog.querySelector("h2").textContent = title;
        dialog.querySelector("p").textContent = message;
    };

    return (
        <div>
            <h2>タイムスタンプ</h2>
            <button id="startWorkBtn" onClick={() =>{
                dialogMessage("勤務開始","打刻完了");
                openDialog();
            }}>勤務開始</button>

            <button id="startWorkBtn" onClick={() =>{
                dialogMessage("勤務終了","打刻完了");
                openDialog();
            }}>勤務完了</button>

            <dialog id="myDialog">
                <h2></h2>
                <p></p>
                <button onClick={closeDialog}>閉じる</button>
            </dialog>
        </div>
    );
};


// import React from "react";

// export const Timestamp_Page = () =>{

//     const dialogStartWork = () => {
//         TimeStamp_Button_Click({
//             message : "勤務開始時刻が打刻されました",
//             BtnId : "startWorkBtn"
//         });
//     };

//     return (
//         <>
//             <h2>タイムスタンプ</h2>
//             <button id="startWorkBtn" onclick={dialogStartWork}>勤務開始</button>
//             <button id="finishWorkBtn">勤務終了</button>
//         </>
//     );
// };

// const TimeStamp_Button_Click = ({message, BtnId}) =>{
    
//     return (
//         <div>
//             <dialog id="timestampDialog">
//                 <h2>{ message }</h2>
//                 <button id="dialogCloseBtn">OK</button>
//             </dialog>

//             <script>
//                 const dialog = document.getElementById("timestampDialog");
//                 const openBtn = document.getElementById({ BtnId });
//                 const closeBtn = document.getElementById("dialogCloseBtn");
                
//                 openBtn.addEventListener("click", () => { dialog.showModal(); } );
//             </script>
//         </div>
//     );
// };