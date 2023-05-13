import estilo from './styles.module.scss'
import Filtrar from '../../components/MenuFiltrar'
import Produtos from '../../components/ProdutoCard'
import Ordenar from '../../components/MenuOrdenar'
import { useEffect, useState } from 'react'
export default function ProdutoHome() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        console.log(1)
        fetch('https://backend-dc-server.onrender.com/produtos').then(res => res.json()).then(data => setProdutos(data))
    }, [])

    return (
        <div className={estilo.teste}>
            <div className={estilo.container}>
                <div className={estilo.Ordenar}>
                    <Ordenar />
                </div>
                <div className={estilo.containerProdutos}>
                    <div className={estilo.menuFiltrar}>
                        <Filtrar />
                    </div>
                    <div className={estilo.produtos}>
                        {produtos.map((produto) => (
                            <Produtos key={produto.id} id={produto.id} categoria={produto.categoria} descricao={produto.descricao} valor={produto.valor} img={produto.img} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}