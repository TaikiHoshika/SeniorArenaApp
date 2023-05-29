# SeniorArena
学校で開催されたハッカソン用のアプリデモ

## 技術スタック
- バックエンド: Django
- フロントエンド: React
- データベース: PostgreSQL
- コンテナ: Docker

## 環境構築手順
1. リポジトリをクローン
```sh
git clone https://github.com/TaikiHoshika/SeniorArenaApp.git
```

2. コンテナを起動
```sh
docker compose up -d
```

3. マイグレーションの実行・ダミーデータの読み込み
```sh
docker exec -it django bash
python manage.py makemigrations api
python manage.py migrate api
python manage.py loaddata ./api/fixtures/shops_init.json
```

## 作成者
- 星加大樹
- 大成輝

## ライセンス
[BSD license](https://ja.wikipedia.org/wiki/BSDライセンス)