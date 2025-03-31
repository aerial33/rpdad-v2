import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <p style={{ textAlign: 'center', paddingBottom: '20px' }}>
        <b>Bienvenue sur votre tableau de bord !</b> <br />
        {" C'est ici que les administrateurs du site se connecteront pour gérer votre site web."}
      </p>
    </div>
  )
}

export default BeforeLogin
