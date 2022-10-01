## src/mocks

モック関連のファイルを置くフォルダです。

browser.ts と server.ts にてブラウザと Node での実行に準備を行います。

### /api

pages 下の api と同じフォルダ構成にし、各 route で method ごとに返したい resolver を設定する。

### /api.〇〇〇

外部への api request を送信する際の mock 用ディレクトリ。
〇〇〇には実際に request を送信するドメインを設定し、内部でエンドポイント名のファイルを作成し、識別する。

### 依存ライブラリ

mock server worker(msw)

### 参考資料

https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests
https://bufferings.hatenablog.com/entry/2021/11/18/015809
https://github.com/takefumi-yoshii/nextjs-testing-strategy-2022/tree/main/src/services
