import React, { useState, FormEvent } from 'react'
import PageHeaders from '../../components/PageHeaders'
import Input from '../../components/Inputs'
import WarningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import { useHistory } from 'react-router-dom'

import './styles.css'
import api from '../../services/api'

function TeacherForm() {
  const history = useHistory()
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [subject, setSubject] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }])

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
  }
  async function handleCreateClass(e: FormEvent) {
    e.preventDefault()
    await api
      .post('/users', {
        name,
        avatar,
        whatsapp,
        subject,
        bio: technologies,
        cost: Number(cost),
        schendule: scheduleItems
      })
      .then(response => {
        alert('Registed OK!!!!!!')
        history.push('/')
      })
      .catch(() => {
        alert('Error register ')
      })
  }

  function scheduleItemsValue(position: number, field: string, value: string) {
    const updateScheduleField = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value }
      }
      return scheduleItem
    })
    setScheduleItems(updateScheduleField)
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeaders
        title="Incroyable que vous voulez donner des cours."
        description="Premier pas c'est remplir le formulaire"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Entrer vous données</legend>

            <Input name="name" label="Name" value={name} onChange={e => setName(e.target.value)} />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Vos cours</legend>

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
            <Textarea
              name="technologies"
              label="Technologies"
              value={technologies}
              onChange={e => setTechnologies(e.target.value)}
            />
            <Input
              name="cost"
              label="Prix par heure"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horaires disponible
              <button type="button" onClick={addNewScheduleItem}>
                {' '}
                + Nouveau horaire
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Jour de la semaine"
                    value={scheduleItem.week_day}
                    onChange={e => scheduleItemsValue(index, 'week_day', e.target.value)}
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
                    name="from"
                    label="De"
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => scheduleItemsValue(index, 'from', e.target.value)}
                  />
                  <Input
                    name="to"
                    label="Jusqu'a"
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => scheduleItemsValue(index, 'to', e.target.value)}
                  />
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={WarningIcon} alt="warning" />
              Important ! <br />
              Remplissez tout les champs
            </p>
            <button type="submit">Valider</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
