import { useEffect, useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  async function loadMessage() {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/hello', { signal: AbortSignal.timeout(5000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
    } catch {
      setError('连接失败，请确认后端已在 8000 端口启动。');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { loadMessage(); }, []);
  return (
    <main>
      <span className="badge">FULL STACK STARTER</span>
      <h1>React + Python</h1>
      <p>前后端独立开发，通过 API 连接。</p>
      <section aria-live="polite">
        <h2>后端连接</h2>
        <p>{loading ? '正在连接…' : error || message}</p>
        <button onClick={loadMessage} disabled={loading}>重新请求</button>
      </section>
      <a href="http://127.0.0.1:8000/docs" target="_blank" rel="noreferrer">查看 API 文档 ↗</a>
    </main>
  );
}
