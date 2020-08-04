import React from 'react'
import whatsapIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://listimg.pinclipart.com/picdir/s/65-653994_pop-selfie-la-casa-de-papel-professor-la.png"
          alt="teacher"
        />
        <div>
          <strong>Professeur 1</strong>
          <span>ReactJs</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto accusamus error delectus,
        deserunt perspiciatis provident quo blanditiis dignissimos rem minima voluptates
        voluptatibus ratione dolore. Quibusdam error tenetur delectus voluptatum deleniti!
      </p>
      <footer>
        <p>
          Prix/heure<strong>50 fr</strong>
        </p>
        <button type="button">
          <img src={whatsapIcon} alt="whatsapp" />
          Contacter
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
