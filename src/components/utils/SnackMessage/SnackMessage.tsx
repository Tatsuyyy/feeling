import closeOutlined from '@iconify/icons-ant-design/close-outlined';
import { Icon } from '@iconify/react';
import { Box, Card, CardActions, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// eslint-disable-next-line
import { useSnackbar, SnackbarContent, CustomContentProps } from 'notistack';
import { forwardRef, useCallback, useMemo } from 'react';

/** Snackbar用にMuiCardをオーバライド */
const SnackMessageCard = styled(Card)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    minWidth: '344px !important',
  },
  color: theme.palette.common.white,
  '&.Snackbar-colorDefault': {
    backgroundColor: theme.palette.primary.main,
  },
  '&.Snackbar-colorSuccess': {
    backgroundColor: theme.palette.success.main,
  },
  '&.Snackbar-colorInfo': {
    backgroundColor: theme.palette.info.main,
  },
  '&.Snackbar-colorWarning': {
    backgroundColor: theme.palette.warning.main,
  },
  '&.Snackbar-colorError': {
    backgroundColor: theme.palette.error.main,
  },
}));

/** 固有クラス名の接頭辞 */
const variantStyleClassPrefix = 'Snackbar-color';

/** notistack のSnackbarのスタイルをオーバライド
 *
 *  カスタムコンポーネントでvariantなどのPropsを受け取る方法
 *  https://github.com/iamhosseindhv/notistack/issues/242#issuecomment-955633429
 *
 *  @example
 *  import { useSnackbar } from 'notistack'
 *  ...
 *  const { enqueueSnackbar } = useSnackbar()
 *  enqueueSnackbar(message, { variant: 'success' })
 *
 */
const Component = forwardRef<HTMLDivElement, CustomContentProps>((props, ref) => {
  /** スタイルを取得 */
  const { variant } = props;
  const { closeSnackbar } = useSnackbar();

  /** variantに対応したクラス名を生成 */
  const variantClassName = useMemo(
    () => `${variantStyleClassPrefix}${variant.charAt(0).toUpperCase() + variant.slice(1)}`,
    [variant],
  );

  /** 閉じるメソッド */
  const handleDismiss = useCallback(() => {
    closeSnackbar(props.id);
  }, [props.id, closeSnackbar]);

  return (
    <SnackbarContent ref={ref}>
      <SnackMessageCard className={variantClassName}>
        <CardActions
          sx={{
            padding: '8px 8px 8px 16px',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant='subtitle2'
            sx={{
              fontWeight: 'bold',
            }}
          >
            {props.message}
          </Typography>
          <Box
            sx={{
              marginLeft: 'auto',
            }}
          >
            <IconButton
              sx={{
                padding: '8px 8px',
                transform: 'rotate(0deg)',
                transition: (theme) =>
                  theme.transitions.create('transform', {
                    duration: theme.transitions.duration.shortest,
                  }),
              }}
              onClick={handleDismiss}
            >
              <Icon icon={closeOutlined} color='#fff' fontSize={16} />
            </IconButton>
          </Box>
        </CardActions>
      </SnackMessageCard>
    </SnackbarContent>
  );
});

Component.displayName = 'SnackMessage';

export default Component;
