import { useState } from "react";

interface Produto {
    id: number;
    descricao: string;
    preco: number;
    ativo: boolean;
}

function Produtos() {
    const[produtos, setProdutos] = useState<Produto[]>([]);

    function getProdutos() {
        setProdutos([
            { id: 1, descricao: "Computador Lenovo", preco: 1745, ativo: true },
            { id: 2, descricao: "Computador Apple", preco: 987, ativo: false },
            { id: 3, descricao: "Computador HP", preco: 1190, ativo: true },
            { id: 4, descricao: "Computador Samsung", preco: 870, ativo: false }
        ])
    }

    return (
        <div className="container text-enter">
            <h2>InfoLoja</h2>
            <hr />

            {produtos.length === 0 ? (
                <p className="text-danger">Não existem produtos</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((p) => {
                            const estiloTexto = !p.ativo ? { color: "#dc3545" } : {};

                            return (
                                <tr key={p.id}>
                                <td style={estiloTexto}>{p.id}</td>
                                <td style={estiloTexto}>{p.descricao}</td>
                                <td style={estiloTexto}>{p.preco} €</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}

            <div className="text-end">
                <button className="btn btn-primary" onClick={getProdutos}>
                    Obter produtos
                </button>
            </div>    
        </div>
    );
}

export default Produtos;