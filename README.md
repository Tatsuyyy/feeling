## Next.js Base

Next.js の開発基盤

### 導入手順

1. このリポジトリをクローンする
2. yarn install する(yarn でも可)
3. 不要であればサンプルを削除する (要サンプルなしバージョン作成)  
   https://www.notion.so/soarig/sample-a5b20b27e81441b7a7182be2a70f65c1#7ce833afdcc042f4b6e0429885c4d0a3

4. src/components/layouts/LayoutBase.tsx 内の SERVICE_NAME の EXAMPLE をプロジェクト名に書き換える

### 定義済コマンド

- yarn dev  
  実行する(開発中)。
  ホットリロードされるが、環境変数追加などは反映されない。

- yarn build  
  型や文法チェックを行い、本番環境で実行可能な状態にする。push 前に実行推奨。

- yarn start  
  build 済のコードを実行する。

- yarn test  
  watch オプション付きで test を実行する。

- yarn storybook  
  6006 番ポートにて storybook を実行する。

- yarn component hygen new  
  新規コンポーネント作成時に使用する。対話型で詳細を設定する。

  https://www.notion.so/soarig/ed338c0718d8459aa7c75b16c72d0f53

### 設定済項目

- import
  src を起点とした絶対パスでのインポート

- \_app.page.tsx
  MUI の theme を使うための設定
  react-query を使うための設定
  react-query の開発者ツールの読み込み
  snackbar を使うための設定

- test / storybook
  wrapper を使用した test の実行

### wrapper

- src/lib/tests/mockServerSetting.ts  
  非同期通信を mock して行う test で mockserver を使うためのコードをまとめ、1 行で準備完了する形にラッピング。

- src/lib/tests/renderWrapper.ts  
  test 実行時に mock が必要な項目や\_app.page.tsx で設定した項目に合わせるためのラッパー。

- src/hooks/useMutationWrapper.ts
- src/hooks/useQueryWrapper.ts  
  react-query で使用する useQuery と useMutation のラッパー。型付けや処理をわかりやすくまとめてある。

### ドキュメント

https://www.notion.so/soarig/Document-5bef8acde5554c2d9028db65e73df115
