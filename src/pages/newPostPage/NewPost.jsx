import './NewPost.css';
import calculateReadTime from '../../helpers/calculateReadTime.js';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';

function NewPost() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    function handleFormSubmit(data) {

        console.log({
            ...data,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(data.content),
        });

        console.log('De blog is succesvol verzameld! 🌈');
        navigate('/posts');
    }

    return (
        <section className="new-post-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                <form className="new-post-form" onSubmit={handleSubmit(handleFormSubmit)}>
                    <h1>Post toevoegen</h1>
                    <label htmlFor="post-title">Titel</label>
                    <input
                        type="text"
                        id="post-title"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                        })}
                    />
                    {errors.title && <p className="form-error-message">{errors.title.message}</p>}
                    <label htmlFor="post-subtitle">Subtitle</label>
                    <input
                        type="text"
                        id="post-subtitle"
                        {...register("subtitle", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                        })}
                    />
                    {errors.subtitle && <p className="form-error-message">{errors.subtitle.message}</p>}
                    <label htmlFor="post-author">Naam en achternaam</label>
                    <input
                        type="text"
                        id="post-author"
                        {...register("author", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                        })}
                    />
                    {errors.author && <p className="form-error-message">{errors.author.message}</p>}
                    <label htmlFor="post-content">Blogpost</label>
                    <textarea
                        id="post-content"
                        {...register("content", {
                            required: {
                                value: true,
                                message: 'Dit veld is verplicht',
                            },
                            minLenght: {
                                value: 300,
                                message: 'De post moet minstens 300 karakters bevatten',
                            },
                            maxLenght: {
                                value: 2000,
                                message: 'De post mag maximaal 50 karakters bevatten',
                            },
                        })}
                        cols="30"
                        rows="10"></textarea>
                    {errors.content && <p className="form-error-message">{errors.content.message}</p>}
                   <button type="submit">
                        Toevoegen
                    </button>
                </form>
            </div>
        </section>
    );
}

export default NewPost;