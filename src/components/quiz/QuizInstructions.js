import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import answer from '../../assets/img/answer.png';
import fiftyFifty from '../../assets/img/fiftyFifty.PNG';
import hints from '../../assets/img/hints.PNG';
import options from '../../assets/img/options.PNG';
import background from '../../assets/img/background.jpg';
import tz from '../../assets/img/tz.png';

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Historia</title></Helmet>
        <div className="instructions container">
            <h1>2021-2022</h1>
            <ul>
                <img id="ione" src={background} alt=""/>
            </ul>
            <p>Nuestro producto competencial tratara sobre un video juego que se desenlazara de una historia tratada sobre: Una niña llamada Ione, esta niña tenía como costumbre irse con su familia, conformada por su mama su papa y su hermana menor a almorzar a un famoso restaurante de la ciudad de New York. Un domingo como cualquier otro ellos deciden irse para el restaurante, pero era época de navidad por lo cual estaba nevado y las carretas estaban lisas y mojadas. En un descuido el padre de Ione pierde el control de su carro y por lo tanto se volcó, sufrieron un grave accidente donde fallece su hermana, y sus padres junto con Ione quedan gravemente heridos. Con el pasar de los días los papas pueden recuperarse, pero ione queda en coma, cada vez más y más grave. Con el pasar de los días el doctor les dice a los papas que lo mejor es desconectarla porque si no pasaría años en un hospital. Los papas con el dolor en el alma deciden hacerlo. Pero se llevan con la gran sorpresa de que Ione no quiere partir aun del mudo y la vuelven a conectar con oxígeno para ayudarle a sus pulmones a mejorar. Pasan los años y Ione sigue en el hospital, pero esta vez no se encuentra en coma si no en el limbo.</p>
            
            <h1>¿Instrucciones de como jugar?</h1>
            <ul className="browser-default" id="main-list">
                <li>El juego tiene una duración de 15 minutos y termina tan pronto como transcurre tu tiempo.</li>
                <li>Cada juego consta de 20 preguntas.</li>
                <li>
                    Cada pregunta contiene 4 opciones.
                    <img src={options} alt="Quiz App options example" />
                </li>
                <li>
                Seleccione la opción que mejor responda a la pregunta haciendo clic (o seleccionándola).
                    <img src={answer} alt="Quiz App answer example" />
                </li>
                <li>
                    Cada juego tiene 2 ayudas de vida, las cuales son:
                    <ul id="sublist">
                        <li>(2) 50-50 oportunidades.</li>
                        <li>(5) Consejos.</li>
                    </ul>
                </li>
                <li>
                    Seleccionar una línea de vida 50-50
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    haciendo clic en el icono eliminará '2' respuestas incorrectas, dejando la respuesta correcta y una respuesta incorrecta.
                    <ul>
                    <img src={fiftyFifty} alt="Quiz App Fifty-Fifty example"/>
                    </ul>
                </li>
                <li>
                    El uso de una
                    <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                    eliminará '1' respuesta incorrecta dejando dos respuestas incorrectas y una respuesta correcta. Puede utilizar tantas sugerencias como sea posible en una sola pregunta.
                    <img src={hints} alt="Quiz App hints example" />
                </li>
                <li>Siéntete libre de abandonar (o retirarte de) el juego en cualquier momento. En ese caso, su puntaje se revelará después.</li>
                <li>El temporizador se inicia tan pronto como se carga el juego.</li>
                <li>Hagamos esto si crees que tienes lo que se necesita para salvar a 'Ione'.</li>
            </ul>
            <div>
                <span className="left"><Link to="/">Regresar a inicio</Link></span>
                <span className="right"><Link to="/play/quiz">¡Bien, hagamos esto!</Link></span>
            </div>
            <h1>Patrocinado por:</h1>
            <ul>
                <img id="tz" src={tz} alt="" />
            </ul>
        </div>
    </Fragment>
);

export default QuizInstructions;