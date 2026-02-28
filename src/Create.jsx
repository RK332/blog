import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API_BASE } from './config';

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch(`${API_BASE}/blogs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>添加新博客</h2>
      <form onSubmit={handleSubmit}>
        <label>博客标题：</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>博客内容：</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>作者：</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="请输入作者名"
        />

        {!isPending && <button>添加博客</button>}
        {isPending && <button disabled>正在添加...</button>}
      </form>
    </div>
  );
}

