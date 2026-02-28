import BlogList from './BlogList';
import useFetch from './useFetch';
import { API_BASE } from './config';

export default function Home() {
  const { data: blogs, isPending, error } = useFetch(`${API_BASE}/blogs`)

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
    </div>
  );
}

