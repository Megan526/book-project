import React, {useState} from 'react';


function TBRForm({toRead, setToRead}) {

    // const [title, setTitle] = useState('')
    // const [author, setAuthor] = useState('')

    // const handleTitleChange = (event) => {
    //     setTitle(event.target.value)
    // }

    // const handleAuthorChange = (event) => {
    //     setAuthor(event.target.value)
    // }

    // const handleFormSubmit = (event) => {
    //     event.preventDefault()
    //     const titleToSubmit = title.trim()
    //     const authorToSubmit = author.trim()

        

    //     if(!titleToSubmit || !authorToSubmit){
    //         return
    //     }


    //     addToRead ({
    //         title: titleToSubmit,
    //         author: authorToSubmit
    //         }
    //     )

    //     setTitle('')
    //     setAuthor('')
    // }

    // const [newBookPriority, setNewBookPriority] = useState('')


    // const handlePriorityInput = (event) => {
    //     setNewBookPriority(event.target.value)
    // }

    const [titleName, setTitleName] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [priority, setPriority] = useState("");


    const handleTitleChange = (event) => {
        setTitleName(event.target.value);
    }

    const handleAuthorChange = (event) => {
        setAuthorName(event.target.value);
    }
    
    const handlePriorityInput = (event) => {
        setPriority(event.target.value);
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const toReadListCopy = [...toRead]
        toReadListCopy.push({title: titleName, author: authorName, priority: priority})
        setToRead(toReadListCopy)
        setTitleName("")
        setAuthorName("")
        setPriority("")
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    onChange={handleTitleChange}
                    type='text' 
                    placeholder='Enter the title...'
                    required
                />
                <input
                    onChange={handleAuthorChange}
                    type='text' 
                    placeholder='Enter the author...'
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
