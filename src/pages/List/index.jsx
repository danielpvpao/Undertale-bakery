import Card from '../../components/Card'
import './styles.css'


import { useEffect,useState } from 'react';
const oldproducts = [
    {
        id: 1,
        desc:'Pãozinho Francês, te enche de determinação ',
        price: '+5 HP',
        image: 'http://paoquentinhosaindo.com.br/portal2/wp-content/uploads/2021/07/pao2.png',
    },
    {
        id: 2,
        name: 'pão sírio',
        desc:'Um sanduíche de pão sírio',
        price: '+4 HP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAfujzmHPWGOdTOuh1y0vuDDZCGTK_9gIg-Q&usqp=CAU',
    },
    {
        id: 3,
        name: 'bolo',
        desc:'Bolo feito de bolo',
        price: '+2 HP',
        image: 'http://paoquentinhosaindo.com.br/portal2/wp-content/uploads/2021/07/pao2.png',
    },
    {
        id: 4,
        name: 'pão doce',
        desc:'Pão doce, é apenas um pão doce',
        price: '+1 HP',
        image: 'http://paoquentinhosaindo.com.br/portal2/wp-content/uploads/2021/07/pao2.png',
    }
];

function List() {
    const [products,setProducts] = useState([])

    const getProducts = async () => {
        await fetch('https://undertale-bakery.vercel.app/products')
        .then((res) => res.json())
        .then((res) => setProducts(res))

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
        </> );
}

export default List;