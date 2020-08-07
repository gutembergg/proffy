import React from 'react'
import PageHeaders from '../../components/PageHeaders'
import Input from '../../components/Inputs'
import WarningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import './styles.css'

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeaders
        title="Incroyable que vous voulez donner des cours."
        description="Premier pas c'est remplir le formulaire"
      />
      <main>
        <fieldset>
          <legend>Entrer vous données</legend>

          <Input name="name" label="Name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Vos cours</legend>

          <Select
            name="subject"
            label="Langages de programmation"
            options={[
              { value: 'PHP', label: 'PHP' },
              { value: 'Java', label: 'Java' },
              { value: 'JavaScript', label: 'JavaScript' },
              { value: 'Python', label: 'Python' },
              { value: 'CMS', label: 'CMS' },
              { value: 'HTML', label: 'HTML' }
            ]}
          />
          <Textarea name="technologies" label="Technologies" />
          <Input name="cost" label="Prix par heure" />
        </fieldset>

        <footer>
          <p>
            <img src={WarningIcon} alt="warning" />
            Important ! <br />
            Remplissez tout les champs
          </p>
          <button type="button">Valider</button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm
