import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
          <div className="header">
            <div className="header-inner fl-cont fl-center-h">
                    <div className="fl-wrap fl-grow padd-left-md red">
                        header
                    </div>
                    <div className="fl-wrap padd-ri-md hidden">
                </div>
            </div>
          </div>
        );
    }
}