import {Link, withRouter} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {RiGamepadFill, RiPlayListAddFill} from 'react-icons/ri'
import ToggleTheme from '../../context/ToggleTheme'

import {
  SideContainer,
  ListItem,
  ItemPara,
  FooterContainer,
  ContactPara,
  SocialLogos,
  navList,
} from './styledComponents'

const SideNav = () => (
  <ToggleTheme.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SideContainer toggle={isDarkTheme}>
          <navList>
            <ListItem toggle={isDarkTheme}>
              <AiFillHome />
              <ItemPara>
                <Link to="/" style={{textDecoration: 'none', color: '#475569'}}>
                  Home
                </Link>
              </ItemPara>
            </ListItem>
            <ListItem toggle={isDarkTheme}>
              <AiFillFire />
              <ItemPara>
                <Link
                  to="/trending"
                  style={{textDecoration: 'none', color: '#475569'}}
                >
                  Trending
                </Link>
              </ItemPara>
            </ListItem>
            <ListItem toggle={isDarkTheme}>
              <RiGamepadFill />
              <ItemPara>
                <Link
                  to="/gaming"
                  style={{textDecoration: 'none', color: '#475569'}}
                >
                  Gaming
                </Link>
              </ItemPara>
            </ListItem>
            <ListItem toggle={isDarkTheme}>
              <RiPlayListAddFill />
              <ItemPara>
                <Link
                  to="/saved-videos"
                  style={{textDecoration: 'none', color: '#475569'}}
                >
                  Saved videos
                </Link>
              </ItemPara>
            </ListItem>
          </navList>

          <FooterContainer>
            <ContactPara>CONTACT US</ContactPara>
            <SocialLogos>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                height="50px"
                width="50px"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                height="50px"
                width="50px"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                height="50px"
                width="50px"
              />
            </SocialLogos>
            <ContactPara>
              Enjoy! Now to see your channels and recommendations!
            </ContactPara>
          </FooterContainer>
        </SideContainer>
      )
    }}
  </ToggleTheme.Consumer>
)

export default withRouter(SideNav)
