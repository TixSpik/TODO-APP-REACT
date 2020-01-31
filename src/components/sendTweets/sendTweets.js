import React, { useState } from 'react'
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import moment from 'moment'
import './sendTweets.scss'
import ModalContainer from '../modalContainer/modalContainer'
import FormSendTweets from '../formSendTweets/formSendTweets'
import { TWEETS_STORAGE } from '../../utils/constants'

export default function SendTweets(props) {
    const [isOpenModal, setisOpenModal] = useState(false)
    const { settoastProp, allTweets } = props

    const openModal = () => {
        setisOpenModal(true)
    }
    const closeModal = () => {
        setisOpenModal(false)
    }

    const sendTweet = (e, formValue) => {
        e.preventDefault()
        const { name, tweet } = formValue
        console.log(formValue)
        let tweetsArray = []

        if (allTweets) {
            tweetsArray = allTweets
        }

        if (!tweet || !name) {
            console.log('Todos los campos son obligatorios')
            settoastProp({
                open: true,
                text: 'Todos los campos son obligatorios'
            })
        } else {
            formValue.time = moment()
            tweetsArray.push(formValue)
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(tweetsArray))
            closeModal()
            settoastProp({
                open: true,
                text: 'TODO guardado exitosamente'
            })
        }
        tweetsArray = []
    }

    return (
        <div className='send-tweet'>
            <Fab
                className='send-tweet__open-modal'
                color='primary'
                aria-label='add'
                onClick={openModal}
            >
                <AddIcon />
            </Fab>
            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweets sendTweet={sendTweet} />
            </ModalContainer>
        </div>
    )
}
