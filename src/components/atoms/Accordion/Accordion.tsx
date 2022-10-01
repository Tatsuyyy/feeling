import { Icon } from '@iconify/react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from '@mui/material';
import { FC } from 'react';

type Props = {
  /** 折り畳んである状態の見出し */
  summary: string;
  /** 折り畳む内容 */
  children: React.ReactNode;
};

/**
 * 折り畳んであり、展開可能なコンポーネント。
 */
const Accordion: FC<Props> = ({ summary, children, ...props }) => (
  <Box>
    <MuiAccordion {...props} sx={{ borderRadius: '10' }}>
      <AccordionSummary
        expandIcon={<Icon icon='material-symbols:expand-more' />}
        aria-controls='panel-content'
      >
        <Typography>{summary}</Typography>
      </AccordionSummary>

      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  </Box>
);

export default Accordion;
