import './Overview.css';
import posts from '../../constants/data.json';
import PostItem from '../../components/postItem/PostItem.jsx';

function Overview() {
    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                <h1>Bekijk alle {posts.length} posts op het platform</h1>
                <ul className="post-list">
                    {posts.map((post) => {
                        return <PostItem
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            shares={post.shares}
                            comments={post.comments}
                            author={post.author}
                        />
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Overview;