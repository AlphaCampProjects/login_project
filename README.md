# 登入帳密系統
一個使用 Node.js + Express 打造的登入系統驗證，當正確輸入帳號及密碼時，會挑出歡迎頁面，並顯示該用戶的名字，若不正確，則會在原頁提醒帳密錯誤。

##專案畫面
### 專案首頁
<img width="657" alt="index" src="https://user-images.githubusercontent.com/69742330/117444843-94a37080-af6c-11eb-930f-0d2654a46450.png">
### 登入成功畫面
<img width="780" alt="Login failed" src="https://user-images.githubusercontent.com/69742330/117444853-966d3400-af6c-11eb-8d27-86f92c9c7c46.png">
### 登入失敗畫面
<img width="766" alt="Login successed" src="https://user-images.githubusercontent.com/69742330/117444860-979e6100-af6c-11eb-92cf-691167298331.png">

## 環境建置與需求
+ [Node.js: v14.16.1](https://nodejs.org/en/)

## 安裝與執行步驟
打開終端機將專案下載至本地執行
```
git clone https://github.com/tinahung126/login_project.git
```
進入專案資料夾
```
cd restaurantList
```
安裝專案需求套件
```
npm install 
npm i nodemon
```
啟動伺服器，執行專案
```
npm run dev
```
終端機顯示 Start listening on http://localhost:3000 即成功啟動，可至 http://localhost:3000 開始使用！
