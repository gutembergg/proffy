import React from 'react'

import PageHeaders from '../../components/PageHeaders'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeaders title="Voici les Proffys disponibles.">
        <form id="search-teacher">
          <div className="input_block">
            <label htmlFor="subject">Sujet</label>
            <input type="text" id="subject" />
          </div>

          <div className="input_block">
            <label htmlFor="week_day">Jour de la semaine</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input_block">
            <label htmlFor="time">Horaire</label>
            <input type="text" id="time" />
          </div>
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
