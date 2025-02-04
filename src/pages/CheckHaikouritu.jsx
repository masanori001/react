import React, { useState, useEffect} from 'react';
import { PageHeader } from "./commom_compornent/PageHeader";
import checkhaikouritu from "./css/checkhaikouritu.module.css"

export const CheckHaikouritu = () => {

    //選択した牌の状態を保持する変数
    const rows = 3;
    const cols = 9;
    const [selecttails,setselecttail] = useState(Array.from({ length: rows }, () => Array(cols).fill(0)));
    const [tailsarray,settailsarray] = useState([]);

    // クリックされた画像のdata-valueを取得し、合計に加算する関数
    const tailClick = (event) => {
        const value = event.target.getAttribute('data-id');  // data-valueの値を取得
        const src = event.target.src;
        setselecttail((selecttails) => { return selecttailsUpdate(selecttails,value,src); }); 
    };

    const selecttailsUpdate = (prevSelecttails, value,src) => {
        const updatedTails = [...prevSelecttails]; // 配列をコピー
        const valuearray = JSON.parse(value);
        if (updatedTails[valuearray[0]][valuearray[1]] === 4){
            return prevSelecttails; // 牌が4つ以上の時は変更なし
        } else {
            updatedTails[valuearray[0]][valuearray[1]] += 1;
            settailsarray((prevtailsarray)=> { 
                if (prevtailsarray.length != 14) {
                    return [...prevtailsarray,src]
                } else { return prevtailsarray }});
        }
        console.log(updatedTails)
        return updatedTails;  // 新しい状態を返す
      };

    // imgタグをクリックしたときに呼び出す関数を追加する
    useEffect(() => {
        // すべての画像タグ取得
        const images = document.querySelectorAll('img');
        // 各画像に共通のクリックイベントリスナーを追加
        images.forEach((image) => {
          image.addEventListener('click', tailClick);
        });
        // クリーンアップ関数
        return () => {
          images.forEach((image) => {
            image.removeEventListener('click', tailClick);
          });
        };
    },[]); //依存配列なし（初回のみ実行)
 
    return (
            <div>
                {/* ヘッダー部 */}
                <PageHeader />
                <h2>牌効率チェッカー</h2>
                <div className={checkhaikouritu.root} >
                    <div className={checkhaikouritu.tailimg}>
                        <img src="images/manzu/1m.png" data-id="[0,0]" />
                        <img src="images/manzu/2m.png" data-id="[0,1]" />
                        <img src="images/manzu/3m.png" data-id="[0,2]" />
                        <img src="images/manzu/4m.png" data-id="[0,3]" />
                        <img src="images/manzu/5m.png" data-id="[0,4]" />
                        <img src="images/manzu/6m.png" data-id="[0,5]" />
                        <img src="images/manzu/7m.png" data-id="[0,6]" />
                        <img src="images/manzu/8m.png" data-id="[0,7]" />
                        <img src="images/manzu/9m.png" data-id="[0,8]" />
                    </div>
                    <div className={checkhaikouritu.tailimg}>
                        <img src="images/manzu/1p.png" data-id="[1,0]" />
                        <img src="images/manzu/2p.png" data-id="[1,1]" />
                        <img src="images/manzu/3p.png" data-id="[1,2]" />
                        <img src="images/manzu/4p.png" data-id="[1,3]" />
                        <img src="images/manzu/5p.png" data-id="[1,4]" />
                        <img src="images/manzu/6p.png" data-id="[1,5]" />
                        <img src="images/manzu/7p.png" data-id="[1,6]" />
                        <img src="images/manzu/8p.png" data-id="[1,7]" />
                        <img src="images/manzu/9p.png" data-id="[1,8]" />
                    </div>
                </div>
                <div className={checkhaikouritu.selectedtails}>
                    <div>
                    {tailsarray.map((imageSrc, index) => (
                        <img
                            key={index}
                            src={imageSrc}
                            alt={`画像${index + 1}`}
                        />
                        ))}
                    </div>
                </div>
                
            </div>
    );
};