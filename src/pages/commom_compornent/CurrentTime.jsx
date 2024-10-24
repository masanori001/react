import React, { useEffect,useState } from 'react';

// 現在時刻を取得して返す関数
const fetchCurrentTime = () => {
        const date = new Date;
        const H = date.getHours(),
                M = date.getMinutes(),
                S = date.getSeconds();
        return `${H}:${M}:${S}`
    };


// 現在時刻をレンダリングして返す関数
export const CurrentTime = () => {

    // 現在時刻管理のuseStateを定義
    const [currentTime, setCurrentTime] = useState(fetchCurrentTime);
    const updateCurrentTIme = () =>{
        setCurrentTime(fetchCurrentTime);
    };

    // 初回レンダリング時にのみ、実行(コンストラクタみたいなもん)
    useEffect(() => {
        // 0.5秒間隔でuseState更新
        const intervalId = setInterval(updateCurrentTIme, 500);
        // クリーンナップ関数（コンポーネント削除時に実行)
        return () => { clearInterval(intervalId); };
    },[]);
    
    return (
        <p>現在時刻:{ currentTime }</p>
    );
};

//親のsetState関数を受け取り、現在時刻で親のsetStateを上書きする関数
export const PunchTimeSet =(parentSetFunc) =>{
        
        //親のsetstate関数を更新することで子から親に反映
        parentSetFunc(fetchCurrentTime);

        // デバック用
        console.log("親の更新完了");
        console.log(fetchCurrentTime);

        return null;
};
