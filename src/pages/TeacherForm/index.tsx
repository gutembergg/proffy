import React from 'react'
import PageHeaders from '../../components/PageHeaders'

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

          <div className="input_block">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div className="input_block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" />
          </div>
          <div className="input_block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp" />
          </div>
        </fieldset>
      </main>
    </div>
  )
}

export default TeacherForm
