
import { useState } from 'react'
import { App as SendbirdLiveApp } from '@sendbird/live-uikit-react'
import './App.css'

function SampleApp() {
  const [appId, setAppId] = useState('')
  const [userId, setUserId] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [hasSession, setHasSession] = useState(false)

  return (
    <div className="App">
      {
        hasSession ?
          <SendbirdLiveApp
              appId={appId}
              userId={userId}
              accessToken={accessToken ? accessToken : null}
          /> :
          <div className="login-panel">
            <img src='/logo.png' className="logo" />
            <div className='login-form'>
              <div className='section'>Application ID</div>
              <input type='text' className='input'
                placeholder='Application ID'
                value={appId}
                onChange={(event) => setAppId(event.target.value)} />
              <div className='section'>User ID</div>
              <input type='text' className='input'
                placeholder='User ID'
                value={userId}
                onChange={(event) => setUserId(event.target.value)} />
              <div className='section'>Access token (optional)</div>
              <input type='password' className='input'
                placeholder='Access token (optional)'
                value={accessToken}
                onChange={(event) => setAccessToken(event.target.value)} />
              <input type='button' className='submit' value='Sign in'
                onClick={() => setHasSession(true)}/>
            </div>
          </div>
      }
    </div>
  )
}

export default SampleApp
