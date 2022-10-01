import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LayoutBaseProps, LayoutBase } from './LayoutBase';

const RootStyle = styled('div')({
  display: 'block',
  minHeight: '100%',
  overflow: 'visible',
});

type LayoutProps = LayoutBaseProps & {};

const DefaultLayout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <LayoutBase title={title}>
      <RootStyle>
        <Container disableGutters>{children}</Container>
      </RootStyle>
    </LayoutBase>
  );
};
export default DefaultLayout;
