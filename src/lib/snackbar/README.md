### src/lib/snackbar

snackbar を使いやすくするラッパーコンポーネントです。
UI や表示場所を変更したい場合はここを修正して下さい。

### wrapper.tsx

ここで export している SnackBarProviderConfig で囲むことで、
囲んだ子コンポーネントで useSnackbar を使って使用できます。
デフォルトで src/page/\_app.page.tsx にて使用済。

### 依存先

notistack
component/utils/SnackMessage
