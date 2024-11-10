
// 組み込むべき機能
// [1]バリデーションチェック：：パスワードポリシーのチェック
// [2]パスワードのストレッチング
// [3]3回ミスったらロック
// [4]メールアドレスでのパスワードチェンジ
// [5]新規アカウント作成画面への遷移
// [6]パスワードを●●●で隠す奴
import React, { useState, useRef } from "react";


export const LoginPage =()=> {

    //入力フォームのバリデーションチェックテキスト
    const [usernameText, setUsername] = useState("ユーザー名を入力してください");
    const [passwordText, setPassword] = useState("パスワードを入力してください");

    const submitAuthdata = useRef();


    // =========バリデーションチェック関数=========
    const judgeUsernameValid = (Username) => {
        // 文字列の中に数字が4回以上
        const regexp = /.*\d+.*\d+.*\d+.*\d+/;

        // 文字数が8以上で数字が3つ以上含まれている
        if (8 <= Username.length && Username.match(regexp)) {
            setUsername("入力されたユーザー名はポリシーを満たしています。");
        }
        else {
            setUsername("入力されたユーザー名はポリシーを満たしていません");
        }
        // デバック用
        console.log(Username.length);
        console.log(typeof(Username));
    };
    
    
    // ========バリデーションチェック関数========
    const judgePasswordValid = (Password) => {
        // 文字列の中に数字が4回以上
        const regexp = /.*\d+.*\d+.*\d+.*\d+/;

        // 文字数が8以上で数字が3つ以上含まれている
        if (8 <= Password.length && Password.match(regexp)) {
            setPassword("入力されたパスワードはポリシーを満たしています。");
        }
        else {
            setPassword("入力されたパスワードはポリシーを満たしていません");
        }
    };
        
    // ユーザーIDとパスワードのバリデーションチェックがOKなら送信処理を行う。
    const validationCheckText = async (event) => {
        event.preventDefault(); //ページリロード防止

        //バリデーションチェックの可否判定
        if (usernameText=="入力されたユーザー名はポリシーを満たしています。" 
            && passwordText=="入力されたパスワードはポリシーを満たしています。")
            {   
                console.log("フォームの検証成功");
                // 入力フォームの状態を受け取り
                const username = await submitAuthdata.current.querySelector("input");
                const password = await submitAuthdata.current.querySelector("input");
                // json形式の文字列生成
                const jsonString = await "{'username':${username},'password':${password}}"
                // json.stringify⇒文字列をjsonオブジェクトに変換
                const userAuthJson = await JSON.stringify(jsonString);

                // user認証のAPI
                const url = await "http://localhost:3000/userAuth";
                // ★例外処理は後で書く
                const response = await fetch(url,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userAuthJson)
                })
                const responseJson = await response.json;
                console.log(responseJson);


                return "return true";

            }else{
                console.log("フォームの検証失敗");
                return "return false";
            }
    };

    return(
        <div className="loginForm">
            <head>
                <meta charset="UTF-8" />
                <title>sample.html</title>
            </head>

            <body>
                <header>
                    <h1>勤怠管理アプリケーション</h1>
                </header>

                <form method="POST" action="" onSubmit={validationCheckText} ref={submitAuthdata}>
                    <div>
                        Username : <input type="text" name="name" placeholder="username" autoComplete="username"
                                        onChange={(event) => judgeUsernameValid(event.target.value)} 
                                />
                        <p>{ usernameText }</p>
                    </div>
                    <div>
                        Password : <input type="password" name="pass" placeholder="password" autoComplete="current-password"
                                    onChange={(event)=>judgePasswordValid(event.target.value)}
                                />
                        <p>{passwordText}</p>
                    </div>
                    {/* ユーザー名＆パスワードをバックエンドに送信 */}
                    <input type="submit" value="送信" />
                </form>
            </body>
        </div>
        );
    };