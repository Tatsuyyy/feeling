import { FC } from 'react';
import { Main } from 'components/atoms';
import { DefaultLayout } from 'components/layouts';
import { SampleColor } from 'components/organisms';
import { SampleColorTypes } from 'types/sample';

type Props = {
  /** 表示するカラー一覧 */
  data: SampleColorTypes[];
};

const SamplePage: FC<Props> = ({ ...props }) => (
  <Main>
    <DefaultLayout>
      <SampleColor {...props} />
    </DefaultLayout>
  </Main>
);
export default SamplePage;
