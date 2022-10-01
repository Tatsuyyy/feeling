import { FC } from 'react';
import { SampleColorTypes, SampleColorObject } from 'types/sample';

type Props = {
  /** 表示するカラー一覧 */
  data: SampleColorTypes[];
  /** ボタン押下時に走る関数 */
  onClick: (color: SampleColorTypes) => void;
  /** ボタンを押した結果返ってくるColorオブジェクト */
  resultColor: SampleColorObject;
};

const SampleColor: FC<Props> = ({ data, onClick, resultColor }) => (
  <>
    <h1>APIリクエストサンプル</h1>
    <h3>リクエスト先: api/sample</h3>
    <ul>
      {data.map((color) => (
        <li key={color}>
          <button name={color} onClick={() => onClick(color)}>
            {color}
          </button>
          ?color={color}
        </li>
      ))}
    </ul>
    {!!resultColor.name && (
      <>
        <h2>結果</h2>
        <p>{resultColor.name}</p>
        <p>{resultColor.code}</p>
      </>
    )}
  </>
);

export default SampleColor;
