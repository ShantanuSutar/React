class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My Image</h1>
                <img src="https://images.unsplash.com/photo-1589463349208-95817c91f971?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="india" />
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))