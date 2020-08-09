import React from 'react'
import whatsapIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export interface Teacher {
  id: number
  avatar: string
  bio: string
  cost: number
  name: string
  subject: string
  whatsapp: string
}

interface teacherListeItem {
  teacher: Teacher
}

const TeacherItem: React.FC<teacherListeItem> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Prix/heure<strong>{teacher.cost} fr</strong>
        </p>
        <a href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsapIcon} alt="whatsapp" />
          Contacter
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
