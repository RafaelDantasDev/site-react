import { useHistory } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const hystory = useHistory()

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Cria seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject