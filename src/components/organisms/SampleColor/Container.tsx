import { FC, useState } from 'react';
import { default as Component } from './SampleColor';
import client from 'lib/clientside/apiClient';
import { SampleColorTypes } from 'types/sample';

type Props = {
  data: SampleColorTypes[];
};

const Container: FC<Props> = ({ data }) => {
  const [color, setColor] = useState({ name: '', code: '' });

  const onClick = async (selectColor: SampleColorTypes) => {
    /**
     * @todo ラッパーを作成する？
     */
    const { data } = await client.get(`http://localhost:3000/api/sample?color=${selectColor}`);

    // const res = await fetch(`http://localhost:3000/api/sample?color=${selectColor}`);
    // const data = await res.data();

    if (!data.name) {
      setColor({ name: data.message, code: data.statusCode });
    } else {
      setColor({ name: data.name, code: data.code });
    }
  };

  return <Component data={data} onClick={onClick} resultColor={color} />;
};

Container.displayName = 'SampleColor';

export default Container;
