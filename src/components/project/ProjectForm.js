import styles from './ProjectForm.module.css'
import Input from '../form/Input'

function ProjectForm() {
    return (
       <form className={styles.form}>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome do projeto' />
            <Input type='number' text='Orçamento do Projeto' name='budget' placeholder='Insira o orçamento total' />
            <div>
                <select name='category_id'>
                    <option disable selected>Selecione a categoria</option>
                </select>
            </div>
            <div><input type='submit' value='Criar Projeto'/></div>
       </form>
    )
}

export default ProjectForm