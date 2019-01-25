# nodeのイメージをベースとする
FROM node:10.15.0

# 作業ディレクトリ
WORKDIR /my_gulp

# 設定ファイルのコピー
COPY ./package.json package.json

# Node.js依存ライブラリを導入
RUN npm install

# ファイル監視開始
CMD ["npm", "run", "watch"]