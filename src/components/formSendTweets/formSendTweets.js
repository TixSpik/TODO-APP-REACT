import React, { useState } from 'react'
import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'
import '../formSendTweets/formSendTweets.scss'

export default function FormSendTweets(props) {
    const { sendTweet } = props
    const [formValue, setformValue] = useState({ name: '', tweet: '' })
    const onChangeForm = (e) => {
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='form-send-tweet'>
            <h2 className='form-send-twwet__title' >Crear TODO</h2>
            <form className='form-send-tweet__form' onSubmit={e => sendTweet(e, formValue)} onChange={onChangeForm} >
                <FormControl>
                    <FormGroup>
                        <TextField autoComplete='off' className='form-send-tweet__form-name'
                            type='text'
                            name='name'
                            placeholder='Nombre de Usuario'
                            margin='normal'
                        />
                    </FormGroup>
                    <FormGroup>
                        <TextField className='form-send-tweet__form-textarea'
                            name='tweet'
                            multiline
                            rows='6'
                            placeholder='Escribe la actividad...'
                            margin='normal'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button className='form-send-tweet__form-btnEnviar'
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            Guardar
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}
