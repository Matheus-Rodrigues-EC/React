import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function Repositories() {
    const history = useHistory();
    const [ repositories, setRepositoies] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null){
            repositoriesName = JSON.parse(repositoriesName);
            console.log(repositoriesName)
            setRepositoies(repositoriesName);
            localStorage.clear();
        }else{
            history.push('/');
        }
        
        
    }, []);

    return(
        <S.Container>
        <S.Title>Repositórios</S.Title>
        <S.List>
            <c>Repositório</c>
            {repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório: {repository} </S.ListItem>
                    )
                })}

        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    );
}