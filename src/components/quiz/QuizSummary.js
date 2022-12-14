import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
            this.setState({
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            });
        }
    }

    render () {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30 ) {
            remark = '¡Necesitas mas practica, No has logrado salvar a Ione!';
        } else if (userScore > 30 && userScore <= 50) {
            remark = '¡Mejor suerte la próxima vez, No has logrado salvar a Ione!';
        } else if (userScore <= 70 && userScore > 50) {
            remark = '¡Puedes hacerlo mejor!';
        } else if (userScore >= 71 && userScore <= 84) {
            remark = '¡Lo hiciste genial, Has logrado salvar a Ione!';
        } else {
            remark = '¡Eres un genio absoluto, Has logrado salvar a Ione!';
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1>Juego finalizado</h1>
                    <div className="container stats">
                        <h4>{remark}</h4>
                        <h2>Tu puntuación: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left">Número total de preguntas: </span>
                        <span className="right">{this.state.numberOfQuestions}</span><br />

                        <span className="stat left">Número de preguntas intentadas: </span>
                        <span className="right">{this.state.numberOfAnsweredQuestions}</span><br />

                        <span className="stat left">Número de respuestas correctas: </span>
                        <span className="right">{this.state.correctAnswers}</span> <br />

                        <span className="stat left">Número de respuestas incorrectas: </span>
                        <span className="right">{this.state.wrongAnswers}</span><br />

                        <span className="stat left">Sugerencias utilizadas: </span>
                        <span className="right">{this.state.hintsUsed}</span><br />

                        <span className="stat left">50-50 utilizadas: </span>
                        <span className="right">{this.state.fiftyFiftyUsed}</span>
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to ="/play/quiz">Juegar de nuevo</Link>
                            </li>
                            <li>
                                <Link to ="/">Volver inicio</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>
                            <Link to ="/play/quiz">Take a Quiz</Link>
                        </li>
                        <li>
                            <Link to ="/">Back to Home</Link>
                        </li>
                    </ul>
                </section>
            );
        }
        return (
            <Fragment>
                <Helmet><title>Certificado</title></Helmet>
                <div className="quiz-summary">
                    {stats}
                </div>
            </Fragment>
        );
    }
}

export default QuizSummary;