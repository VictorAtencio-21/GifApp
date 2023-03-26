import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    
    return (
        <>
            <h2>{category}</h2>

            {
                isLoading && ( <h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map(({id, title, url}) => (
                        <GifItem key={ id } title={ title } url={ url }/>
                    ))
                }
            </div>
        </>
    )
}
