import React from 'react';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({dbExterno}) {
    return (
        <QuizScreen
            externalQuestion={dbExterno.questions}
            externalBg={dbExterno.bg}
        />
        // {/*<pre style={{ color: 'black' }}>
        //    {JSON.stringify(dbExterno.questions, null, 4)}
        // </pre>*/}
    );
}

export async function getServerSideProps(context){
    //console.log(content.query.id);
    
    const dbExterno = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
    .then((respostaDoServer) => {
        if (respostaDoServer.ok){
            return respostaDoServer
        }
    })
    .then((respostaConvertidaEmObjeto) => { return respostaConvertidaEmObjeto; })
    .catch((err) => {
        console.log(err);
    });

    console.log(dbExterno);

    return {
        props: {
            dbExterno,
        },
    };
}