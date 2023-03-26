import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [ categories, setCategories ] = useState(['Harry Potter', 'Top Gun', 'The Matrix'])

    const handleAdd = ( newCategory ) => {

        if ( categories.includes(newCategory) ) {
            console.log('The category already exists')
        } else {
            setCategories( [ newCategory, ...categories] );
        }

    }

    return (
        <>
            <h1>GifApp</h1>

            <AddCategory
                onNewCategory= { handleAdd }
            />

            {
                categories.map( ( category ) => (
                    <>
                        <GifGrid 
                        key={category} 
                        category={category}
                        
                        />
                        <button
                            className='delete-button'

                            onClick={ () => {
                                const newCategories = categories.filter( (cat) => cat !== category )
                                setCategories( newCategories )
                            }}
                        >
                            Remove
                        </button>

                        <hr />

                    </>
                ))
            }
        </>
    )
}
