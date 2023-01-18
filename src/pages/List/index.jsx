import Card from '../../components/Card'
import './styles.css'
import api from '../../services/api'

import { useEffect,useState } from 'react';

function List() {
    const [products,setProducts] = useState([])

    const getProducts = async () => {
    const res = await api.get('/products')
    setProducts(res.data)
    }
    
    useEffect(() => {
       getProducts()
       
        console.log('montou o componente',products)
    }, [])
    console.log(products)
    return (
    <>
    <div className="header">
        <img className='SansGif' src="https://media.tenor.com/gvyXE6E1khQAAAAC/sans-fight.gif" alt=""/>
        <nav className='nav-header'>
            <p>Home</p>
            <p>Quem somos</p>
            <p>Produtos</p>
        </nav>
    </div>    
    <div className="produ">
    {products.map((product) => <Card
                key={product.id}
                id={product.id}
                name={product.name}
                desc={product.desc}
                price={product.price}
                image={product.image}
                miniature={product.miniature} />
            )}
    </div>    
    <div className="Produ2">
    {products.map((product) => <Card
                key={product.id}
                id={product.id}
                name={product.name}
                desc={product.desc}
                price={product.price}
                image={product.image}
                miniature={product.miniature} />
            )}
    </div>
    <div className="footer">
        <p className='All-rights'>©All rights reserverd to UndertaleBakkery</p>
    </div>  
        </> );
}  
export default List;