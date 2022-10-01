## src/pages

公開するページがまとめられている、ルーティング対象のディレクトリです。

apiRoute では .api.tsx それ以外では .page.tsx とすることでルーティング対象となります。

## テスト観点

### pages/\*.test.tsx

正常系・異常系を網羅すること。  
middleware が機能していることも確認すること。

### pages/api/\*.test.ts

正常系・異常系を網羅すること。  
middleware が機能していることも確認すること。
