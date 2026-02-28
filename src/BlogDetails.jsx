import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { API_BASE } from './config';

export default function BlogDetails() {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`${API_BASE}/blogs/` + id);

  const handleDelete = () => {
    fetch(`${API_BASE}/blogs/` + id, { method: 'DELETE' })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <div className="blog-details">
      {isPending && <div>加载中...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>作者：{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>删除这篇博客</button>
        </article>
      )}
    </div>
  );
}

