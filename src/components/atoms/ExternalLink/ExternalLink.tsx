import { Link } from '@mui/material';
import { FC } from 'react';

type Props = {
  /** リンク先 */
  href: string;
  /** リンクでラップする要素 */
  children: React.ReactElement;
};

const ExternalLink: FC<Props> = ({ href, children }) => (
  <Link
    sx={{ color: 'gray' }}
    href={href}
    rel='noopener noreferrer'
    target='_blank'
    underline='none'
  >
    {children}
  </Link>
);

export default ExternalLink;
