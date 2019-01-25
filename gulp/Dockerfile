# nodeのイメージをベースとする
FROM node:10.15.0

# 作業ディレクトリ
WORKDIR /my_gulp

# 設定ファイルのコピー
COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

# Node.js依存ライブラリを導入
RUN npm init -y
RUN npm install

# ライブラリのバージョンを確認
RUN npm list --depth=0

# ファイル監視開始
CMD ["npm", "run", "watch"]