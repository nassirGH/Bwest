import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                     onClick={() => {
                       this.toggle('2');
                     }}>
              <i className="icon-speech"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '3' })}
                     onClick={() => {
                       this.toggle('3');
                     }}>
              {/* <i className="icon-settings"></i> */}
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Today</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/7.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>Meeting with <strong>Nassir</strong> </div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 1 - 3pm
                </small>
                <small className="text-muted">
                  <i className="icon-location-pin"></i>Ashrafeyi , Beirut
                </small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="assets/img/avatars/4.jpg" alt="admin@bootstrapmaster.com"></img>
                </div>
                <div>meeting with <strong>Rayan</strong></div>
                <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; 4 - 5pm
                </small>
                <small className="text-muted">
                  <i className="icon-social-skype"></i> On-line
                </small>
              </ListGroupItem>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Tomorrow</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                <div>meeting with - <strong>Omar</strong></div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 10 - 11pm</small>
                <small className="text-muted"><i className="icon-home"></i>&nbsp; item display</small>
                <div className="avatars-stack mt-2">
                  
                  
                
                </div>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-success list-group-item-divider">
                <div><strong>Upcoming tasks</strong> Meetup with fadi </div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 2:30pm</small>
                <small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Jemayze</small>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-primary list-group-item-divider">
                <div><strong>Team meeting</strong></div>
                <small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 6pm</small>
                <small className="text-muted"><i className="icon-home"></i>&nbsp; creativeLabs HQ</small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  </div>
                  
                  
       
                
                 
                </div>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">message from</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Omar osman </div>
              <small className="text-muted">Hello im omar , i really like to sell an item ......
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">message from</small>
                <small className="text-muted float-right mt-1">7:08 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Rayan</div>
              <small className="text-muted">Hello im Rayan , i need to buy an item ......
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">message from</small>
                <small className="text-muted float-right mt-1">11:52 AM</small>
              </div>
              <div className="text-truncate font-weight-bold">Ali fawaz</div>
              <small className="text-muted">Hello im Ali , i need to buy an item ......
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">message from </small>
                <small className="text-muted float-right mt-1">10:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Nassir Ghraizi</div>
              <small className="text-muted">Hello im Nassir , i need to buy an item ......
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                  <span className="avatar-status badge-success"></span>
                </div>
              </div>
              <div>
                <small className="text-muted">message from</small>
                <small className="text-muted float-right mt-1">1:05 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Samar</div>
              <small className="text-muted">please i need to know the price og bla bla bala.....
              </small>
            </div>
          </TabPane>
          
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
