import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'

function ProjectForm() {
    return (
       <form className={styles.form}>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome do projeto' />
            <Input type='number' text='Orçamento do Projeto' name='budget' placeholder='Insira o orçamento total' />
            <Select name='category_id' text='Selecione a categoria'/>
            <div><input type='submit' value='Criar Projeto'/></div>
       </form>
    )
}

export default ProjectForm