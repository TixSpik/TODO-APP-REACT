import React, { useState, useEffect } from 'react';
import { Container, Snackbar } from '@material-ui/core'
import Header from '../src/components/header/header'
import SendTweets from '../src/components/sendTweets/sendTweets'
import Grow from '@material-ui/core/Grow';
import { TWEETS_STORAGE } from './utils/constants';
import ListTweets from './components/listTweets/listTweets';

function App() {
  const [toastProp, settoastProp] = useState({ open: false, text: null })
  const [allTweets, setallTweets] = useState([])
  const [reloadTweets, setreloadTweets] = useState(false)
  useEffect(() => {
    if (localStorage.getItem(TWEETS_STORAGE) === null) {
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify([]))
    }
    const GetAllTweetsFromStorage = localStorage.getItem(TWEETS_STORAGE)
    const AllTweetssToArray = JSON.parse(GetAllTweetsFromStorage)
    setallTweets(AllTweetssToArray)
    setreloadTweets(false)
  }, [reloadTweets])

  const deleteTweet = (index) => {
    allTweets.splice(index, 1)
    setallTweets(allTweets)
    localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweets))
    setreloadTweets(true)
  }

  function GrowTransition(props) {
    return <Grow {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    settoastProp({
      open: false
    })
  };

  return (
    <Container className='tweets-simulator' maxWidth={false}>
      <Header />
      <SendTweets settoastProp={settoastProp} allTweets={allTweets} />
      <ListTweets deleteTweet={deleteTweet} settoastProp={settoastProp} allTweets={allTweets} />
      <Snackbar
        TransitionComponent={GrowTransition}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={toastProp.open}
        autoHideDuration={1500}
        message={<span id='message-id' >{toastProp.text}</span>}
        onClose={handleClose}
      />
    </Container>
  );
}

export default App;
