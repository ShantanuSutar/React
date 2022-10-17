class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    bangs={4}
                    img="https://images.unsplash.com/photo-1665989215795-f67f4723087d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <Hello
                    to="Briteny"
                    from="Adelle"
                    bangs={12}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))