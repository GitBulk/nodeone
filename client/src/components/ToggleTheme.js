import '../toggle_theme.css';
import useLocalStorage from 'use-local-storage'

export default function ToggleTheme() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  function switchTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className='app' data-theme={theme}>
      <div className='login'>
        <h1>Login</h1>
        <div className='container'>
          <div className='top'>
            <i className='fab fa-google'></i>
            <i className='fab fa-facebook'></i>
            <i className='fab fa-apple'></i>
            <i className='fab fa-twitter'></i>
          </div>
          <p className='divider'><span>Or</span></p>
          <form>
            <label>Email</label>
            <input type='email' placeholder='Enter your email' />
            <label>Password</label>
            <input type='password' placeholder='Enter your password' />
            <div className='remember'>
              <input type='checkbox' />
              <p>Remember me</p>
            </div>
            <button>Login</button>
          </form>
          <div className='bottom'>
            <p>Forget your password ?</p>
            <a href='/'>Reset password</a>
          </div>
        </div>
        <div className='theme-toggle'>
          <h2>Light Theme</h2>
          <i onClick={switchTheme} className='fas fa-toggle-on'></i>
        </div>
      </div>
    </div>
  )
}
