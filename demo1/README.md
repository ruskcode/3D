# React + Python 前后端分离项目

- `frontend/`：React + Vite，独立 npm 项目。
- `backend/`：Python + FastAPI，独立虚拟环境和依赖。
- 前端访问 `/api`，由 Vite 开发代理转发到后端，无需开发环境跨域配置。

## 环境

Node.js 22.12+（推荐当前 LTS），Python 3.10+。

## 启动后端（终端一）

```sh
cd /Users/chia/myproject/3D/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

接口文档：http://127.0.0.1:8000/docs

## 启动前端（终端二）

```sh
cd /Users/chia/myproject/3D/frontend
npm install
npm run dev
```

访问 http://127.0.0.1:5173 ，页面显示后端消息即表示联通成功。
已安装依赖时可跳过安装步骤。

## API

- `GET /api/health` → `{"status":"ok"}`
- `GET /api/hello` → `{"message":"你好，React！这是来自 Python FastAPI 的消息。"}`

## 构建

```sh
cd frontend
npm run build
```

输出目录 `frontend/dist/`。生产部署需通过 Web 服务器将 `/api` 转发到后端；Vite 的代理仅用于开发。此模板未配置数据库、认证或生产部署。

参考：[Vite](https://vite.dev/guide/) · [FastAPI](https://fastapi.tiangolo.com/)
