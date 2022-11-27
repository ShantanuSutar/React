import React, { Component } from "react";

class CopyDemo extends Component {
    handleCopy() {
        alert("Stop Stealing From me")
    }
    render() {
        return (
            <div>
                <h3>
                    Try Copying Some of this text:
                </h3>
                <section style={{ width: "300px", display: "inline-block" }} onCopy={this.handleCopy} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </section>
            </div >
        )
    }
}

export default CopyDemo;