import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

// each List design (functional component)
const ConvertList = props => {
  const {historyList, callDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onClickDelete = () => {
    callDelete(id)
  }

  return (
    <li className="each-list-style">
      <p className="time">{timeAccessed}</p>
      <div className="list-center-content">
        <img src={logoUrl} className="each-logo" alt="domain logo" />
        <p className="brand-name">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        onClick={onClickDelete}
        className="delete-icon"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

class App extends Component {
  state = {searchInput: '', historyList: initialHistoryList}

  userSearchedInput = event => {
    this.setState({searchInput: event.target.value})
  }

  callDelete = id => {
    const {historyList} = this.state
    const filterDeleted = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: filterDeleted})
  }

  render() {
    const {searchInput, historyList} = this.state

    const filteredSearch = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="header-style">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="logo-img"
            alt="app logo"
          />

          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search History"
              className="search-bar"
              value={searchInput}
              onChange={this.userSearchedInput}
            />
          </div>
        </div>
        <div className="body-bg-container">
          {filteredSearch.length < 1 ? (
            <div>
              <p>There is no history to show</p>
            </div>
          ) : (
            <ul>
              {filteredSearch.map(eachItem => (
                <ConvertList
                  historyList={eachItem}
                  key={eachItem.id}
                  callDelete={this.callDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
