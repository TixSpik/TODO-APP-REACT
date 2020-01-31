import React from 'react'
import { Grid } from '@material-ui/core'
import '../listTweets/listTweets.scss'
import Tweet from '../tweet/tweet'

export default function ListTweets(props) {
    const { allTweets, settoastProp, deleteTweet } = props
    if (!allTweets || allTweets.length === 0) {
        return (
            <div className='list-tweets-empty'>
                <h2>NO HAY TODOS POR HACER</h2>
            </div>
        )
    }
    return (
        <Grid container spacing={3} className='list-tweets'>
            {allTweets.map((tweet, index) => (
                <Grid key={index} item xs={4}>
                    <Tweet deleteTweet={deleteTweet} settoastProp={settoastProp} tweet={tweet} index={index} />
                </Grid>
            ))}
        </Grid>
    )
}
