import './NewPost.css';
import {useState} from 'react';
import calculateReadTime from '../../helpers/calculateReadTime.js';
import {useNavigate} from 'react-router-dom';
import Input from '../../components/input/Input.jsx';
import Button from '../../components/button/Button.jsx';

function NewPost() {
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    const navigate = useNavigate();

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log({
            ...formState,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(formState.content),
        });

        console.log('De blog is succesvol verzameld! 🌈');
        navigate('/posts');
    }

    return (
        <section className="new-post-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                <form className="new-post-form" onSubmit={handleSubmit}>
                    <h1>Post toevoegen</h1>
                    <Input
                        type="text"
                        name="title"
                        labelText="Titel"
                        required={true}
                        formStateValue={formState.title}
                        handleChange={handleChange} />
                    <Input
                        type="text"
                        name="subtitle"
                        labelText="Subtitel"
                        required={true}
                        formStateValue={formState.subtitle}
                        handleChange={handleChange} />
                    <Input
                        type="text"
                        name="author"
                        labelText="Naam en achternaam"
                        required={true}
                        formStateValue={formState.author}
                        handleChange={handleChange} />

                    <label htmlFor="post-content">Blogpost</label>
                    <textarea
                        name="content"
                        id="post-content"
                        cols="30"
                        rows="10"
                        required
                        minLength={300}
                        maxLength={2000}
                        value={formState.content}
                        onChange={handleChange}></textarea>
                   <Button type="submit" variant="primary">
                        Toevoegen
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default NewPost;