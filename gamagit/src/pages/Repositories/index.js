import React, { useEffect, useState } from 'react';
import * as S from './styled';


export default function Repositories() {
    const [ repositories, setRepositoies] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        console.log(repositoriesName)
        setRepositoies(repositoriesName);
        //localStorage.clear();
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
        <S.LinkHome to="/"> Voltar </S.LinkHome>
        </S.Container>
    );
}