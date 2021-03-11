import './RepositoryItem.scss';

interface RepositoryItemProps{
    itemRepositoryObject: {
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props:RepositoryItemProps){
    return (
        <li>
            <strong>{props.itemRepositoryObject.name ?? 'Sem Nome'}</strong>
            <p>{props.itemRepositoryObject.description}</p>

            <a href={props.itemRepositoryObject.html_url}>Acessar repositório</a>
        </li>
    )
}