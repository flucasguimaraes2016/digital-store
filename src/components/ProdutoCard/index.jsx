import tenis from './Images/tenis.png'
import estilo from './styles.module.scss'
import { Link } from 'react-router-dom'
export default function ProdutoHome(props) {
    return (

        <div className={estilo.ProdutoGeral}>
            <Link to={"/produtos/" + props.id}>
                <div className={estilo.Produto}>
                    <div className={estilo.caixaImagem}>
                        <img src={tenis} alt="" className={estilo.ImagemProduto} />
                    </div>
                    <div className={estilo.TipoProduto}>
                        
                        {props.categoria}
                    </div>
                    <div className={estilo.NomeProduto}>
                        {props.descricao}
                    </div>
                    <div className={estilo.PrecoProduto}>
                       {props.valor}
                    </div>
                </div>
            </Link>
        </div>


    )
}