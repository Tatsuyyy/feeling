import type { GetServerSideProps, NextPage } from 'next';
import { SamplePage } from 'components/templates';
import { SampleColorTypes } from 'types/sample';

type Props = {
  data: SampleColorTypes[];
};

const Home: NextPage<Props> = (props) => <SamplePage {...props} />;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await fetch('https://my.backend-sample/color');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Home;
