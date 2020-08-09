import React, { useState, FormEvent } from 'react'

import PageHeaders from '../../components/PageHeaders'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Inputs'
import Select from '../../components/Select'
import api from '../../services/api'

import './styles.css'

function TeacherList() {
  const [teacherList, setTeacherlist] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  async function searchTeacher(e: FormEvent) {
    e.preventDefault()

    const response = await api.get('/users', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setTeacherlist(response.data)
  }
  console.log(teacherList)

  return (
    <div id="page-teacher-list" className="container">
      <PageHeaders title="Voici les Proffys disponibles.">
        <form id="search-teacher" onSubmit={searchTeacher}>
          <Select
            name="subject"
            label="Langages de programmation"
            value={subject}
            onChange={e => setSubject(e.target.value)}
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
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
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

          <Input
            type="time"
            name="time"
            label="Horaire"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </PageHeaders>
      <main>
        {teacherList.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

export default TeacherList
