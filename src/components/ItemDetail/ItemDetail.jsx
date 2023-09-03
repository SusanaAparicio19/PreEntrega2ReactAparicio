import classes from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, category, objeto, nombre, descripcion, imagen, stock, precio}) => {    
	return (
		<>
            <section style={{backgroundColor: "#F1E0F9", borderRadius:"10"}}>
                <div className={classes.card}>
                    <img className={classes.cardImgTop} src={imagen} alt={nombre}/>
                    <div className={classes.cardBody}>
                        <h4 className={classes.cardTitle}>{objeto} {nombre}</h4>
                        <h6 className={classes.cardTitle2}>{category}</h6>
                        <p className={classes.cardDescripcion}> {descripcion}</p>
                        <p className={classes.cardText}>$ {precio}</p>
                        <h6 className={classes.cardText2}>stock: {stock}</h6>
                        <div className={classes.cardMasMenos}>
                            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada ', quantity)}/>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}    

export default ItemDetail