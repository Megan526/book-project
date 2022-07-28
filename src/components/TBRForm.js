import React, {useState} from 'react';


function TBRForm({addToRead}) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const titleToSubmit = title.trim()
        const authorToSubmit = author.trim()

        

        if(!titleToSubmit || !authorToSubmit){
            return
        }

        //comment

        addToRead ({
            title: titleToSubmit,
            author: authorToSubmit
            }
        )

        setTitle('')
        setAuthor('')
    }

    const [newBookPriority, setNewBookPriority] = useState('')


    const handlePriorityInput = (event) => {
        setNewBookPriority(event.target.value)
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    onChange={handleTitleChange}
                    type='text' 
                    placeholder='Enter the title...'
                    value={title}
                    required
                />
                <input
                    onChange={handleAuthorChange}
                    type='text' 
                    placeholder='Enter the author...'
                    value={author}
                    required
                />

                <input type="radio" value="high" name='button' onChange={handlePriorityInput} /> High
                <input type="radio" value="medium" name='button' onChange={handlePriorityInput} /> Medium
                <input type="radio" value="low" name='button' onChange={handlePriorityInput}/> Low

                <input 
                    type='submit'
                    value='Update'
                />
            </form>
        </>
    );
}

export default TBRForm;
