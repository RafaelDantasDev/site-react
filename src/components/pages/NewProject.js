import { useHistory } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const hystory = useHistory()

    function createPost(project){

        // initialize cost and services
        project.cost = 0
        project.servoces = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            }
        }).then((resp => resp.json()))
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Cria seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject