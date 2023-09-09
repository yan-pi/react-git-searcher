import {BsSearch} from 'react-icons/bs'

function Search() {
  return (
    <div>
        <h2>Busque por um usuario:</h2>
        <p>Conheça seus melhores repositórios</p>
        <div>
            <input type="text" placeholder="digite o nome do usuario" />
            <button><BsSearch/></button>
        </div>
    </div>
  )
}

export default Search