import React from 'react'

import PageHeaders from '../../components/PageHeaders'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'
import Input from '../../components/Inputs'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeaders title="Voici les Proffys disponibles.">
        <form id="search-teacher">
          <Input name="subject" label="Sujet" />
          <Input name="week_day" label="Jour de la semaine" />
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
