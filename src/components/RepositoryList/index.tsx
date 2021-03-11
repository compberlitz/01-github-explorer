import { useEffect, useState } from 'react';
import { RepositoryItem } from "../RepositoryItem";

import './RepositoryList.scss';

interface RepositoryItem{
    name: string,
    description: string,
    html_url: string,
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<RepositoryItem[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repositoryObject => {
                    return <RepositoryItem key={repositoryObject.name} itemRepositoryObject={repositoryObject} />
                })}
            </ul>
        </section>
    )
}