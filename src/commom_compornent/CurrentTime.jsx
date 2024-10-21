import React, { useEffect,useRef,useState } from 'react';

export const CurrentTime = () => {

    const timeString = useRef();

    // 現在時刻を管理するuseStateを定義
    const [currentTime, setCurrentTime] = useState(0);
    // 現在時刻を取得し、更新する関数
    const updateCurrentTIme = () =>{
        const date = new Date;
        const H = date.getHours(),
                M = date.getMinutes(),
                S = date.getSeconds();
        setCurrentTime(`${H}:${M}:${S}`);
    };

    // 初回レンダリング時にのみ、実行(コンストラクタみたいなもん)
    useEffect(() => {
        // 1秒間隔で時刻更新関数を実行する
        const intervalId = setInterval(updateCurrentTIme, 1000);
        // クリーンナップ関数（このコンポーネントが削除される時に実行される)
        return () => { clearInterval(intervalId); };
    },[]);

    return (
        <>
            <p id="timeString">{currentTime}</p>       
        </>
    );
};
