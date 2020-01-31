import React from 'react'
import '../tweet/tweet.scss'
import { Card, CardContent } from '@material-ui/core'
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone'
import moment from 'moment'

export default function Tweet(props) {
    const { tweet: { name, tweet, time }, index, settoastProp, deleteTweet } = props
    return (
        <Card className='tweet'>
            <CardContent>
                <div className='tweet__header'>
                    <h5>{name}</h5>
                    <DeleteTwoToneIcon onClick={() => {

                        deleteTweet(index)

                        settoastProp({
                            open: true,
                            text: 'Tweet Eliminado'
                        })
                    }} />
                </div>
                <p>{tweet}</p>
                <div className='tweet__date'>
                    {moment(time).format('DD/MM/YYYY HH:mm')}
                </div>
            </CardContent>
        </Card>
    )
}
