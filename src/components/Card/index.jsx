import './styles.css'

const miniatures = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeP0eoqVHbuSA1BDVz_kqdpyvZ2h6gsuKEPQ&usqp=CAU',
'https://media.tenor.com/xDA4JUA1_8wAAAAC/papyrus-undertale.gif',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9PL9-43y8sxIbn28H2GBcR5D4L3di2G-INw06HADMfx0-h2JfCF3dcaCKcXGcGQY5PE',
'https://st.depositphotos.com/1979759/3396/v/600/depositphotos_33969387-stock-illustration-pixel-heart-concept-vector-illustration.jpg&usqp=CAU',
'https://preview.redd.it/hrpi6ooa2zq81.jpg?auto=webp&s=c357260d281b4bcc40c4900998bfbf146e282f8e'
]
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Card(props) {
    const {name,desc,price,image} = props;
    return (<div className='card'>
        <img className='miniature' src={miniatures[getRandomInt(0, 3)]} alt="" />
        <h1 className='name'>{name}</h1>
        <p className='desc'>{desc}</p>
        <img className='image' src={image} alt="" />
        <p className='price'>{price}</p>
        <a href="https://preview.redd.it/hrpi6ooa2zq81.jpg?auto=webp&s=c357260d281b4bcc40c4900998bfbf146e282f8e">
        <button className='botão'><p>comprar</p></button>
        </a>
    </div>);
}

export default Card;