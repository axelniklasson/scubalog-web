import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ feed }) => ({
    feed
});

const FeedItem = ({ data }) => <p>{data.text}</p>;

class Feed extends Component {
    render() {
        const { data } = this.props.feed;
        
        return (
            <div>
                Recent
                {data.map(el => (
                    <FeedItem data={el} key={el.id} />
                ))}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Feed);