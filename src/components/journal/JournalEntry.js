import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="jounal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://image.freepik.com/vector-gratis/dibujos-animados-astronauta_50699-129.jpg)'

                }}
            >
            </div>

            <div className="journal__entry-body">
                  <p className="journal__entry-title">
                      Un nuevo Dia
                  </p>
                  <p className="journal__entry-content">
                  Un cuento (del latín, compŭtus, cuenta)1​ es una narración breve creada por uno o varios autores, basada en hechos reales o ficticios, cuya trama es protagonizada por un grupo reducido de personajes y con un argumento relativamente sencillo.

                  </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
