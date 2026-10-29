import { useState } from "react";
import "./App.css";

export default function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchMessage() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/hello");

      if (!response.ok) {
        throw new Error(`请求失败：HTTP ${response.status}`);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError(`无法获取数据：${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <h1>React + Python</h1>
      <p>我的第一个前后端分离项目</p>

      <section className="card">
        <h2>后端返回的数据</h2>

        {loading ? (
          <p>正在加载...</p>
        ) : error ? (
          <p role="alert">{error}</p>
        ) : (
          <p>{message}</p>
        )}

        <button onClick={fetchMessage} disabled={loading}>
          {loading ? "请求中..." : "重新请求"}
        </button>
      </section>
    </main>
  );
}
