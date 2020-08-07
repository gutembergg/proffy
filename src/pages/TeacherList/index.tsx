import React from 'react'

import PageHeaders from '../../components/PageHeaders'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'
import Input from '../../components/Inputs'
import Select from '../../components/Select'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeaders title="Voici les Proffys disponibles.">
        <form id="search-teacher">
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
          <Select
            name="week_day"
            label="Jour de la semaine"
            options={[
              { value: '0', label: 'Dimanche' },
              { value: '1', label: 'Lundi' },
              { value: '2', label: 'Mardi' },
              { value: '3', label: 'Mercredi' },
              { value: '4', label: 'Jeudi' },
              { value: '5', label: 'Vendredi' },
              { value: '6', label: 'Samedi' }
            ]}
          />

          <Input type="time" name="time" label="Horaire" />
        </form>
      </PageHeaders>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList
